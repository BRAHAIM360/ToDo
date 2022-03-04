import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react'
import { useFonts } from './src/hooks/useFonts';
import AppNavigator from './src/navigation/appNavigator'

export default function App() {
  const [isFontLoaded, setisFontLoaded] = useState(false);
  useEffect(() => {
    const loadfont = async () => {
      await useFonts()
    }
    loadfont().then(() =>
      setisFontLoaded(true)
    );

  }, []);

  return (
    isFontLoaded === true ? <AppNavigator /> : <AppLoading />
  );
}
{/* <AppContainer>
  <Navigator/>
</AppContainer> */}