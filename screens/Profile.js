import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth";
import FormButton from '../components/FormButton';
import Footer from '../components/Footer';

const Profile = ({ route }) => {
    const navigation = useNavigation();
    const { name } = route.params;
    console.log(name);

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
            <View  style={styles.content}>
                <Text style={styles.userNameText}>Hey, {name}</Text>
                <FormButton textValue='Sign out' onPress={handleSignOut} />
            </View>
            <Footer userName={name}/>
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
        fontSize : 20,
        fontWeight: 'bold'
    },
   
})