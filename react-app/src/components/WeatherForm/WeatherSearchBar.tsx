import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router';

import WeatherContext from '../../store/weather-context';

import styles from './WeatherSearchBar.module.css';
import { GeocodeAPIDataType } from '../../models/WeatherAPIDataType';

type WeatherSearchBarPropsType = {
  zoom: string,
  mapLayer: string,
};

const WeatherSearchBar = (props: WeatherSearchBarPropsType) => {
  const [addressInput, setAddressInput] = useState('');
  const [showList, setShowList] = useState(false);
  const [addressList, setAddressList] = useState<GeocodeAPIDataType>([]);
  const [selectedAddress, setSelectedAddress] = useState(-1);
  const [newSearch, setNewSearch] = useState(true);
  const [pressedEnterEarly, setPressedEnterEarly] = useState(false);

  const addressListRef = useRef<HTMLParagraphElement [] | null[]>([]);

  const { changeLocation } = useContext(WeatherContext);
  const navigate = useNavigate();

  // const serverUrl = 'http://localhost:5000';
  const serverUrl = 'https://weather-nogueira-app.herokuapp.com';

  useEffect(() => {
    const fetchLocation = (addressQuery: string) => {
      fetch(`${serverUrl}/api/find-location?address=${addressQuery}`)
      .then((response) => response.json())
      .then((response) => {
        addressListRef.current = [];
        setAddressList(response);
        if (pressedEnterEarly) {
          setPressedEnterEarly(false);
          setNewSearch(false);
          navigate(
            `?address=${response[0].placeName}&lat=${response[0].center.lat}&lon=${response[0].center.lon}&zoom_level=${props.zoom}&weather_layer=${props.mapLayer}`
          );
        }
      });
    };

    const timer = setTimeout(() => {
      if (addressInput.length >= 3 && newSearch) {
        setSelectedAddress(-1);
        if (!pressedEnterEarly){
          setShowList(true);
        }
        fetchLocation(addressInput);
      }
    }, 1500);
    return () => {
      clearTimeout(timer);
      setAddressList([]);
    };
  }, [addressInput, newSearch, pressedEnterEarly, navigate, props.mapLayer, props.zoom, setAddressList]);

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuery = event.currentTarget.value;
    inputQuery.trim().replace(/[/@!#$%*()'"=+§]/g, '');
    setAddressInput(inputQuery);
    setNewSearch(true);
  };

  const inputKeyboardEventHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowDown' && selectedAddress < addressList.length - 1) {
      setShowList(true);
      setSelectedAddress(selectedAddress + 1);
      if(selectedAddress > 1){
        addressListRef.current[selectedAddress - 1]?.scrollIntoView();
      }
    }
    if (event.key === 'ArrowUp' && selectedAddress > 0) {
      setSelectedAddress(selectedAddress - 1);
      if(selectedAddress < 5){
        addressListRef.current[selectedAddress - 2]?.scrollIntoView();
      }
    }
    if (event.key === 'Enter' || event.key === 'Tab') {
      if (selectedAddress > -1){
        setNewSearch(false);
        setShowList(false);
        setAddressInput(addressList[selectedAddress].placeName);
        changeLocation({
          address: addressList[selectedAddress].placeName,
          lat: addressList[selectedAddress].center.lat,
          lon: addressList[selectedAddress].center.lon,
        });
        navigate(
          `?address=${addressList[selectedAddress].placeName}&lat=${addressList[selectedAddress].center.lat}&lon=${addressList[selectedAddress].center.lon}&zoom_level=${props.zoom}&weather_layer=${props.mapLayer}`
        );
      } else {
        setShowList(false);
        setPressedEnterEarly(true);
      }
    }
  }

  const addressClickHandler = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const selectedName = event.currentTarget.textContent;
    if (selectedName) {
      setNewSearch(false);
      setShowList(false);
      setAddressInput(selectedName);
      const selectedLocation = addressList.filter(element => element.placeName === selectedName)[0];
      changeLocation({
        address: selectedLocation.placeName,
        lat: selectedLocation.center.lat,
        lon: selectedLocation.center.lon,
      })
      navigate(
        `?address=${selectedLocation.placeName}&lat=${selectedLocation.center.lat}&lon=${selectedLocation.center.lon}&zoom_level=${props.zoom}&weather_layer=${props.mapLayer}`
      );
    }
  }

  const searchButtonClickHandler = () => {
    if (selectedAddress > -1){
      setNewSearch(false);
      setShowList(false);
      setAddressInput(addressList[selectedAddress].placeName);
      changeLocation({
        address: addressList[selectedAddress].placeName,
        lat: addressList[selectedAddress].center.lat,
        lon: addressList[selectedAddress].center.lon,
      });
      navigate(
        `?address=${addressList[selectedAddress].placeName}&lat=${addressList[selectedAddress].center.lat}&lon=${addressList[selectedAddress].center.lon}&zoom_level=${props.zoom}&weather_layer=${props.mapLayer}`
      );
    } else {
      setShowList(false);
      setPressedEnterEarly(true);
    }
  }

  const backdropClickHandler = () => {
    setShowList(false);
  };

  const searchList = addressList.map((element, index) => {
    return (
      <li
        className={styles[`location-list__address${selectedAddress === index ? '--selected' : ''}`]}
        key={`addressList_${element.center.lat}%${element.center.lon}`}
      >
        <p onClick={addressClickHandler} onKeyDown={inputKeyboardEventHandler} ref={ (address) => (addressListRef.current[index] = address)}>{element.placeName}</p>
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
            <div className={styles.backdrop} onClick={backdropClickHandler}/>
            <ul className={styles['location-list']}>{searchList}</ul>
          </>
        )}
      </div>
      <button onClick={searchButtonClickHandler}>Search!</button>
    </>
  );
};

export default React.memo(WeatherSearchBar);
