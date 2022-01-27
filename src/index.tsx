import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid'

import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen'
import Sidebar from './components/sidebar'

const Drawer = createDrawerNavigator()

const App = () => {

  const value = [
    {
      id: shortid.generate(),
      subject: 'Buy movie tickets for Friday',
      done: false
    },
    {
      id: shortid.generate(),
      subject: 'Make a React Native tutorial',
      done: false
    }
  ]
  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000'
      }}
    >
      <Drawer.Screen name="Main" component={() => <MainScreen test={"qtat"} />} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}

export default App
