import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput, ActivityIndicator} from 'react-native';
import styles from './stylesHome';
import {routerProps} from '../router/RootStackParams';

function HomeScreen({navigation}: routerProps<'Home'>) {
  const variable = 10;
  const [num, juanito] = useState<number>(1);
  const [name, setName] = useState<string>('Roger');
  const [number, onChangeNumber] = useState('');
  const [text, onChangeText] = useState('Useless Text');
  // const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  let name2 = '1';

  useEffect(() => {
    console.log('Hola');
    setName('Roger2');
    setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => {
      console.log('RETUNR');
    };
  }, [name]);

  function changeName(text2: String) {
    console.log('name1222', name);

    if (name === 'Roger') {
      setName(`${text2}`);
    } else if (name === 'El primo') {
      setName('Roger');
    } else {
      setName('El primo');
    }
  }
  //No actualiza el state que seria la pantalla
  function changeName2(texto: String) {
    console.log('name2', texto);

    setName(`${texto}`);

    // if (name === 'Roger') {
    //   setName('El primo');
    // } else {
    //   setName('Roger');
    // }

    // if (name2 === '1') {
    //   name2 = '2';
    // } else {
    //   name2 = '1';
    // }
  }

  function changeNum(num2: number) {
    console.log('num', num2);
    juanito(num2 + 1);
  }
  return (
    <View style={styles.styleError}>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <View>
          <Text>Home Screen</Text>
          <Button
            title={`${text}`}
            onPress={() => navigation.navigate('Details', {variable})}
          />
          <Button title={name} onPress={() => changeName(text)} />
          <Button title={name2} onPress={() => changeName2(text)} />
          <Button title={`${num}`} onPress={() => changeNum(5)} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            style={styles.inputRojo}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>
      )}
    </View>
  );
}

export default HomeScreen;
