import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { screenWidth } from '../constants/dimensions'

const FormButton = ({textValue, ...props}) => {
    return (
        <View>
            <TouchableOpacity
               {...props}
                style={styles.loginButton}
            >
                <Text style={styles.loginText}>{textValue}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FormButton

const styles = StyleSheet.create({
      loginButton: {
        backgroundColor: "#59C6F5",
        width: screenWidth - 50,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 10
    },
    loginText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }, 
})