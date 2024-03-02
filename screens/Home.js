import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
import { getAuth, signOut } from "firebase/auth";

const Home = ({ route }) => {
  const navigation = useNavigation();
  const { name } = route.params;

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
      <Text>Welcome {name}</Text>
      <Button title='Logout' onPress={handleSignOut} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})