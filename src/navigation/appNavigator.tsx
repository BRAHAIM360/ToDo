import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EnterName, OnBoarding } from "../screens";
import App from "./app";
import { useStorage } from "../hooks/useStorage";
import { View } from "native-base";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
export const Context = React.createContext<string | null | undefined>("");

function AppNavigator() {
    const [isLoaded, setIsFontLoaded] = React.useState(false);
    const [name, setName] = React.useState<string | undefined | null>(null);
    const { getUser, setUser, removeUser } = useStorage();
    // removeUser();
    getUser().then((n) => { setName(n); setIsFontLoaded(true); });
    return (
        isLoaded === false ? <AppLoading /> :
            <Context.Provider value={name}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={name === null ? "onBoard" : "app"} screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="onBoard" component={OnBoarding} />
                        <Stack.Screen name="Name" component={EnterName} />
                        <Stack.Screen name="app" component={App} initialParams={{ name: name }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Context.Provider>
    );
}

export default AppNavigator;
