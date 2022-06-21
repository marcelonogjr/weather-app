const unitsConversor = (
  currentUnits: 'metric' | 'imperial',
  dataType: 'temp' | 'lenght' | 'speed',
  relevantData: number
) => {
  if (currentUnits === 'metric') {
    if (dataType === 'temp') {
      return `${Math.round(((relevantData - 32) * 5) / 9)} °C`;
    } else if (dataType === 'lenght') {
      return `${Math.round(relevantData)} m`;
    } else {
      return `${Math.round(relevantData * 0.44703)} m/s`;
    }
  } else {
    if (dataType === 'temp') {
      return `${Math.round(relevantData)} °F`;
    } else if (dataType === 'lenght') {
      return `${Math.round(relevantData* 15625 / 251460) / 100} mi.`;
    } else {
      return `${Math.round(relevantData)} mph`;
    }
  }
};

export default unitsConversor;
