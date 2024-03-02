import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (validateInputs()) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user.displayName);
                    navigation.navigate("Home", {name: user.displayName} )
                })
                .catch((error) => {
                    if (error.code === "auth/invalid-email") {
                        setError('Invalid email or password');
                    } else {
                        setError('Something went wrong, please try again later');
                    }
                });
        }
    }

    const validateInputs = () => {
        if (!password) {
            setError('Password is required');
            return false;
        }

        if (!email) {
            setError('Email is required');
            return false;
        }

        return true;
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
                value={email}
                onChangeText={(text) => setEmail(text)}
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