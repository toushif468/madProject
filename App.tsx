import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './src/screen/HomeScreen';
// import LoginScreen from './src/screen/LoginScreen';


const Stack = createNativeStackNavigator();

const App = () => {



  return (

    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{
    //       headerShown: false,
    //     }}>
    //       {/* <Stack.Screen name={"HOME"} component={HomeScreen} />
    //       <LoginScreen /> */}
    //     <Stack.Screen name={"LOGIN"} component={LoginScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View>
      <Text>Hello world</Text>
    </View>

  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
