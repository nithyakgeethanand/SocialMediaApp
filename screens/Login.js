import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'


const Login = () => {
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (userName === 'nithya' && password === 'password') {
            navigation.navigate("Home", { userName })
        } else {
            setError('Invalid username or password');
        }
    }

    return (

        <View style={styles.container}>
            <Image source={require("../assets/app-logo.png")} style={styles.logo} resizeMode='center' />
            <Text style={styles.appLabel}>React Social</Text>
            <FormInput
                placeholder='Email'
                value={userName}
                onChangeText={(text) => setUserName(text)}
                keyboardType="email-address"
                autoCapitalize='none'
            />
            <FormInput
                placeholder='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Text style={styles.errorText}>{error}</Text>
            <FormButton textValue="Login" onPress={handleLogin} />
            <FormButton textValue="Sign Up" onPress={handleLogin} />
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 200,
        height: 200,
    },
    appLabel: {
        fontSize:30,
        padding:20
    },
    errorText: {
        color: "red",
        padding: 5
    }
}) 