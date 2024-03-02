import { View, Text, StyleSheet, TextInput,} from 'react-native'
import React from 'react'
import { screenWidth } from '../constants/dimensions';

const FormInput = ({placeholder, ...props }) => {
    return (
        <View>
            <TextInput
                style={styles.inputField}
                placeholder={placeholder}
                {...props}      
            />
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    inputField: {
        borderWidth: 1,
        borderColor: "gray",
        height: 50,
        width:screenWidth-50,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 20,
        padding: 5,
    },
})