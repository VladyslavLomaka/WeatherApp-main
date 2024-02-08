import {Dimensions} from 'react-native';
import {Platform} from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const isLandscape = screenWidth > screenHeight;

const base = isLandscape ? screenHeight : screenWidth;

const magicNumber = 375;

export const rem = (size = 0): number =>
  Math.floor((base / magicNumber) * size);

export const font = (size = 0): number => {
  let cof = 1;

  if (base < magicNumber) {
    cof = base / magicNumber;
  }

  return Math.round(size * cof);
};
