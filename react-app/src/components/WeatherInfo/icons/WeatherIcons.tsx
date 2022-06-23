type svgWeatherIconsProps = {
  iconCode: string;
  descriptionCode: string;
};

const SvgWeatherIcons = (props: svgWeatherIconsProps) => {
  const svgIcons = (icon: string, description: string) => {
    const theme = 'dark';
  
    const lightThemeOutlineColor = '#000';
    const darkThemeOutlineColor = '#fff';
  
    const widhtValue = '50';
    const heightValue = '50';
  
    const iconNumber = icon.slice(0, 2);
    const iconPeriod = icon.slice(2);
  
    if (iconNumber === '01') {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 70.8 70.8'
          width={widhtValue}
          height={heightValue}
          style={{ padding: '10px' }}
        >
          <title>{description}</title>
          <circle
            cx={35.4}
            cy={35.4}
            r={34.9}
            style={{
              fill: 'none',
              stroke: `${
                theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
              }`,
              strokeMiterlimit: 10,
            }}
          />
          <circle
            cx={35.4}
            cy={35.4}
            r={34.9}
            style={{
              fill: `${iconPeriod === 'd' ? '#f2a71e' : '#49484A'}`,
            }}
          />
        </svg>
      );
    }
  
    if (iconNumber === '02') {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 33.6 22.8'
          width={widhtValue}
          height={heightValue}
        >
          <title>{description}</title>
          <path
            d='M29.7 16c.4.6.6 1.4.6 2.1 0 2.4-1.9 4.3-4.3 4.3H6.2C3 22.4.5 19.8.5 16.7c0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2 0-3.4 2.8-6.1 6.2-6.1 1.5 0 3 .6 4 1.5C18.4 2.4 21.2.5 24.5.5c4.8 0 8.6 3.8 8.6 8.6 0 2.8-1.3 5.3-3.4 6.9z'
            style={{
              fill: 'none',
              stroke: `${
                theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
              }`,
              strokeMiterlimit: 10,
            }}
          />
          <circle
            cx={24.5}
            cy={9.1}
            r={8.6}
            style={{
              fill: `${iconPeriod === 'd' ? '#f2a71e' : '#49484A'}`,
            }}
          />
          <path
            d='M30.3 18.1c0 2.4-1.9 4.3-4.3 4.3H6.2C3 22.4.5 19.8.5 16.7c0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2 0-3.4 2.8-6.1 6.2-6.1C16 3.6 18.6 5.9 19 9c.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3-.1 4.3 1.8 4.3 4.2z'
            style={{
              fill: '#fff',
            }}
          />
        </svg>
      );
    }
  
    if (iconNumber === '03') {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 30.8 19.8'
          width={widhtValue}
          height={heightValue}
          style={{ padding: '4px' }}
        >
          <title>{description}</title>
          <path
            d='M30.3 15c0 2.4-1.9 4.3-4.3 4.3H6.2C3 19.3.5 16.7.5 13.6c0-3.2 2.6-5.8 5.7-5.8h.6c0-.3-.1-.8-.1-1.2C6.7 3.2 9.5.5 12.9.5c3.1 0 5.7 2.3 6.1 5.4.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3 0 4.3 1.9 4.3 4.2z'
            style={{
              fill: 'none',
              stroke: `${
                theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
              }`,
              strokeMiterlimit: 10,
            }}
            width={widhtValue}
            height={heightValue}
          />
          <path
            d='M30.3 15c0 2.4-1.9 4.3-4.3 4.3H6.2C3 19.3.5 16.7.5 13.6c0-3.2 2.6-5.8 5.7-5.8h.6c0-.3-.1-.8-.1-1.2C6.7 3.2 9.5.5 12.9.5c3.1 0 5.7 2.3 6.1 5.4.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3 0 4.3 1.9 4.3 4.2z'
            style={{
              fill: '#fff',
            }}
          />
        </svg>
      );
    }
  
    if (iconNumber === '04') {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 37.2 23.2'
          width={widhtValue}
          height={heightValue}
        >
          <title>{description}</title>
          <path
            d='M36.7 15c0 2.4-1.9 4.3-4.3 4.3h-2.2c-.4 2-2.1 3.5-4.2 3.5H6.2C3 22.8.5 20.2.5 17.1c0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2C6.7 6.7 9.5 4 12.9 4c.3 0 .6 0 .9.1C14.8 2 16.9.6 19.4.6c3.1 0 5.7 2.3 6.1 5.4.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3-.1 4.2 1.8 4.2 4.1z'
            style={{
              fill: 'none',
              stroke: `${
                theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
              }`,
              strokeMiterlimit: 10,
            }}
          />
          <path
            d='M36.7 15c0 2.4-1.9 4.3-4.3 4.3H12.7c-3.2 0-5.7-2.6-5.7-5.7 0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2 0-3.4 2.8-6.1 6.2-6.1 3.1 0 5.7 2.3 6.1 5.4.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3 0 4.2 1.9 4.2 4.2z'
            style={{
              fill: '#3a3a3a',
            }}
          />
          <path
            d='M30.3 18.5c0 2.4-1.9 4.3-4.3 4.3H6.2C3 22.8.5 20.2.5 17.1c0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2C6.7 6.7 9.5 4 12.9 4 16 4 18.6 6.3 19 9.3c.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3 0 4.3 1.9 4.3 4.3z'
            style={{
              fill: '#fff',
            }}
          />
        </svg>
      );
    }
  
    if (iconNumber === '09') {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 37.2 39.1'
          width={widhtValue}
          height={heightValue}
          style={{ paddingBottom: '4px' }}
        >
          <title>{description}</title>
          <style>
            {`.st0{fill:none;stroke:${
              theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
            };stroke-miterlimit:10}.st3{fill:${
              theme === 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
            }}`}
          </style>
          <path
            className='st0'
            d='M36.7 15c0 2.4-1.9 4.3-4.3 4.3h-2.2c-.4 2-2.1 3.5-4.2 3.5H6.2C3 22.8.5 20.2.5 17.1c0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2C6.7 6.7 9.5 4 12.9 4c.3 0 .6 0 .9.1C14.8 2 16.9.6 19.4.6c3.1 0 5.7 2.3 6.1 5.4.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3-.1 4.2 1.8 4.2 4.1z'
          />
          <path
            d='M36.7 15c0 2.4-1.9 4.3-4.3 4.3H12.7c-3.2 0-5.7-2.6-5.7-5.7 0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2 0-3.4 2.8-6.1 6.2-6.1 3.1 0 5.7 2.3 6.1 5.4.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3 0 4.2 1.9 4.2 4.2z'
            style={{
              fill: '#3a3a3a',
            }}
          />
          <path
            d='M30.3 18.5c0 2.4-1.9 4.3-4.3 4.3H6.2C3 22.8.5 20.2.5 17.1c0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2C6.7 6.7 9.5 4 12.9 4 16 4 18.6 6.3 19 9.3c.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3 0 4.3 1.9 4.3 4.3z'
            style={{
              fill: '#fff',
            }}
          />
          <path
            className='st0'
            d='M8.5 30.6c.5-1 .6-5.4.6-5.4S5.5 27.8 5 28.8c-.5 1-.1 2.2.9 2.7s2.1.1 2.6-.9zM15.9 30.6c.5-1 .6-5.4.6-5.4s-3.6 2.6-4.1 3.6c-.5 1-.1 2.2.9 2.7.9.5 2.1.1 2.6-.9zM20.3 28.8c-.5 1-.1 2.2.9 2.7s2.2.1 2.7-.9.6-5.4.6-5.4-3.7 2.6-4.2 3.6zM6.7 36.2c-.5 1-.1 2.2.9 2.7s2.2.1 2.7-.9.6-5.4.6-5.4-3.7 2.6-4.2 3.6zM14.1 36.2c-.5 1-.1 2.2.9 2.7s2.2.1 2.7-.9.6-5.4.6-5.4-3.7 2.6-4.2 3.6z'
          />
          <path
            className='st3'
            d='M8.5 30.6c.5-1 .6-5.4.6-5.4S5.5 27.8 5 28.8c-.5 1-.1 2.2.9 2.7.9.5 2.1.1 2.6-.9zM15.9 30.6c.5-1 .6-5.4.6-5.4s-3.6 2.6-4.1 3.6c-.5 1-.1 2.2.9 2.7.9.5 2.1.1 2.6-.9zM20.3 28.8c-.5 1-.1 2.2.9 2.7s2.2.1 2.7-.9.6-5.4.6-5.4-3.7 2.6-4.2 3.6zM6.7 36.2c-.5 1-.1 2.2.9 2.7s2.2.1 2.7-.9.6-5.4.6-5.4-3.7 2.6-4.2 3.6zM14.1 36.2c-.5 1-.1 2.2.9 2.7s2.2.1 2.7-.9.6-5.4.6-5.4-3.7 2.6-4.2 3.6z'
          />
        </svg>
      );
    }
  
    if (iconNumber === '10') {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x={0}
          y={0}
          viewBox='0 0 33.6 38.6'
          width={widhtValue}
          height={heightValue}
          style={{ paddingBottom: '6px' }}
        >
          <title>{description}</title>
          <style>
            {`.st3{fill:none;stroke:${
              theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
            };stroke-miterlimit:10}.st4{fill:${
              theme === 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
            }}`}
          </style>
          <path
            d='M29.7 16c.4.6.6 1.4.6 2.1 0 2.4-1.9 4.3-4.3 4.3H6.2C3 22.4.5 19.8.5 16.7c0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2 0-3.4 2.8-6.1 6.2-6.1 1.5 0 3 .6 4 1.5C18.4 2.4 21.2.5 24.5.5c4.8 0 8.6 3.8 8.6 8.6 0 2.8-1.3 5.3-3.4 6.9z'
            style={{
              fill: 'none',
              stroke: `${
                theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
              }`,
              strokeMiterlimit: 10,
            }}
          />
          <circle
            cx={24.5}
            cy={9.1}
            r={8.6}
            style={{
              fill: '#f1a720',
            }}
          />
          <path
            d='M30.3 18.1c0 2.4-1.9 4.3-4.3 4.3H6.2C3 22.4.5 19.8.5 16.7c0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2 0-3.4 2.8-6.1 6.2-6.1C16 3.6 18.6 5.9 19 9c.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3-.1 4.3 1.8 4.3 4.2z'
            style={{
              fill: '#fff',
            }}
          />
          <path
            className='st3'
            d='M6.8 31.1c-1-.5-1.3-1.7-.8-2.6s4-3.5 4-3.5-.1 4.4-.6 5.3-1.7 1.3-2.6.8zM11.6 32.2s-.1 4.4-.6 5.3c-.5 1-1.7 1.3-2.6.8-1-.5-1.3-1.7-.8-2.6.5-.9 4-3.5 4-3.5zM14 31.1c-1-.5-1.3-1.7-.8-2.6s4-3.5 4-3.5-.1 4.4-.6 5.3-1.6 1.3-2.6.8zM18.9 32.2s-.1 4.4-.6 5.3c-.5 1-1.7 1.3-2.6.8-1-.5-1.3-1.7-.8-2.6.5-.9 4-3.5 4-3.5zM25.1 24.9s-.1 4.4-.6 5.3-1.7 1.3-2.6.8c-1-.5-1.3-1.7-.8-2.6s4-3.5 4-3.5z'
          />
          <path
            className='st4'
            d='M6.8 31.1c-1-.5-1.3-1.7-.8-2.6s4-3.5 4-3.5-.1 4.4-.6 5.3-1.7 1.3-2.6.8zM11.6 32.2s-.1 4.4-.6 5.3c-.5 1-1.7 1.3-2.6.8-1-.5-1.3-1.7-.8-2.6.5-.9 4-3.5 4-3.5zM14 31.1c-1-.5-1.3-1.7-.8-2.6s4-3.5 4-3.5-.1 4.4-.6 5.3-1.6 1.3-2.6.8zM18.9 32.2s-.1 4.4-.6 5.3c-.5 1-1.7 1.3-2.6.8-1-.5-1.3-1.7-.8-2.6.5-.9 4-3.5 4-3.5zM25.1 24.9s-.1 4.4-.6 5.3-1.7 1.3-2.6.8c-1-.5-1.3-1.7-.8-2.6s4-3.5 4-3.5z'
          />
        </svg>
      );
    }
  
    if (iconNumber === '11') {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 37.2 29'
          width={widhtValue}
          height={heightValue}
        >
          <title>{description}</title>
          <path
            d='M36.7 15c0 2.4-1.9 4.3-4.3 4.3h-2.2c-.4 2-2.1 3.5-4.2 3.5H6.2C3 22.8.5 20.2.5 17.1c0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2C6.7 6.7 9.5 4 12.9 4c.3 0 .6 0 .9.1C14.8 2 16.9.6 19.4.6c3.1 0 5.7 2.3 6.1 5.4.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3-.1 4.2 1.8 4.2 4.1z'
            style={{
              fill: 'none',
              stroke: `${
                theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
              }`,
              strokeMiterlimit: 10,
            }}
          />
          <path
            d='M36.7 15c0 2.4-1.9 4.3-4.3 4.3H12.7c-3.2 0-5.7-2.6-5.7-5.7 0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2 0-3.4 2.8-6.1 6.2-6.1 3.1 0 5.7 2.3 6.1 5.4.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3 0 4.2 1.9 4.2 4.2z'
            style={{
              fill: '#3a3a3a',
            }}
          />
          <path
            d='M30.3 18.5c0 2.4-1.9 4.3-4.3 4.3H6.2C3 22.8.5 20.2.5 17.1c0-3.2 2.6-5.8 5.7-5.8h.6c-.1-.4-.1-.8-.1-1.2C6.7 6.7 9.5 4 12.9 4 16 4 18.6 6.3 19 9.3c.6-.3 1.2-.5 1.9-.5 2.3 0 4.1 1.8 4.1 4.1 0 .5-.1 1-.3 1.5.4-.1.8-.2 1.3-.2 2.3 0 4.3 1.9 4.3 4.3z'
            style={{
              fill: '#fff',
            }}
          />
          <path
            style={{
              fill: '#f1a71f',
            }}
            d='m8.7 29 2.1-5.5H8.4l6.4-7.4-2 5.6h2.3z'
          />
        </svg>
      );
    }
  
    if (iconNumber === '13') {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 302 302'
          width={widhtValue}
          height={heightValue}
          style={{ paddingBottom: '12px' }}
        >
          <title>{description}</title>
          <path
            d='M292 144h-11.7l9-9.3c2.9-3 2.8-7.7-.2-10.6-3-2.9-7.7-2.8-10.6.2L259.4 144h-13.9l8.8-9.3c2.8-3 2.7-7.8-.3-10.6s-7.8-2.7-10.6.3L224.8 144H212l16.6-18c1.3-1.4 2-3.3 2-5.1v-.1c0-4.1-3.3-7.3-7.4-7.4l-23-.2 8.2-8.2H235c4.1 0 7.5-3.4 7.5-7.5S239.1 90 235 90h-11.7l10-10H260c4.1 0 7.5-3.4 7.5-7.5S264.1 65 260 65h-11.7l8-8c2.9-2.9 2.9-7.7 0-10.6-2.9-2.9-7.7-2.9-10.6 0l-8.3 8.3-.2-13.1c-.1-4.1-3.4-7.6-7.5-7.6h-.1c-4.1 0-7.4 3.7-7.4 7.8l.4 27.6-9.8 9.8-.4-12.9c-.1-4.1-3.6-7.4-7.7-7.3-4.1.1-7.4 3.6-7.3 7.7l.7 27-8.6 8.6-.2-22.4c.3-2.1-.4-4.3-1.9-5.9-2.8-3.1-7.7-3.3-10.8-.5l-19.1 17.1v-14L177.3 58c3-2.8 3.2-7.6.4-10.6-2.8-3-7.7-3.1-10.7-.3l-9.5 8.8V42.1L177.6 23c3-2.9 3.1-7.6.3-10.6-2.9-3-7.8-3.1-10.7-.2l-9.4 9V10c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v10.5l-8-8.2c-2.9-2.9-7.6-2.9-10.5 0-2.9 2.9-3.1 7.7-.1 10.6l18.7 18.8v13.8l-8-8.2c-2.9-2.9-7.6-2.9-10.5 0-2.9 2.9-3.1 7.7-.1 10.6L143 76.7v13l-17-16.3c-3-2.9-7.6-2.8-10.5.2-1.7 1.7-2.3 4-2 6.2l-.7 21.8-8.1-7.9V67c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v11.7l-10-10V42c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v11.7l-7.9-8c-2.9-2.9-7.6-2.9-10.5 0-2.9 2.9-2.9 7.7 0 10.6l8.1 8.1-12.7.3c-4.1.1-7.4 3.7-7.4 7.8.1 4.1 3.4 7.5 7.5 7.5h.1l27.5-.6 9.8 9.8-12.9.4c-4.1.1-7.4 3.6-7.3 7.7.1 4.1 3.4 7.3 7.5 7.3h.2l27-.7 9.4 9.4-23.1.5c-2.1.1-4.6.6-6.3 2.2-3 2.9-3.1 7.6-.3 10.6l.2.2c.2.2.3.4.5.5l16 16.7H76.7l-18.6-19.7c-2.8-3-7.6-3.1-10.6-.3-3 2.8-3.1 7.6-.3 10.6L56 144H42.1L23 124.3c-2.9-3-7.6-3.1-10.6-.2s-3.1 7.6-.2 10.6l9 9.3H10c-4.1 0-7.5 3.4-7.5 7.5S5.9 159 10 159h10.5l-8.2 8.2c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2L41.7 159h13.8l-8.2 8.2c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2L76.7 159h13.2l-16.3 16.9c-2.9 3-2.8 7.7.2 10.6 1.4 1.3 3.2 2 5 2.1h.1l23.9.6-9.4 9.4-27-.7c-4.1-.1-7.6 3.1-7.7 7.3-.1 4.1 3.1 7.6 7.3 7.7l12.9.4-10.1 10.1-27.2-.4h-.1c-4.1 0-7.4 3.1-7.5 7.2-.1 4.1 3.2 7.3 7.4 7.4l13 .2-8 8c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.7-.7 5.1-2.2l6.9-7V261c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-26.7l10-10V236c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-26.7l9.7-9.5.6 22.7c-.2 2.1.6 4.5 2.2 6.1 1.5 1.5 3.5 2.4 5.4 2.4 2.3 0 4.3-1.5 5.5-2.9l15.6-15.5v12.2L124 243.6c-2.9 2.9-2.8 7.7.1 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.7-.7 5.2-2.2l8.1-8.2v13.8L124 278.6c-2.9 2.9-2.8 7.7.1 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.7-.7 5.2-2.2l8.1-8.2v11c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-11.7l9.4 9c1.5 1.4 3.4 2.1 5.3 2.1 2 0 4-.8 5.4-2.3 2.9-3 2.7-7.7-.3-10.6l-19.9-19.1v-13.9l9.5 8.8c1.4 1.4 3.4 2.1 5.2 2.1 2 0 4-.8 5.5-2.3 2.8-3 2.6-7.8-.4-10.6l-19.8-18.6v-13.1l17.3 16.3c1.9 1.6 3.7 2.9 6.2 2.9h.1c4.1 0 7.5-3.4 7.5-7.5l.2-24.5 9.6 9.6-.7 27c-.1 4.1 3.1 7.6 7.3 7.7h.2c4 0 7.4-3.2 7.5-7.3l.4-12.9 9.8 9.8-.4 27.4c-.1 4.1 3.2 7.6 7.4 7.6h.1c4.1 0 7.4-3.1 7.5-7.2l.2-13 7.9 7.9c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6l-7.1-7.1H261c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-26.7l-10-10H236c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-26.7l-9.1-9.1 23-1c1.9-.1 3.9-1 5.1-2.2 3-2.9 3-7.6.1-10.6l-15.7-16h12.1l18.8 18.8c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6L246 159h13.8l18.8 18.8c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6L281 159h11c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5zm-174.2-16.2L134 144h-23.3l-14.6-15.4 21.7-.8zm-.3 46.8-21.2-.6 14.5-15h22.4l-15.7 15.6zm25.2 16.9-14.2 14.1-.5-20.5 14.7-14.8v21.2zm0-59.8-15.3-15.4.4-20.1 14.9 14.4v21.1zm15-20.7 16.7-15 .1 21.3-16.9 16.8V111zm16 95-16.1-14.8v-23.3l16.1 16.1v22zm12.1-31.5L170.3 159h21.4l14.3 14.6-20.2.9zm5.8-30.5h-22.3l16.1-16.1 20.9.1-14.7 16z'
            style={{
              fill: 'none',
              stroke: `${
                theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
              }`,
              strokeWidth: 5,
              strokeMiterlimit: 10,
            }}
          />
            <circle
              cx={151}
              cy={151}
              r={58.6}
              style={{
                fill: '#fff',
              }}
            />
          <path
            d='M292 144h-11.7l9-9.3c2.9-3 2.8-7.7-.2-10.6-3-2.9-7.7-2.8-10.6.2L259.4 144h-13.9l8.8-9.3c2.8-3 2.7-7.8-.3-10.6s-7.8-2.7-10.6.3L224.8 144H212l16.6-18c1.3-1.4 2-3.3 2-5.1v-.1c0-4.1-3.3-7.3-7.4-7.4l-23-.2 8.2-8.2H235c4.1 0 7.5-3.4 7.5-7.5S239.1 90 235 90h-11.7l10-10H260c4.1 0 7.5-3.4 7.5-7.5S264.1 65 260 65h-11.7l8-8c2.9-2.9 2.9-7.7 0-10.6-2.9-2.9-7.7-2.9-10.6 0l-8.3 8.3-.2-13.1c-.1-4.1-3.4-7.6-7.5-7.6h-.1c-4.1 0-7.4 3.7-7.4 7.8l.4 27.6-9.8 9.8-.4-12.9c-.1-4.1-3.6-7.4-7.7-7.3-4.1.1-7.4 3.6-7.3 7.7l.7 27-8.6 8.6-.2-22.4c.3-2.1-.4-4.3-1.9-5.9-2.8-3.1-7.7-3.3-10.8-.5l-19.1 17.1v-14L177.3 58c3-2.8 3.2-7.6.4-10.6-2.8-3-7.7-3.1-10.7-.3l-9.5 8.8V42.1L177.6 23c3-2.9 3.1-7.6.3-10.6-2.9-3-7.8-3.1-10.7-.2l-9.4 9V10c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v10.5l-8-8.2c-2.9-2.9-7.6-2.9-10.5 0-2.9 2.9-3.1 7.7-.1 10.6l18.7 18.8v13.8l-8-8.2c-2.9-2.9-7.6-2.9-10.5 0-2.9 2.9-3.1 7.7-.1 10.6L143 76.7v13l-17-16.3c-3-2.9-7.6-2.8-10.5.2-1.7 1.7-2.3 4-2 6.2l-.7 21.8-8.1-7.9V67c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v11.7l-10-10V42c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v11.7l-7.9-8c-2.9-2.9-7.6-2.9-10.5 0-2.9 2.9-2.9 7.7 0 10.6l8.1 8.1-12.7.3c-4.1.1-7.4 3.7-7.4 7.8.1 4.1 3.4 7.5 7.5 7.5h.1l27.5-.6 9.8 9.8-12.9.4c-4.1.1-7.4 3.6-7.3 7.7.1 4.1 3.4 7.3 7.5 7.3h.2l27-.7 9.4 9.4-23.1.5c-2.1.1-4.6.6-6.3 2.2-3 2.9-3.1 7.6-.3 10.6l.2.2c.2.2.3.4.5.5l16 16.7H76.7l-18.6-19.7c-2.8-3-7.6-3.1-10.6-.3-3 2.8-3.1 7.6-.3 10.6L56 144H42.1L23 124.3c-2.9-3-7.6-3.1-10.6-.2s-3.1 7.6-.2 10.6l9 9.3H10c-4.1 0-7.5 3.4-7.5 7.5S5.9 159 10 159h10.5l-8.2 8.2c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2L41.7 159h13.8l-8.2 8.2c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2L76.7 159h13.2l-16.3 16.9c-2.9 3-2.8 7.7.2 10.6 1.4 1.3 3.2 2 5 2.1h.1l23.9.6-9.4 9.4-27-.7c-4.1-.1-7.6 3.1-7.7 7.3-.1 4.1 3.1 7.6 7.3 7.7l12.9.4-10.1 10.1-27.2-.4h-.1c-4.1 0-7.4 3.1-7.5 7.2-.1 4.1 3.2 7.3 7.4 7.4l13 .2-8 8c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.7-.7 5.1-2.2l6.9-7V261c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-26.7l10-10V236c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-26.7l9.7-9.5.6 22.7c-.2 2.1.6 4.5 2.2 6.1 1.5 1.5 3.5 2.4 5.4 2.4 2.3 0 4.3-1.5 5.5-2.9l15.6-15.5v12.2L124 243.6c-2.9 2.9-2.8 7.7.1 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.7-.7 5.2-2.2l8.1-8.2v13.8L124 278.6c-2.9 2.9-2.8 7.7.1 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.7-.7 5.2-2.2l8.1-8.2v11c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-11.7l9.4 9c1.5 1.4 3.4 2.1 5.3 2.1 2 0 4-.8 5.4-2.3 2.9-3 2.7-7.7-.3-10.6l-19.9-19.1v-13.9l9.5 8.8c1.4 1.4 3.4 2.1 5.2 2.1 2 0 4-.8 5.5-2.3 2.8-3 2.6-7.8-.4-10.6l-19.8-18.6v-13.1l17.3 16.3c1.9 1.6 3.7 2.9 6.2 2.9h.1c4.1 0 7.5-3.4 7.5-7.5l.2-24.5 9.6 9.6-.7 27c-.1 4.1 3.1 7.6 7.3 7.7h.2c4 0 7.4-3.2 7.5-7.3l.4-12.9 9.8 9.8-.4 27.4c-.1 4.1 3.2 7.6 7.4 7.6h.1c4.1 0 7.4-3.1 7.5-7.2l.2-13 7.9 7.9c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6l-7.1-7.1H261c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-26.7l-10-10H236c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-26.7l-9.1-9.1 23-1c1.9-.1 3.9-1 5.1-2.2 3-2.9 3-7.6.1-10.6l-15.7-16h12.1l18.8 18.8c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6L246 159h13.8l18.8 18.8c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6L281 159h11c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5zm-174.2-16.2L134 144h-23.3l-14.6-15.4 21.7-.8zm-.3 46.8-21.2-.6 14.5-15h22.4l-15.7 15.6zm25.2 16.9-14.2 14.1-.5-20.5 14.7-14.8v21.2zm0-59.8-15.3-15.4.4-20.1 14.9 14.4v21.1zm15-20.7 16.7-15 .1 21.3-16.9 16.8V111zm16 95-16.1-14.8v-23.3l16.1 16.1v22zm12.1-31.5L170.3 159h21.4l14.3 14.6-20.2.9zm5.8-30.5h-22.3l16.1-16.1 20.9.1-14.7 16z'
            style={{
              fill: '#1f85b2',
            }}
          />
        </svg>
      );
    }
  
    if (iconNumber === '50') {
      return (
        <svg
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          x={0}
          y={0}
          viewBox='0 0 28 18.1'
          width={widhtValue}
          height={heightValue}
        >
          <title>{description}</title>
          <style>
            {`.st0{fill:none;stroke:${
              theme !== 'dark' ? darkThemeOutlineColor : lightThemeOutlineColor
            };stroke-miterlimit:10}.st4{fill:#434345}.st12{fill:#ededed}`}
          </style>
          <path
            className='st0'
            d='M8.1 1.5c-.3 0-.6-.2-.6-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5c.3 0 .5.2.5.5s-.2.5-.5.5H8c-.2 0-.5-.2-.5-.5 0-.2.3-.5.6-.5zM27.5 8c0 .3-.2.5-.5.5H8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5s-.2.5-.5.5c.2 0 .5.3.5.5zM20 16.5c.3 0 .5.2.5.5s-.2.5-.5.5H8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h12c.3 0 .5.2.5.5s-.3.5-.5.5zM24 13.5c.3 0 .5.2.5.5s-.2.5-.5.5h-1c.3 0 .5.2.5.5s-.2.5-.5.5h-2c-.2 0-.5-.2-.5-.5s.2-.5.5-.5H7c.2 0 .5.2.5.5s-.2.5-.5.5H5.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5s-.2.5-.5.5zM2 4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h17c.3 0 .5.2.5.5s-.2.5-.5.5c.3 0 .5.2.5.5s-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zM20 11.5H1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5s-.2.5-.5.5c.3 0 .5.2.5.5s-.2.5-.5.5z'
          />
          <path
            d='M17 1.5H8.1c-.3 0-.6-.2-.6-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5z'
            style={{
              fill: '#4a494b',
            }}
          />
          <path
            d='M17 2.5H8.1c-.3 0-.6-.2-.6-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5s-.2.5-.5.5z'
            style={{
              fill: '#6e6e6e',
            }}
          />
          <path
            d='M19 5.5H2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h17c.3 0 .5.2.5.5s-.3.5-.5.5z'
            style={{
              fill: '#86888a',
            }}
          />
          <path
            className='st4'
            d='M19 4.5H2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h17c.3 0 .5.2.5.5s-.3.5-.5.5zM27 8.5H8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5-.1.3-.3.5-.5.5z'
          />
          <path
            d='M27 7.5H8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5-.1.3-.3.5-.5.5z'
            style={{
              fill: '#58595b',
            }}
          />
          <path
            d='M20 11.5H1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5s-.3.5-.5.5z'
            style={{
              fill: '#373737',
            }}
          />
          <path
            d='M20 10.5H1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5s-.3.5-.5.5z'
            style={{
              fill: '#9b9da0',
            }}
          />
          <path
            d='M24 14.5H5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5s-.3.5-.5.5z'
            style={{
              fill: '#515254',
            }}
          />
          <path
            d='M24 13.5H5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h19c.3 0 .5.2.5.5s-.3.5-.5.5z'
            style={{
              fill: '#b0b0b0',
            }}
          />
          <path
            d='M8 17.6h12c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8c-.3 0-.5.2-.5.5 0 .2.2.5.5.5z'
            style={{
              fill: '#4c4c4d',
            }}
          />
          <path
            d='M8 16.5h12c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8c-.3 0-.5.2-.5.5s.2.5.5.5z'
            style={{
              fill: '#cecdcd',
            }}
          />
          <path
            className='st12'
            d='M7 15.5H5.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H7c.3 0 .5.2.5.5s-.2.5-.5.5zM23 15.5h-2.1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H23c.3 0 .5.2.5.5s-.2.5-.5.5z'
          />
        </svg>
      );
    }
  
    return <></>;
  };

  return <>{svgIcons(props.iconCode, props.descriptionCode)}</>;
};

export default SvgWeatherIcons;
