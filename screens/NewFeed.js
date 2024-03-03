import { View, Text, StyleSheet, Button, Image, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import Footer from '../components/Footer';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { screenWidth, screenHeight } from '../constants/dimensions';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FormButton from '../components/FormButton';

const NewFeed = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handlePost = () =>{
        console.log("clicked");
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={80}
            style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <TextInput
                        multiline={true}
                        editable={true}
                        numberOfLines={5}
                        placeholder='What you have to say?'
                        style={styles.textArea}
                    />
                    {image && <Image
                        source={{ uri: image }}
                        style={styles.feedImage}
                    />}
                    <TouchableOpacity onPress={pickImage} style={styles.uploadImageButton}>
                        <Text style={styles.uploadImageText}>Upload an image</Text>
                    </TouchableOpacity>

                    <FormButton textValue="Post" onPress={handlePost}/>

                </View>

               
            </ScrollView>
            <Footer />
        </KeyboardAvoidingView>
    )
}

export default NewFeed

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
    feedImage: {
        width: screenWidth - 50,
        height: screenHeight / 3,
        borderRadius: 10,
        marginTop: 20
    },
    uploadImageButton: {
        backgroundColor: '#ECECEC',
        height: 40,
        width: screenWidth - 50,
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    uploadImageText: {
        fontSize: 15,
    },
    textArea: {
        borderWidth: 1,
        borderColor: "#ECECEC",
        borderRadius: 5,
        height: screenHeight / 3,
        textAlignVertical: "top",
        width: screenWidth - 50,
        backgroundColor: '#FFFFFF',
        fontSize: 20,
        padding: 10
    },

})