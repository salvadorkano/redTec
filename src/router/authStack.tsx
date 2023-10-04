import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParams';
import LoginScreen from 'screens/Auth/Login/login';

const AuthStack = createNativeStackNavigator<RootStackParamList>();

function Auth() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      {/* <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="VerifyCode" component={VerifyCodeScreen} />
      <AuthStack.Screen name="Recover" component={RecoverScreen} />
      <AuthStack.Screen
        name="RestardPassword"
        component={RestardPasswordScreen}
      /> */}
    </AuthStack.Navigator>
  );
}

export default Auth;
