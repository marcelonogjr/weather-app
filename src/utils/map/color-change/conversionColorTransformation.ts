import { ImageData } from 'canvas';

const cloudsColorTransformation = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255 - imgData.data[i];
    imgData.data[i + 1] = 255 - imgData.data[i + 1];
    imgData.data[i + 2] = 255 - imgData.data[i + 2];
  }

  return imgData;
};

const precipitationColorTransformation = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    let red = imgData.data[i];
    let green = imgData.data[i + 1];
    let blue = imgData.data[i + 2];

    // Red
    if (red < 110 && red >= 97) {
      imgData.data[i] = (110 * red) / 13 - 10670 / 13;
    } else if (red < 97 && red >= 80) {
      imgData.data[i] = -15 * red + 1455;
    } else if (red < 80) {
      imgData.data[i] = 255;
    }
    // Green
    if (green >= 97) {
      imgData.data[i + 1] = (-145 * green) / 13 + 17380 / 13;
    } else if (green >= 80) {
      imgData.data[i + 1] = 255;
    } else if (green >= 75) {
      imgData.data[i + 1] = (128 * green) / 5 - 1793;
    } else if (green >= 66) {
      imgData.data[i + 1] = (127 * green) / 9 - 2794 / 3;
    } else if (green < 66) {
      imgData.data[i + 1] = 0;
    }
    // Blue
    if (blue > 205 && blue <= 214) {
      imgData.data[i + 2] = (-205 * blue) / 9 + 43870 / 9;
    } else if (blue > 214 && blue <= 232) {
      imgData.data[i + 2] = 0;
    } else if (blue) {
      imgData.data[i + 2] = (255 * blue) / 23 - 59160 / 23;
    }
    // Alpha
    imgData.data[i + 3] *= 1.3;
  }

  return imgData;
};

const pressureColorTransformation = (imgData: ImageData) => {
  return imgData;
};

const temperatureColorTransformation = (imgData: ImageData) => {
  return imgData;
};

const windColorTransformation = (imgData: ImageData) => {
  for (let i = 0; i < imgData.data.length; i += 4) {
    let red = imgData.data[i];
    let green = imgData.data[i + 1];
    let blue = imgData.data[i + 2];
    let alpha = imgData.data[i + 3];

    // Red
    if (alpha <= 84) {
      imgData.data[i] = 0;
    } else if (alpha <= 107) {
      imgData.data[i] = -17/2 * red + 3553/2;
    } else if (alpha <= 138) {
      imgData.data[i] = 255;
    } else if (alpha < 153) {
      imgData.data[i] = 255/46 * red - 8925/23;
    } else if (alpha >= 153) {
      imgData.data[i] = 0;
    }
    // Green
    if (alpha <= 61) {
      imgData.data[i + 1] = (-255 * green) / 49 + 65025 / 49;
    } else if (alpha <= 107) {
      imgData.data[i + 1] = 255;
    } else if (alpha <= 115) {
      imgData.data[i + 1] = (128 * green) / 5 - 1793;
    } else if (alpha <= 122) {
      imgData.data[i + 1] = (127 * green) / 33 - 127;
    } else if (alpha > 122) {
      imgData.data[i + 1] = 0;
    }
    // Blue
    if (alpha <= 62) {
      imgData.data[i + 2] = 255;
    } else if (alpha <= 84) {
      imgData.data[i + 2] = (85 * blue) / 3 - 16745 / 3;
    } else if (alpha <= 122) {
      imgData.data[i + 2] = 0;
    } else if (alpha <= 138) {
      imgData.data[i + 2] = (255 * blue) / 113 - 15045 / 113;
    } else if (alpha < 153) {
      imgData.data[i + 2] = (-60 * blue) + 10575;
    } else if (alpha >= 153) {
      imgData.data[i + 2] = 75;
    }
    // Alpha
    if(alpha <= 5) {
      imgData.data[i + 3] =0;
    }
    imgData.data[i + 3] *= 0.6;
  }

  return imgData;
};

export type mapLayerType =
  | 'clouds_new'
  | 'precipitation_new'
  | 'pressure_new'
  | 'temp_new'
  | 'wind_new';

const conversionColorTransformation = (
  mapLayer: mapLayerType,
  imgData: ImageData
) => {
  if (mapLayer === 'clouds_new') {
    return cloudsColorTransformation(imgData);
  } else if (mapLayer === 'precipitation_new') {
    return precipitationColorTransformation(imgData);
  } else if (mapLayer === 'pressure_new') {
    return pressureColorTransformation(imgData);
  } else if (mapLayer === 'temp_new') {
    return temperatureColorTransformation(imgData);
  } else if (mapLayer === 'wind_new') {
    return windColorTransformation(imgData);
  } else {
    return imgData;
  }
};

export default conversionColorTransformation;
