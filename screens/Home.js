import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Footer from '../components/Footer';

const Home = ({ route }) => {

  const { name } = route.params;

  console.log(name);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{name}</Text>
      </View>
      <Footer userName={name}/>
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
  }
})