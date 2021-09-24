import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "./Service";
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import Global from '../Global';
import DeleteImg from '../assets/remove.png';
import userImg from '../assets/user.png';
import { mutate } from "swr";

const url = Global.uri;

function Delete(id) {
    axios.delete(url + 'delete/' + id)
        .then(() => {
            setTimeout(() => mutate('get-data'), 500);
            Alert.alert("SUCCESS", "DATA DELETED");
        })
}

function Item(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('User Info', {
            id: props.id,
            name: props.name,
            email: props.email,
            number: props.number,
            location: props.location
        })}>
            <View style={styles.name}>
                <Text>{props.name}</Text>
            </View>
            {/* <Text>{props.id}</Text> */}
            <TouchableOpacity onPress={() => Delete(props.id)}>
                <Image source={DeleteImg} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export function ItemInfo({ route }) {

    const navigation = useNavigation();
    const { name, email, number, location, id } = route.params;

    return (
        <View style={styles.containerInfo}>
            <Image source={userImg} style={styles.userImg} />
            <View style={styles.containerText}>
                {/* <Text style={styles.containerInfo__text}>Id: {id}</Text> */}
                <Text style={styles.containerInfo__text}>Name: {name}</Text>
                <Text style={styles.containerInfo__text}>Email: {email}</Text>
                <Text style={styles.containerInfo__text}>Phone: {number}</Text>
                <Text style={styles.containerInfo__text}>Ubication: {location}</Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Update', { 
                    id,
                    name, 
                    email,
                    number,
                    location
                     })}>
                    <Text>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Delete(id)}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerText: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    containerInfo__text: {
        marginTop: 20,
        fontSize: 20
    },
    item: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 10,
        marginRight: 3,
        marginLeft: 3,
        marginBottom: 6
    },
    name: {
        width: 100
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        marginTop: 25,
        display: 'flex',
        alignItems: 'center',
        width: 70,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#000'
    },
    userImg: {
        width: 100,
        height: 100
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

            {error &&
                <Text>Ah ocurrido un error</Text>
            }

            {!data &&
                <Text>Cargando</Text>
            }

            {data &&
                data.map(i => <Item name={i.name} id={i._id} email={i.email} number={i.number} location={i.location} />)
            }

        </View>
    );
}

