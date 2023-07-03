import { Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { isPortrait } from "../../utilits/dimantion/helper.js";

export function useOrientation() {
  // State to hold the connection status
  const [orientation, setOrientation] = useState(
    isPortrait() ? "PORTRAIT" : "LANDSCAPE"
  );

  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? "PORTRAIT" : "LANDSCAPE");

    Dimensions.addEventListener("change", callback);

    return () => {
      Dimensions.removeEventListener("change", callback);
    };
  }, []);

  return orientation;
}
