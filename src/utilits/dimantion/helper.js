import { Dimensions } from "react-native";

export const percenCal = (maxNumber, value) => maxNumber * (value / 100);

export const fontCal = (height, width, val) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percenCal(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
    ),
    val
  );
};

export const isPortrait = () => {
  const dim = Dimensions.get("screen");
  return dim.height >= dim.width;
};
