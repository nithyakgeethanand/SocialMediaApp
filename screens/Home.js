import { View, Text } from 'react-native'
import React from 'react'

const Home = ({route}) => {
    const {name} = route.params;
    console.log(name);
  return (
    <View>
      <Text>Welcome {name}</Text>
    </View>
  )
}

export default Home