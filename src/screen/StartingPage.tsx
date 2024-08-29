import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'; // Correct import for Ionicons
import { colors } from '../utils/color'; // Assuming colors are defined in a utils folder

const StartingPage = ({ navigation }) => {

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Image style={styles.bannerImage} source={require("../assets/backgroundone.png")} />
        <Text style={styles.title}>Lorem ipsum dolor.</Text>
        <Text style={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium inventore, minima quas accusantium consectetur laboriosam eum quo perspiciatis maiores.
        </Text>
        <TouchableOpacity 
          style={styles.getStartedButton} 
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartingPage;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1, // Occupies full screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color to match the design
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
  title: {
    fontSize: 40,
    fontWeight: 'normal',
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.primary,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    // color: colors.secondary,
    marginTop: 40,
    marginBottom: 40,
    fontWeight: 'normal',
  },
  getStartedButton: {
    backgroundColor: '#50C2C9',
    paddingVertical: 14, 
    width: '100%',
  },
  getStartedText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
});
