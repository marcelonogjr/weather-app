import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';

import WeatherContext from '../../../store/weather-context';
import isErrorType from '../../../models/IsErrorType';
import styles from './WeatherSearchBar.module.css';
import { GeocodeAPIDataType } from '../../../models/WeatherAPIDataType';

type WeatherSearchBarPropsType = {
  zoom: string;
  mapLayer: string;
};

const WeatherSearchBar = (props: WeatherSearchBarPropsType) => {
  const [addressInput, setAddressInput] = useState('');
  const [showList, setShowList] = useState(false);
  const [addressList, setAddressList] = useState<GeocodeAPIDataType>([]);
  const [selectedAddress, setSelectedAddress] = useState(-1);
  const [pressedEnterEarly, setPressedEnterEarly] = useState(false);
  const [usedListForInput, setUsedListForInput] = useState(false);

  const addressListRef = useRef<HTMLParagraphElement[] | null[]>([]);

  const { changeLocation, statusIsReady, changeInError } =
    useContext(WeatherContext);
  const navigate = useNavigate();
  const locationSearch = useLocation().search;

  // const serverUrl = 'http://localhost:5000';
  const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  useEffect(() => {
    const abortController = new AbortController();

    const fetchLocation = async (addressQuery: string) => {
      try {
        const response = await fetch(
          `${serverUrl}/api/find-location?address=${addressQuery}`
        );
        const responseJSON = await response.json();
        addressListRef.current = [];

        if (!response.ok && isErrorType(responseJSON)) {
          throw new Error(responseJSON.error);
        } else {
          const typeNarrowing = (
            response: any
          ): response is GeocodeAPIDataType => {
            return (response as GeocodeAPIDataType)[0].placeName !== undefined;
          };
          if (typeNarrowing(responseJSON)) {
            setAddressList(responseJSON);
            if (pressedEnterEarly) {
              const newPath = `?address=${responseJSON[0].placeName}&lat=${responseJSON[0].center.lat}&lon=${responseJSON[0].center.lon}&zoom_level=${props.zoom}&weather_layer=${props.mapLayer}`;
              navigate(newPath, { replace: true });
              changeInError({
                errorStatus: false,
                errorMessage: '',
              });
              setPressedEnterEarly(false);
            }
          }
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          changeInError({
            errorStatus: true,
            errorMessage: error.message,
          });
        }
      }

      return () => {
        abortController.abort();
      };
    };

    const timer = setTimeout(() => {
      if (addressInput.length >= 3 && !usedListForInput) {
        setSelectedAddress(-1);
        fetchLocation(addressInput);
      }
    }, 500);
    return () => {
      if (!usedListForInput) {
        clearTimeout(timer);
      }
    };
  }, [
    addressInput,
    usedListForInput,
    pressedEnterEarly,
    navigate,
    props.mapLayer,
    props.zoom,
    setAddressList,
    locationSearch,
    changeInError,
  ]);

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuery = event.currentTarget.value;
    inputQuery.trim().replace(/[/@!#$%*()'"=+§]/g, '');
    setAddressInput(inputQuery);
    setAddressList([]);
    if (usedListForInput) {
      setSelectedAddress(-1);
      setUsedListForInput(false);
    } else {
      setShowList(true);
    }
  };

  const inputKeyboardEventHandler = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === 'ArrowDown' && selectedAddress < addressList.length - 1) {
      setShowList(true);
      setSelectedAddress(selectedAddress + 1);
      if (selectedAddress > 1) {
        addressListRef.current[selectedAddress + 3]?.scrollIntoView(false);
      }
    }
    if (event.key === 'ArrowUp' && selectedAddress > 0) {
      setSelectedAddress(selectedAddress - 1);
      if (selectedAddress > 0) {
        addressListRef.current[selectedAddress + 1]?.scrollIntoView(false);
      }
    }
    if (event.key === 'Tab') {
      if (selectedAddress > -1) {
        setShowList(false);
        setUsedListForInput(true);
        setAddressInput(addressList[selectedAddress].placeName);
      } else {
        setShowList(false);
      }
    }
    if (event.key === 'Enter') {
      setShowList(false);
      statusIsReady({
        infoIsReady: false,
        mapIsReady: false,
      });
      if (selectedAddress > -1) {
        setUsedListForInput(true);
        setAddressInput(addressList[selectedAddress].placeName);
      } else {
        setPressedEnterEarly(true);
      }
    }
  };

  const addressClickHandler = (
    event: React.MouseEvent<HTMLParagraphElement>
  ) => {
    const selectedName = event.currentTarget.textContent;

    if (selectedName) {
      setShowList(false);
      setUsedListForInput(true);
      setAddressInput(selectedName);
      const selectedLocation = [...addressList].findIndex(
        (element) => element.placeName === selectedName
      );
      setSelectedAddress(selectedLocation);
      statusIsReady({
        infoIsReady: false,
        mapIsReady: false,
      });
    }
  };

  const searchButtonClickHandler = () => {
    if (selectedAddress > -1) {
      setShowList(false);
      changeLocation({
        address: addressList[selectedAddress].placeName,
        lat: addressList[selectedAddress].center.lat,
        lon: addressList[selectedAddress].center.lon,
      });
      changeInError({
        errorStatus: false,
        errorMessage: '',
      });
      const newPath = `?address=${addressList[selectedAddress].placeName}&lat=${addressList[selectedAddress].center.lat}&lon=${addressList[selectedAddress].center.lon}&zoom_level=${props.zoom}&weather_layer=${props.mapLayer}`;
      navigate(newPath, { replace: true });
    } else {
      setShowList(false);
      setPressedEnterEarly(true);
    }
    statusIsReady({
      infoIsReady: false,
      mapIsReady: false,
    });
  };

  const backdropClickHandler = () => {
    setShowList(false);
  };

  const searchList = addressList.map((element, index) => {
    return (
      <li
        className={
          styles[
            `location-list__address${
              selectedAddress === index ? '--selected' : ''
            }`
          ]
        }
        key={`addressList_${element.center.lat}%${element.center.lon}`}
      >
        <p
          onClick={addressClickHandler}
          onKeyDown={inputKeyboardEventHandler}
          ref={(address) => (addressListRef.current[index] = address)}
        >
          {element.placeName}
        </p>
      </li>
    );
  });

  return (
    <>
      <div className={styles['search-bar']}>
        <input
          type='text'
          className={styles['address-input']}
          value={addressInput}
          onChange={searchInputHandler}
          placeholder='Search for a location.'
          onKeyDown={inputKeyboardEventHandler}
        />
        {showList && (
          <>
            <div className={styles.backdrop} onClick={backdropClickHandler} />
            <ul className={styles['location-list']}>{searchList}</ul>
          </>
        )}
      </div>
      <button onClick={searchButtonClickHandler}>Search!</button>
    </>
  );
};

export default WeatherSearchBar;
