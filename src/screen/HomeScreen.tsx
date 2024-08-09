import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../utils/color';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native"
const HomeScreen = () => {

    return (
        <View style={styles.pageContainer}>
          <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Image style={styles.bannerImage} source={require("../assets/backgroundone.svg")} />
            <Text style={styles.title}>Lorem ipsum dolor.</Text>
            <Text style={styles.subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium inventore, minima quas accusantium consectetur laboriosam eum quo perspiciatis maiores.</Text>
                <TouchableOpacity style={styles.getStartedButton}>
                    <Text style={styles.getStartedText}>Get Started</Text>
                </TouchableOpacity>

          </View>
        </View>


    );
};

export default HomeScreen;

const styles = StyleSheet.create({

    pageContainer: {
        display: 'flex',
        flexDirection: 'row',

        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'blue'

    }, container: {
        // flex: 1,
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor: "bottle green",
        alignItems: "center",
        width: '90%',


    }, logo: {
        height: 40,
        width: 140,
        marginVertical: 30,
        marginTop: 60,
    }, bannerImage: {
        height: 160,
        width: 255,

    }, title: {
        fontSize: 40,
        // fontFamily: fonts.SemiBold, //not working
        fontWeight: 'normal',
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.primary,
        marginTop: 20,
    }, subTitle: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.secondary,
        // fontFamily: fonts.Medium,
        marginTop: 40,
        marginBottom: 40,
        fontWeight: 'normal',

    }, getStartedButton: {
        backgroundColor: '#50C2C9',
        paddingTop: 14,
        paddingBottom: 14,
        width: '100%'
    }, getStartedText: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center'
    }

});