import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View style={styles.pageContainer}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                {/* <Image style={styles.bannerImage} source={require("../assets/backgroundtwo.png")} /> */}

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
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

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <View style={styles.signInTextContainer}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.socialButtonsContainer}>
                    <TouchableOpacity style={styles.getSocialButton}>
                        <Image style={styles.socialIcon} source={require("../assets/google_media_social_icon.png")} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.getSocialButton}>
                        <Image style={styles.socialIcon} source={require("../assets/apple_icon.png")} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.getSocialButton}>
                        <Image style={styles.socialIcon} source={require("../assets/facebook_f_icon.png")} />

                    </TouchableOpacity>
                </View>
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
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    signInTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    signInText: {
        color: '#50C2C9',
        fontWeight: 'bold',
    }, socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    getSocialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#50C2C9',
        padding: 15,
        borderRadius: 5,
        width: '30%',
        justifyContent: 'center',
    },
    socialIcon: {
        height: 24,
        width: 24,
        marginRight: 10,
    },
});
