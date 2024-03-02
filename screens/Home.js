import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import { Fontisto } from '@expo/vector-icons';

const Home = ({ route }) => {
  const navigation = useNavigation();
  const { name } = route.params;

  console.log(name);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate("NewFeed")}>
        <View style={styles.plusIconContainer}>
          <Fontisto name="plus-a" style={styles.plusIcon} />
        </View>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text>{name}</Text>
      </View>
      <Footer userName={name} />
    </View>

  )
}

export default Home

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
  plusIconContainer: {
    alignItems: "flex-end"
  },
  plusIcon: {
    color: "#59C6F5",
    fontSize: 30,
    marginRight: 10

  }
})