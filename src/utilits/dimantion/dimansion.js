import { fontCal, percenCal } from "./helper.js";
import { Dimensions } from "react-native";

export const Height = (h) => {
  const { height } = Dimensions.get("window");
  return percenCal(height, h);
};

export const Width = (w) => {
  const { width } = Dimensions.get("window");
  return percenCal(width, w);
};

export const FontSize = (f) => {
  const { height, width } = Dimensions.get("window");
  return fontCal(height, width, f);
};
