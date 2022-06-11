import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export interface appLoadingProps {

}

const AppLoading: React.FC<appLoadingProps> = ({ }) => {
    let animation: React.RefObject<any> = React.createRef();

    React.useEffect(() => {
        animation.current.play()
    }, [])
    return (
        <View style={styles.container}>
            <LottieView
                ref={animation}
                loop={true}
                style={{
                    width: 200,
                    height: 200
                }}
                source={require('../assets/animation4.json')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "40%",
        alignItems: "center",
    }
})
export default AppLoading;