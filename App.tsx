import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from './src/utils/color';
// import HomeScreen from './src/screen/HomeScreen';
import SignUp from './src/screen/SignUp';
import LoginScreen from './src/screen/LoginScreen';
import StartingPage from './src/screen/StartingPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartingPage">
        <Stack.Screen name="StartingPage" component={StartingPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   {/* <LoginScreen /> */}
    //   <SignUp />
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'normal',
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 40,
  },
});
