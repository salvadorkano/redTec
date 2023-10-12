import {View, Image, Text, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import homeStyle from './homeStyle';
import ButtonComponent from 'components/button/button';
import {routerProps} from 'router/RootStackParams';
import {DrawerActions} from '@react-navigation/native';
import menu from 'icons/iconMenu.png';
import profilePic from 'images/pp.png';

function HomeScreen({navigation}: routerProps<'Home'>) {
  return (
    <SafeAreaView style={homeStyle.container}>
      {/* <Text>Pantalla Home</Text>
      <ButtonComponent
        styleButton={{}}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        buttonText={'Drawer'}
      /> */}
      <View style={homeStyle.containerHeader}>
        <View style={homeStyle.viewImage}>
          <Image source={profilePic} />
        </View>
        <View style={homeStyle.viewText}>
          <Text style={homeStyle.textFormat}>¡Bienvenido Fernando!</Text>
        </View>
        <View style={homeStyle.viewMenu}>
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image source={menu} />
          </Pressable>
        </View>
      </View>
      <View style={{flex: 5, backgroundColor: 'blue'}}>
        <Text>Texto</Text>
        <ButtonComponent
          styleButton={{}}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          buttonText={'Drawer'}
        />
      </View>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>Texto</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
