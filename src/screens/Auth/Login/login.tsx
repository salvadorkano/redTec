import logo from 'images/LogoTec.png';
import React, {useEffect, useState} from 'react';
import {Image, KeyboardAvoidingView, Text, View} from 'react-native';
import {routerProps} from 'router/RootStackParams';
import styles from './loginStyle';
import InputComponent from 'components/input/CustomInput';
import ButtonComponent from 'components/button/button';
import {colors} from 'colors';
import {normalize} from 'utils/normalize';

function LoginScreen({}: routerProps<'Login'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (email === '') {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [email]);

  const validateEmail = (textEmail: string) => {
    let string = textEmail.trim();
    let reg =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(string) === false) {
      setEmail(string);
      setShowError(true);
      setValidate(false);
    } else {
      setEmail(string);
      setShowError(false);
      setValidate(true);
    }
  };

  function onLogin() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={logo} />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.principalTitle}>¡Hola!</Text>
        <Text style={styles.secundaryTitle}>
          Ingresa tus datos para iniciar sesión
        </Text>
      </View>
      <View style={styles.containerForm}>
        <InputComponent
          value={email}
          placeholder={'Usuario'}
          onChange={value => validateEmail(value)}
        />
        {showError ? (
          <Text style={styles.styleError}>Formato de correo incorrecto.</Text>
        ) : null}
        <InputComponent
          value={password}
          onChange={setPassword}
          placeholder={'Contraseña'}
          type={'password'}
        />
      </View>
      <View style={styles.containerButton}>
        <ButtonComponent
          loading={loading}
          disabled={!validate}
          onPress={() => (loading === true ? null : onLogin())}
          styleButton={
            validate
              ? {backgroundColor: colors.primary, top: normalize(5)}
              : {backgroundColor: colors.down_gray, top: normalize(5)}
          }
          buttonText={'Inicia sesión'}
          styleText={styles.styleTextButton}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
