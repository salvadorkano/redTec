import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParams';
import SplashScreen from 'react-native-splash-screen';
import Auth from './authStack';
import home from 'screens/home';
import DetailsScreen from '../screens/details';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Auth'}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
