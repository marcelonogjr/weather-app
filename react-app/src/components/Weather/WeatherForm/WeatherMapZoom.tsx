import styles from './WeatherMapZoom.module.css';
import WeatherFormZoomIcons from '../../UI/WeatherForm-Icons/WeatherFormZoomIcons';

interface WeatherMapZoomProps {
  selectedZoom: 'small' | 'medium' | 'large';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WeatherMapZoom = (props: WeatherMapZoomProps) => {
  const selectedZoom = (currentZoom = props.selectedZoom) => {
    if (currentZoom === 'small') {
      return 'Close';
    } else if (currentZoom === 'medium') {
      return 'Medium';
    } else {
      return 'Far Away';
    }
  };

  return (
    <div className={styles['zoom-bundle']}>
      <p>Zoom: {selectedZoom()}</p>
      <ul className={styles['zoom-level_icons']}>
        <li>
          <label>
            <input
              type='radio'
              name='zoom-level'
              value='large'
              checked={props.selectedZoom === 'large'}
              onChange={props.onChange}
            />
            <WeatherFormZoomIcons
              zoomType='Far Away'
              currentlySelected={props.selectedZoom}
            />
          </label>
        </li>
        <li>
          <label>
            <input
              type='radio'
              name='zoom-level'
              value='medium'
              checked={props.selectedZoom === 'medium'}
              onChange={props.onChange}
            />
            <WeatherFormZoomIcons
              zoomType='Medium'
              currentlySelected={props.selectedZoom}
            />
          </label>
        </li>
        <li>
          <label>
            <input
              type='radio'
              name='zoom-level'
              value='small'
              checked={props.selectedZoom === 'small'}
              onChange={props.onChange}
            />
            <WeatherFormZoomIcons
              zoomType='Close'
              currentlySelected={props.selectedZoom}
            />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default WeatherMapZoom;
