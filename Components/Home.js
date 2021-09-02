import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { List, ItemInfo } from './List';

const Stack = createNativeStackNavigator();

function Home() {

    return (
        <Stack.Navigator initialRouteName="Users">
            <Stack.Screen name="Users" component={List} options={{headerShown: false}}/>
            <Stack.Screen name="ItemInfo" component={ItemInfo} />
        </Stack.Navigator>
    );
}

export default Home;