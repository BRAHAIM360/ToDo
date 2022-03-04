import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../constants';
import { backGround1 } from '../constants/images';
import { useStorage } from '../hooks/useStorage';
import { Context } from '../navigation/appNavigator';

export interface EnterNameProps {
    navigation: NativeStackNavigationProp<any, any>,

}
const { width, height } = Dimensions.get("screen")
const EnterName: React.FC<EnterNameProps> = ({ navigation }) => {
    const [name, setName] = React.useState("")
    const { setUser } = useStorage();
    const namee = React.useContext(Context);
    return (
        <ImageBackground style={styles.container} source={backGround1}>
            <Text style={styles.text}>Enter Your Name</Text>
            <TextInput style={styles.input} placeholder='Your name is' value={name} onChangeText={(e) => setName(e)} />
            <TouchableOpacity style={styles.button} onPress={() => setUser(name).then(() => navigation.navigate("app", name))} >
                <Text>Enter</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 200,
        resizeMode: 'stretch',
        position: "absolute",
        height: height,
        width: width,
    },
    text: {
        color: COLORS.blue,
        fontSize: 40
    },
    input: {
        borderWidth: 4,
        padding: 10,
        width: "80%",
        borderRadius: 20,
        borderColor: COLORS.blue,
        fontSize: 25
    },
    button: {
        marginTop: 20,
        padding: 10,
        height: 50,
        width: 100,
        borderRadius: 20,
        borderColor: COLORS.blue,
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center",


    }
})
export default EnterName;