import React, {useEffect, useState} from 'react';
import {
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './forgotPasswordStyle';
import {routerProps} from 'router/RootStackParams';
import logo from 'images/LogoTec.png';
import {colors} from 'colors';
import ButtonComponent from 'components/button/button';
import forgotPasswordStyle from './forgotPasswordStyle';

function ForgotPasswordScreen({navigation}: routerProps<'ForgotPassword'>) {
  const [text, setText] = useState(''); // Estado para el valor del campo de entrada


  const Actionbutton = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    console.log('Hola2');
    return () => {
      console.log('RETURN');
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.textBack}>Regresar</Text>
        </Pressable>
        <Image style={styles.imageHeader} resizeMode="contain" source={logo} />
      </View>

      <View>
        <Text
          style={{
            color: colors.titleText,
            fontSize: 24,
            fontWeight: '500',
            marginTop: 40,
            marginBottom: 10,
          }}>
          Recuperar contraseña
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          Ingresa tu correo electronico con el que te registraste y enviaremos
          un mail con las instrucciones para recuperar tu contraseña
        </Text>

        <View style={{alignContent: 'center', marginTop: 100, padding: 10}}>
          <TextInput
            style={forgotPasswordStyle.textInput}
            placeholder="Correo electronico"
            value={text}
            onChangeText={newText => setText(newText)} // Actualiza el estado 'text' al escribir
          />

          <ButtonComponent
            onPress={() => Actionbutton()}
            styleButton={forgotPasswordStyle.buttonStyle}
            buttonText={'Recuperar contraseña'}
            styleText={forgotPasswordStyle.buttonText}
          />
        </View>
      </View>
      <View style={forgotPasswordStyle.footScreenContainer}>
        <Text
          style={forgotPasswordStyle.proyectitoFootPage}>
          ProyectITO
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default ForgotPasswordScreen;
