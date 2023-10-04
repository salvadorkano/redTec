import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './stylesHome';
import {routerProps} from '../router/RootStackParams';
function DetailsScreen({navigation, route}: routerProps<'Details'>) {
  console.log('asd', route.params.variable);
  useEffect(() => {
    console.log('Hola2');
    return () => {
      console.log('RETUNR');
    };
  }, []);
  return (
    <View style={styles.styleError}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default DetailsScreen;
