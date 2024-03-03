import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth";
import FormButton from '../components/FormButton';
import Footer from '../components/Footer';

const Profile = () => {
    const navigation = useNavigation();
    const [userName, setUserName] = useState('Unknown');

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user.displayName) {
            setUserName(user.displayName);
        }
    }, []);

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.circleIcon}>
                    <Text style={{ fontSize: 50, fontWeight: "bold", color: "#ffffff" }}>{userName.charAt(0).toUpperCase()}</Text>
                </View>
                <Text style={styles.userNameText}>Hey, {userName}</Text>
                <FormButton textValue='Sign out' onPress={handleSignOut} />
            </View>
            <Footer />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userNameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    circleIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#59C6F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileIcon: {
        //marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    }

})