import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { List, ItemInfo } from './List';

const Stack = createNativeStackNavigator();

function Home() {
    

    // const GetData = async () => {
    //     await axios.get(url + 'get-data')
    //         .then(res => {
    //             SetItem(res.data.succes)
    //         })
    // }

    // useEffect(() => {
    //     GetData();
    //     console.log(item)
    // }, [])

    return (
        <Stack.Navigator initialRouteName="Users">
            <Stack.Screen name="Users" component={List} />
            <Stack.Screen name="ItemInfo" component={ItemInfo} />
        </Stack.Navigator>
    );
}

export default Home;