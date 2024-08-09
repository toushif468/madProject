import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');

    return (
        <View style={styles.pageContainer}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Image style={styles.bannerImage} source={require("../assets/backgroundtwo.png")} />

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    pageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        alignItems: "center",
        width: '90%',
    },
    logo: {
        height: 40,
        width: 140,
        marginVertical: 30,
        marginTop: 60,
    },
    bannerImage: {
        height: 160,
        width: 255,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#50C2C9',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
