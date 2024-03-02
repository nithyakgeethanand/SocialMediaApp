import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { app } from '../firebaseConfig';

const SignUp = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        if (validateInputs()) {
            try {
                // Create user with email and password
                const auth = getAuth(app);
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);

                // Update user profiled
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name, 
                    //photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    console.log("User profile updated");
                    // Navigate to home page
                    navigation.navigate("Home", {name : user.displayName});
                  }).catch((error) => {
                    console.log(error);
                  });
            } catch (error) {
                console.error('Signup Error:', error);
            }
        }
    }

    const validateInputs = () => {
        if (!password) {
            setError('Password is required');
            return false;
        }

        if (password.length < 6) {
            setError('Password should be atleast 6 characters');
            return false;
        }

        if (password != confirmPassword) {
            setError('Password and Confirm Password should match');
            return false;
        }

        if (!name) {
            setError('Name is required');
            return false;
        }

        if (!email) {
            setError('Email is required');
            return false;
        }

        if (!isValidEmail(email)) {
            setError('Invalid email');
            return false;
        }

        return true;
    }

    const isValidEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={80}
            style={styles.container} >
            {/* <View > */}
            <Text style={styles.appLabel}>Create a new account</Text>
            <FormInput
                placeholder='Name'
                value={name}
                onChangeText={(text) => setName(text)}
            />
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
                textContentType="none"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <FormInput
                placeholder='Confirm password'
                value={confirmPassword}
                textContentType="none"
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry
            />
            <Text style={styles.errorText}>{error}</Text>
            <FormButton textValue="Sign Up" onPress={handleSignUp} />
            {/* </View> */}
        </KeyboardAvoidingView>
    )
}

export default SignUp

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