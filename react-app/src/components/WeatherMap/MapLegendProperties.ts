interface MapLayerPropertyType {
  unit: string;
  values: string[];
  gradient: React.CSSProperties;
}

interface MapLegendPropertiesReturnType {
  clouds: MapLayerPropertyType;
  precipitation: MapLayerPropertyType;
  pressure: MapLayerPropertyType;
  temperature: MapLayerPropertyType;
  wind: MapLayerPropertyType;
}

const MapLegendProperties: (units: 'imperial' | 'metric') => MapLegendPropertiesReturnType = (units: 'imperial' | 'metric') => {

  const metricValues: MapLegendPropertiesReturnType = {
    clouds: {
      unit: '%',
      values: [
        '0',
        '10',
        '20',
        '30',
        '40',
        '50',
        '60',
        '70',
        '80',
        '90',
        '100',
      ],
      gradient: {
        background: `linear-gradient(90deg,
        rgba(0,0,0,0) 3.33333%, 
        rgba(2,2,0,0.06) 12.66667%,
        rgba(3,4,0,0.12) 22%,
        rgba(5,5,0,0.18) 31.33333%,
        rgba(6,7,0,0.24) 40.66667%,
        rgba(8,8,0,0.3) 50%,
        rgba(9,10,0,0.45) 59.33333%,
        rgba(11,11,0,0.6) 68.66667%,
        rgba(12,13,0,0.6) 78%,
        rgba(13,14,0,0.6) 87.33333%,
        rgba(15,15,0,0.6) 96.66667%)
        `,
      },
    },
    precipitation: {
      unit: 'mm/3h',
      values: ['0.5', '1', '5', '10', '20', '40', '140'],
      gradient: {
        background: `linear-gradient(90deg, 
        rgba(120,120,190,0) 3.33333%, 
        rgba(110,110,205,0.2345) 18.88889%,
        rgba(0,255,0,0.3722) 34.44444%,
        rgba(255,255,0,0.5455) 50%,
        rgba(255,127,0,0.5608) 65.55556%,
        rgba(255,0,0,0.5812) 81.11111%,
        rgba(255,0,255,0.7035) 96.66667%)
        `,
      },
    },
    pressure: {
      unit: 'bar',
      values: [
        '0.94',
        '0.96',
        '0.98',
        '1.00',
        '1.01',
        '1.02',
        '1.04',
        '1.06',
        '1.08',
      ],
      gradient: {
        background: `linear-gradient(90deg, 
        rgba(0,115,255,0.6) 3.33333%,
        rgba(0,170,255,0.6) 15%,
        rgba(75,208,214,0.6) 26.66667%,
        rgba(141,231,199,0.6) 38.33333%,
        rgba(176,247,32,0.6) 50%,
        rgba(240,184,0,0.6) 61.66667%,
        rgba(251,85,21,0.6) 73.33333%,
        rgba(243,54,59,0.6) 85%,
        rgba(198,0,0,0.6) 96.66667%)
        `,
      },
    },
    temperature: {
      unit: '°C',
      values: ['-40', '-30', '-20', '-10', '0', '10', '20', '25', '30'],
      gradient: {
        background: `linear-gradient(90deg, 
        rgba(130,22,146,0.6) 3.33333%,
        rgba(130,87,219,0.6) 15%,
        rgba(32,140,236,0.6) 26.66667%,
        rgba(32,196,232,0.6) 38.33333%,
        rgba(35,221,221,0.6) 50%,
        rgba(194,255,40,0.6) 61.66667%,
        rgba(255,240,40,0.6) 73.33333%,
        rgba(255,194,40,0.6) 85%,
        rgba(252,128,20,0.6) 96.66667%)
        `,
      },
    },
    wind: {
      unit: 'm/s',
      values: ['1', '5', '10', '15', '20', '25', '50', '100'],
      gradient: {
        background: `linear-gradient(90deg,
        rgba(0,0,255,0) 3.33333%,
        rgba(0,255,255,0.14353) 16.66667%,
        rgba(0,255,0,0.19765) 30%,
        rgba(255,255,0,0.25176) 43.33333%,
        rgba(255,127,0,0.27059) 56.66667%,
        rgba(255,0,0,0.28706) 70%,
        rgba(255,0,255,0.32471) 83.33333%,
        rgba(0,0,75,0.36) 96.66667%)
        `,
      },
    },
  };

  const imperialValues: MapLegendPropertiesReturnType ={
    clouds: {
      unit: '%',
      values: [
        '0',
        '10',
        '20',
        '30',
        '40',
        '50',
        '60',
        '70',
        '80',
        '90',
        '100',
      ],
      gradient: {
        background: `linear-gradient(90deg,
        rgba(0,0,0,0) 3.33333%, 
        rgba(2,2,0,0.06) 12.66667%,
        rgba(3,4,0,0.12) 22%,
        rgba(5,5,0,0.18) 31.33333%,
        rgba(6,7,0,0.24) 40.66667%,
        rgba(8,8,0,0.3) 50%,
        rgba(9,10,0,0.45) 59.33333%,
        rgba(11,11,0,0.6) 68.66667%,
        rgba(12,13,0,0.6) 78%,
        rgba(13,14,0,0.6) 87.33333%,
        rgba(15,15,0,0.6) 96.66667%)
        `,
      },
    },
    precipitation: {
      unit: 'in./3h',
      values: ['0.02', '0.04', '0.20', '0.39', '0.79', '1.57', '5.51'],
      gradient: {
        background: `linear-gradient(90deg, 
        rgba(120,120,190,0) 3.33333%, 
        rgba(110,110,205,0.2345) 18.88889%,
        rgba(0,255,0,0.3722) 34.44444%,
        rgba(255,255,0,0.5455) 50%,
        rgba(255,127,0,0.5608) 65.55556%,
        rgba(255,0,0,0.5812) 81.11111%,
        rgba(255,0,255,0.7035) 96.66667%)
        `,
      },
    },
    pressure: {
      unit: 'bar',
      values: [
        '0.94',
        '0.96',
        '0.98',
        '1.00',
        '1.01',
        '1.02',
        '1.04',
        '1.06',
        '1.08',
      ],
      gradient: {
        background: `linear-gradient(90deg, 
        rgba(0,115,255,0.6) 3.33333%,
        rgba(0,170,255,0.6) 15%,
        rgba(75,208,214,0.6) 26.66667%,
        rgba(141,231,199,0.6) 38.33333%,
        rgba(176,247,32,0.6) 50%,
        rgba(240,184,0,0.6) 61.66667%,
        rgba(251,85,21,0.6) 73.33333%,
        rgba(243,54,59,0.6) 85%,
        rgba(198,0,0,0.6) 96.66667%)
        `,
      },
    },
    temperature: {
      unit: '°F',
      values: ['-40', '-22', '-4', '14', '32', '50', '68', '77', '86'],
      gradient: {
        background: `linear-gradient(90deg, 
        rgba(130,22,146,0.6) 3.33333%,
        rgba(130,87,219,0.6) 15%,
        rgba(32,140,236,0.6) 26.66667%,
        rgba(32,196,232,0.6) 38.33333%,
        rgba(35,221,221,0.6) 50%,
        rgba(194,255,40,0.6) 61.66667%,
        rgba(255,240,40,0.6) 73.33333%,
        rgba(255,194,40,0.6) 85%,
        rgba(252,128,20,0.6) 96.66667%)
        `,
      },
    },
    wind: {
      unit: 'mi./h',
      values: ['2.2', '11.2', '22.4', '33.6', '44.7', '55.9', '111.8', '223.7'],
      gradient: {
        background: `linear-gradient(90deg,
        rgba(0,0,255,0) 3.33333%,
        rgba(0,255,255,0.14353) 16.66667%,
        rgba(0,255,0,0.19765) 30%,
        rgba(255,255,0,0.25176) 43.33333%,
        rgba(255,127,0,0.27059) 56.66667%,
        rgba(255,0,0,0.28706) 70%,
        rgba(255,0,255,0.32471) 83.33333%,
        rgba(0,0,75,0.36) 96.66667%)
        `,
      },
    },
  }

  return units === 'metric' ? metricValues : imperialValues;
};

export default MapLegendProperties;
