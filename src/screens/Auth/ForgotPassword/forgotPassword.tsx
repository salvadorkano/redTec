import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './forgotPasswordStyle';
import {routerProps} from 'router/RootStackParams';
function ForgotPasswordScreen({navigation}: routerProps<'ForgotPassword'>) {
  useEffect(() => {
    console.log('Hola2');
    return () => {
      console.log('RETUNR');
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default ForgotPasswordScreen;
