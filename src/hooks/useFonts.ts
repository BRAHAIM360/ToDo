import * as Font from "expo-font";

export const useFonts = async () =>
  await Font.loadAsync({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });
//ITCEDSCR.ttf
