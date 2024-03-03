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
        <View style={styles.profileIcon}>
          <View style={styles.circleIcon}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#ffffff"}}>{item.displayName.charAt(0).toUpperCase()}</Text>
          </View>
          <View>
            <Text style={{marginLeft: 10, fontSize: 20}}>{item.displayName}</Text>
          </View>
        </View>


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
    alignItems: "flex-end",
    marginBottom: 2,
  },
  plusIcon: {
    color: "#59C6F5",
    fontSize: 30,
    marginRight: 10
  },
  circleIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#59C6F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "flex-start",
    alignItems: "center"
  }
})