import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppContainer from '../components/app-container';
import Navigator from './..'

interface appProps {

}

const App = () => {

    return (
        <AppContainer>
            <Navigator />
        </AppContainer>
    );
}
const styles = StyleSheet.create({
    container: {

    }
})
export default App;