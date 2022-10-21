export const hourlyDotsBackground = (
  unit: 'metric' | 'imperial',
  temperature: number
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
    if (element.temp === temperature) {
      return true;
    } else if (
      (element.temp < temperature && array[index + 1].temp > temperature) ||
      (element.temp > temperature && array[index - 1].temp < temperature)
    ) {
      return true;
    }
    return false;
  });

  if (filteredStops.length === 1) {
    return `rgb(${filteredStops[0].color})`;
  }

  const prevColorChannelsString = filteredStops[0].color.split(',');
  const nextColorChannelsString = filteredStops[1].color.split(',');
  const prevColorChannels = prevColorChannelsString.map((element) => +element);
  const nextColorChannels = nextColorChannelsString.map((element) => +element);

  // (nextC - prevC) -> (x - prevC)
  // (nextT - prevT) -> (temp - prevT)
  // x = prevC + (nextC - prevC) * (temp - prevT) / (nextT - prevT)
  const red = Math.round(
    prevColorChannels[0] +
      ((nextColorChannels[0] - prevColorChannels[0]) *
        (temperature - filteredStops[0].temp)) /
        (filteredStops[1].temp - filteredStops[0].temp)
  );
  const green = Math.round(
    prevColorChannels[1] +
      ((nextColorChannels[1] - prevColorChannels[1]) *
        (temperature - filteredStops[0].temp)) /
        (filteredStops[1].temp - filteredStops[0].temp)
  );
  const blue = Math.round(
    prevColorChannels[2] +
      ((nextColorChannels[2] - prevColorChannels[2]) *
        (temperature - filteredStops[0].temp)) /
        (filteredStops[1].temp - filteredStops[0].temp)
  );

  return `rgb(${red}, ${green}, ${blue})`;
};
