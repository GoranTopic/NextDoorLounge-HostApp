import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const squareNum = 216; // magic number fo the number of squares
const ratio =  1.5; // magic number for the number ratio of the picture
const windowWidth = width;
const windowHeight = height;
const gridWidth = windowWidth;
const gridHeight = gridWidth * ratio ;
const gridVol = gridWidth * gridHeight;
const squareVol = gridVol / squareNum;
const squareWidth  = (gridWidth / 12) - 0.1;
const squareHeight =  squareWidth;

export default {
		squareNum: 216, // magic number fo the number of squares
		ratio:  1.5, // magic number for the number ratio of the picture
		windowWidth: windowWidth,
		windowHeight: windowHeight,
		gridWidth: windowWidth,
		gridHeight: gridHeight,
		gridVol: gridVol,
		squareVol: squareVol,
		squareWidth : squareWidth,
		squareHeight:  squareWidth,
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
