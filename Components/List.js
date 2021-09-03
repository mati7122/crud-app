import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "./Service";
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import Global from '../Global';
import DeleteImg from '../assets/remove.png';
import { mutate } from "swr";

const url = Global.uri;

function Delete(id) {
    axios.delete(url + 'delete/' + id)
        .then(() => {
            Alert.alert("SUCCESS", "DATA DELETED");
            setTimeout(() => mutate('get-data'),500);
        })
}

function Item(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.item} onPressIn={() => navigation.navigate('User Info')}>
            <Text>{props.name}</Text>
            <Text>{props.id}</Text>
            <TouchableOpacity onPress={() => Delete(props.id)}>
                <Image source={DeleteImg} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export function ItemInfo() {

    return (
        <View>
            <Text>Name: </Text>
            <Text>Email: </Text>
            <Text>Phone: </Text>
            <Text>Location: </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 10,
        marginRight: 3,
        marginLeft: 3,
        marginBottom: 6
    }
})

export function List() {

    const { data, error } = useContext(DataContext);

    // const [item, SetItem] = useState('No hay datos para mostrar');

    // useEffect(() => {
    //     const fetch = async () => {
    //         try {
    //             const resp = await axios.get(url + 'get-data');
    //             SetItem(resp.data);
    //         } catch (e) { }
    //     }
    //     fetch();
    // }, [])

    return (
        <View>

            {/* {!item.succes &&
                <Text>No hay datos para mostrar</Text>
            }
            {item.succes?.map(i => <Item name={i.name} id={i._id} />)

            } */}

            {error &&
                <Text>Ah ocurrido un error</Text>
            }

            {!data &&
                <Text>Cargando</Text>
            }

            {data &&
                data.map(i => <Item name={i.name} id={i._id} />)
            }

        </View>
    );
}

