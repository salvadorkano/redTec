import {View, Text} from 'react-native';
import React from 'react';
import profileStyle from './profileStyle';
import {routerProps} from 'router/RootStackParams';
import ButtonComponent from 'components/button/button';
import {DrawerActions} from '@react-navigation/native';

function ProfileScreen({navigation}: routerProps<'Profile'>) {
  return (
    <View style={profileStyle.container}>
      <Text>Pantalla Profile</Text>
      <ButtonComponent
        styleButton={{}}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        buttonText={'Drawer'}
      />
    </View>
  );
}

export default ProfileScreen;
