interface WeatherMapZoomProps {
  selectedZoom: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WeatherMapZoom = (props : WeatherMapZoomProps) => {

  
  return (
    <ul className='zoom-level'>
      <p>Map Zoom Level:</p>
      <li>
        <label>
          <input
            type='radio'
            name='zoom-level'
            value='large'
            checked={props.selectedZoom === 'large'}
            onChange={props.onChange}
          />
          <span>Far Away</span>
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
          <span>Medium</span>
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
          <span>Close</span>
        </label>
      </li>
    </ul>
  );
};

export default WeatherMapZoom;
