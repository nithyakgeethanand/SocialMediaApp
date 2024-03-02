import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
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

    const handleSign = () => {
        navigation.navigate("SignUp");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={80}
            style={styles.container} >
            {/* <View style={styles.container}> */}
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
            <FormButton textValue="Sign Up" onPress={handleSign} />
            {/* </View> */}
        </KeyboardAvoidingView>
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
        fontSize: 30,
        padding: 20
    },
    errorText: {
        color: "red",
        padding: 5
    }
}) 