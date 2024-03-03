import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
import { Fontisto } from '@expo/vector-icons';
import { app } from '../firebaseConfig';
import { screenWidth } from '../constants/dimensions';

const Home = ({ route }) => {
  const navigation = useNavigation();
  const { name } = route.params;
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const feedsRef = app.firestore().collection('feed');
      const querySnapshot = await feedsRef.get();
      let newData = {};

      querySnapshot.forEach((doc) => {
        newData[doc.id] = doc.data();
      });

      setJsonData(newData);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  const renderFeedItem = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', }}>
      <View style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 10 }}>
        <Image
          source={{ uri: item.imageURL }}
          style={{ width: screenWidth - 60, height: 200, borderRadius: 10, alignItems: "center", justifyContent: "center", }}
        />
        <View style={{ flex: 1, }}>
          <Text style={{ fontSize: 18, paddingTop: 10 }}>{item.content}</Text>
        </View>
      </View>


    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("NewFeed")}>
        <View style={styles.plusIconContainer}>
          <Fontisto name="plus-a" style={styles.plusIcon} />
        </View>
      </TouchableOpacity>
      <FlatList
        data={Object.values(jsonData)}
        renderItem={renderFeedItem}
        keyExtractor={item => item.userId}
      />
      <Footer userName={name} />
    </View>
  );

};

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