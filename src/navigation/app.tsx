import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppContainer from '../components/app-container';
import Navigator from './..'

interface appProps {
    route: any
}

const App = ({ route }: appProps) => {

    const { name } = route.params
    return (
        <AppContainer>
            <Navigator name={name} />
        </AppContainer>
    );
}
const styles = StyleSheet.create({
    container: {

    }
})
export default App;