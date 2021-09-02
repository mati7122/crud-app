
import React from 'react';

//COMPONENTS
import AddUser from './Components/AddUser';
import Home from './Components/Home';

import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//IMAGES
import CreateImg from './assets/pen.png';
import ReadImg from './assets/open-book.png';
import UpdateImg from './assets/refresh-page-option.png';
import DeleteImg from './assets/trash.png';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    marginBottom: 8
  },
  ImgContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 20
  }
})

const Tab = createMaterialTopTabNavigator();

function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD STACK MERN</Text>
      <View style={styles.ImgContainer}>
        <Image source={CreateImg} style={styles.img} />
        <Image source={ReadImg} style={styles.img} />
        <Image source={UpdateImg} style={styles.img} />
        <Image source={DeleteImg} style={styles.img} />
      </View>
    </View>
  );
}

function App() {
  return (
    <>
      <Title/>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Add" component={AddUser} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;