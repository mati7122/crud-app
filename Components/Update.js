import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { styles } from './AddUser';
import axios from 'axios';
import Global from '../Global';

const uri = Global.uri;

function Update({ route }) {

    const { id, name, email, number, location } = route.params;
    const { control, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit = data => console.log(data);
    const onSubmit = data => {
        axios.post(uri + 'update/' + id, {
            name: data.name,
            email: data.email,
            number: data.number,
            location: data.location,
        })
            .then(() => { Alert.alert("SUCCESS", "DATA UPDATED CORRECTLY") })
    }

    return (
        <>

            <View style={styles.content}>
                <Text>Name</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        // placeholder={`${name}`}
                            defaultValue={`${name}`}
                        />
                    )}
                    name="name"
                />
                <Text>Email</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            defaultValue={`${email}`}
                        />
                    )}
                    name='email'
                />
                <Text>Phone</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            defaultValue={`${number}`}
                        />
                    )}
                    name="number"
                />
                <Text>Ubication</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            defaultValue={`${location}`}
                        />
                    )}
                    name="location"
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Update;