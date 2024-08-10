import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Image style={styles.bannerImage} source={require("../assets/backgroundtwo.png")} />
        <Text style={styles.title}>Sign In</Text>

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

        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  getStartedButton: {
    backgroundColor: '#50C2C9',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  getStartedText: {
    color: '#fff',
    fontSize: 16,
  },
});
