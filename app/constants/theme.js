import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

// All Gladys colors
export const COLORS = {
  primary: "#A952F6", //
  secondary: "", //
  black: "#000000",
  white: "#FFFFFF",
  transparent: "transparent",
  fontColor: "#241035",
  gray: "#F6F6F6",
  borderGray:'#E8E8E8',
  pinBackground :'#F3E8FD'
};

// All Gladys standard, responsive application dimensions
export const SIZES = {
  // base: 8,
  // font: 14,
  defaultSize: 16,
  // radius: 30,
  // padding: 10,
  // padding2: 12,
  // largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  // body1: 30,
  // body2: 20,
  // body3: 16,
  // body4: 14,
  // body5: 12,
  // width,
  // height,
};

//Gladys application fonts
export const FONTS = {
  largeTitle: {
    // fontFamily: 'Roboto-regular',
    // fontSize: SIZES.largeTitle,
    // lineHeight: 42,
  },
  h1: {
    // fontFamily: 'Roboto-black',
    // fontSize: SIZES.h1,
    // lineHeight: 36,
  },
  h2: {
    // fontFamily: 'Roboto-bold',
    // fontSize: SIZES.h2,
    // lineHeight: 30,
  },
  h3: {
    // fontFamily: 'Roboto-bold',
    // fontSize: SIZES.h3,
    // lineHeight: 22,
  },
  h4: {
    // fontFamily: 'Roboto-bold',
    // fontSize: SIZES.h4,
    // lineHeight: 22,
  },
  body1: {
    // fontFamily: 'Roboto-regular',
    // fontSize: SIZES.body1,
    // lineHeight: 36,
  },
  body2: {
    // fontFamily: 'Roboto-regular',
    // fontSize: SIZES.body2,
    // lineHeight: 30,
  },
  body3: {
    // fontFamily: 'Roboto-regular',
    // fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    // fontFamily: 'Roboto-regular',
    // fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    // fontFamily: 'Roboto-regular',
    // fontSize: SIZES.body5,
    // lineHeight: 22,
  },
};
const appTheme = { COLORS, SIZES, FONTS };
export default appTheme;
