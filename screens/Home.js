import { View, Text } from 'react-native'
import React from 'react'

const Home = ({route}) => {
    const {userName} = route.params;
    console.log(userName);
  return (
    <View>
      <Text>Welcome {userName}</Text>
    </View>
  )
}

export default Home