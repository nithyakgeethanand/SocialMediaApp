import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {

    const navigation = useNavigation();
    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    const navigateToProfile = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={navigateToHome} style={styles.icon}>
                <Entypo name="home" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToProfile} style={styles.icon}>
                <Ionicons name="person" size={30} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingVertical: 10,
        height:80
    },
})