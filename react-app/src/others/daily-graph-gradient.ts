export const dailyLiBackground = (
  unit: 'metric' | 'imperial',
  maxTemperature: number,
  minTemperature: number
) => {
  const gradientsStops = [
    {
      color: '130,22,146',
      temp: -40,
    },
    {
      color: '130,87,219',
      temp: unit === 'metric' ? -30 : -22,
    },
    {
      color: '32,140,236',
      temp: unit === 'metric' ? -20 : -4,
    },
    {
      color: '32,196,232',
      temp: unit === 'metric' ? -10 : 14,
    },
    {
      color: '35,221,221',
      temp: unit === 'metric' ? 0 : 32,
    },
    {
      color: '194,255,40',
      temp: unit === 'metric' ? 10 : 50,
    },
    {
      color: '255,240,40',
      temp: unit === 'metric' ? 20 : 68,
    },
    {
      color: '255,194,40',
      temp: unit === 'metric' ? 25 : 77,
    },
    {
      color: '252,128,20',
      temp: unit === 'metric' ? 30 : 86,
    },
    {
      color: '255,0,0',
      temp: unit === 'metric' ? 50 : 122,
    },
  ];

  const filteredStops = gradientsStops.filter((element, index, array) => {
    if (
      (element.temp < minTemperature &&
        array[index + 1].temp < minTemperature) ||
      (element.temp > maxTemperature && array[index - 1].temp > maxTemperature)
    ) {
      return false;
    }
    return true;
  });

  const findColorValues = (
    minOrMaxTemp: number,
    prevTemp: number,
    prevColor: string,
    nextTemp: number,
    nextColor: string
  ) => {
    const prevColorChannelsString = prevColor.split(',');
    const nextColorChannelsString = nextColor.split(',');
    const prevColorChannels = prevColorChannelsString.map(
      (element) => +element
    );
    const nextColorChannels = nextColorChannelsString.map(
      (element) => +element
    );

    if (minOrMaxTemp === prevTemp) {
      return prevColor;
    } else if (minOrMaxTemp === nextTemp) {
      return nextColor;
    } else {
      // (nextC - prevC) -> (x - prevC)
      // (nextT - prevT) -> (temp - prevT)
      // x = prevC + (nextC - prevC) * (temp - prevT) / (nextT - prevT)
      const red = Math.round(
        prevColorChannels[0] +
          ((nextColorChannels[0] - prevColorChannels[0]) *
            (minOrMaxTemp - prevTemp)) /
            (nextTemp - prevTemp)
      );
      const green = Math.round(
        prevColorChannels[1] +
          ((nextColorChannels[1] - prevColorChannels[1]) *
            (minOrMaxTemp - prevTemp)) /
            (nextTemp - prevTemp)
      );
      const blue = Math.round(
        prevColorChannels[2] +
          ((nextColorChannels[2] - prevColorChannels[2]) *
            (minOrMaxTemp - prevTemp)) /
            (nextTemp - prevTemp)
      );

      return `${red}, ${green}, ${blue}`;
    }
  };

  const finalGradientStops = filteredStops.map((element, index, array) => {
    if (
      element.temp <= minTemperature &&
      array[index + 1].temp > minTemperature
    ) {
      return {
        color: findColorValues(
          minTemperature,
          element.temp,
          element.color,
          array[index + 1].temp,
          array[index + 1].color
        ),
        position: '15%',
      };
    } else if (
      element.temp >= maxTemperature &&
      array[index - 1].temp < maxTemperature
    ) {
      return {
        color: findColorValues(
          maxTemperature,
          array[index - 1].temp,
          array[index - 1].color,
          element.temp,
          element.color
        ),
        position: '95%',
      };
    } else {
      // (95% - 15%) -> (x - 15%)
      // (maxT - minT) -> (temp - minT)
      // x = 15% + (95% - 15%) * (temp - minT) / (maxT - minT)
      const gradientPosition: string = `${
        15 +
        (80 * (element.temp - minTemperature)) /
          (maxTemperature - minTemperature)
      }%`;

      return { color: element.color, position: gradientPosition };
    }
  });

  return `linear-gradient(0deg,
    ${finalGradientStops.map((element) => {
      return `rgb(${element.color}) ${element.position}`;
    })}
  )`;
};
