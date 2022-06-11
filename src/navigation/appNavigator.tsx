import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EnterName, OnBoarding } from "../screens";
import App from "./app";
import { useStorage } from "../hooks/useStorage";
import AppLoading from "../screens/appLoading";
import { UserContext } from "../utils/context";

const Stack = createNativeStackNavigator();
// export const Context = React.createContext<string | null | undefined>("");



function AppNavigator() {
    const [isLoaded, setIsFontLoaded] = React.useState(false);
    // const [name, setName] = React.useState<string | undefined | null>(null);
    const [userName, setUserName] = React.useState<string | undefined | null>('');
    const value = React.useMemo(
        () => ({ userName, setUserName }),
        [userName]
    );
    const { getUser, setUser, removeUser } = useStorage();
    // removeUser();
    getUser().then((n) => {
        setUserName(n);
        setTimeout(() => {
            setIsFontLoaded(true);
        }, 1000)
    });
    return (
        isLoaded === false ? <AppLoading /> :
            <UserContext.Provider value={value}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={userName === null ? "onBoard" : "app"} screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="onBoard" component={OnBoarding} />
                        <Stack.Screen name="Name" component={EnterName} />
                        <Stack.Screen name="app" component={App} />
                    </Stack.Navigator>
                </NavigationContainer>
            </UserContext.Provider>
    );
}

export default AppNavigator;
