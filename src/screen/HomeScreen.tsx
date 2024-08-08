// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { colors } from '../utils/color'; 
// import { fonts } from '../utils/fonts';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from "react-native"
// const HomeScreen = () => {
//     // const navigation = useNavigation();

//     // const handleLogin = () => {

//     //     const handleLogin = () => {
//     //         navigation.navigate("LOGIN");
//     //     };
//     // }
//     return (
//         <View style={styles.container}>
//             <Image source={require("../assets/logo.png")} style={styles.logo} />
//             <Image source={require("../assets/man.png")} style={styles.bannerImage} />
//             <Text style={styles.title}>Lorem ipsum dolor.</Text>
//             <Text style={styles.subTitle}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum sequi et sapiente laudantium omnis sint facere explicabo eum fugiat.
//             </Text>
//             <View style={styles.buttonContainer}>
//                 <TouchableOpacity style={[styles.loginButtonWrapper, { backgroundColor: colors.primary }]} onPress={handleLogin}>
//                     <Text style={styles.loginButtonText}>Login</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.signupButtonWrapper}>
//                     <Text style={styles.signupButtonText}>Sign-up</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>

//     );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//         alignItems: "center",

//     },

//     logo: {
//         height: 40,
//         width: 140,
//         marginVertical: 30,
//     }, bannerImage: {
//         height: 250,
//         width: 231,

//     }, title: {
//         fontSize: 45,
//         // fontFamily: fonts.SemiBold, //not working
//         fontWeight: 'normal',
//         paddingHorizontal: 20,
//         textAlign: "center",
//         color: colors.primary,
//         marginTop: 40,


//     }, subTitle: {
//         fontSize: 18,
//         textAlign: 'center',
//         color: colors.secondary,
//         fontFamily: fonts.Medium,
//         fontWeight: 'normal',
//     },
//     buttonContainer: {
//         marginTop: 50,
//         flexDirection: "row",
//         borderWidth: 2,
//         borderColor: colors.primary,
//         width: "80%",
//         height: 60,
//         borderRadius: 100,
//     }, loginButtonWrapper: {
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: colors.primary,
//         width: "50%",
//         borderRadius: 98,

//     }, loginButtonText: {
//         color: 'white',
//         fontSize: 18,
//         fontFamily: fonts.SemiBold,

//     }, signupButtonText: {
//         fontSize: 18,
//         fontFamily: fonts.SemiBold,
//     }, signupButtonWrapper: {
//         justifyContent: "center",
//         alignItems: "center",
//         width: "50%",
//         borderRadius: 98,
//     }
// });
