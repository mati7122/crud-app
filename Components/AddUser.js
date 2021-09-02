
import React from "react";
import { Text, View, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import Global from '../Global';

const url = Global.uri;

function AddUser() {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post(url + 'save', {
            name: data.name,
            email: data.email,
            number: data.number,
            location: data.location
        })
            .then(() => {
                Alert.alert("SUCCESS", "DATA SENT")
            })
    }

    return (
        <View style={styles.content}>
            <Text>Name</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="name"
                defaultValue=""
            />
            {errors.name && <Text>This is required.</Text>}

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
                    />
                )}
                name="email"
                defaultValue=""
            />
            {errors.email && <Text>Required</Text>}

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
                    />
                )}
                name="number"
                defaultValue=""
            />
            {errors.number && <Text>Required</Text>}

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
                    />
                )}
                name="location"
                defaultValue=""
            />
            {errors.location && <Text>Required</Text>}

            {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        width: 300,
        borderStyle: 'solid',
        borderWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 5,
        borderRadius: 10
    },

    button: {
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderBottomColor: 'black',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#548BD8',
    },

    buttonText: { 
        color: '#fff',
        fontWeight: '900'
    }
})

export default AddUser;