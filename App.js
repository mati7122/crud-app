
import React from 'react';
import { AppState } from 'react-native';
import { SWRConfig } from 'swr';

//COMPONENTS
import { AddUser } from './Components/AddUser';
import { DataProvider } from './Components/Service';
import Update from './Components/Update';

import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemInfo, List } from './Components/List';

//IMAGES
import CreateImg from './assets/pen.png';
import ReadImg from './assets/open-book.png';
import UpdateImg from './assets/refresh-page-option.png';
import DeleteImg from './assets/trash.png';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#fff'
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
  },
  optionHome: {
    backgroundColor: 'red'
  }
})

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

//TAB NAVIGATOR

const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <>
      <Title />
      <Tab.Navigator>
        <Tab.Screen name="Users" component={List} />
        <Tab.Screen name="Add" component={AddUser} />
      </Tab.Navigator>
    </>
  );
}

//STACK NAVIGATOR

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isVisible: () => { return true },
        initFocus(callback) {
          let appState = AppState.currentState

          const onAppStateChange = (nextAppState) => {
            if (appState.match(/inactive|background/) && nextAppState === 'active') {
              callback()
            }
            appState = nextAppState
          }
          const subscription = AppState.addEventListener('change', onAppStateChange)

          return () => {
            subscription.remove()
          }
        }
      }}
    >
      <NavigationContainer>
        <DataProvider>
          <Stack.Navigator initialRouteName="test">
            <Stack.Screen name="test" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="User Info" component={ItemInfo} />
            <Stack.Screen name="Update" component={Update} />
          </Stack.Navigator>
        </DataProvider>
      </NavigationContainer>
    </SWRConfig>
  );
}

export default App;