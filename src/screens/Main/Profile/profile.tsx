import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import {routerProps} from 'router/RootStackParams';
import ButtonComponent from 'components/button/button';
import {DrawerActions} from '@react-navigation/native';
import ProfileBG from 'images/ProfileBG.png';
import ProfileP from 'images/ProfilePicture.png';
import smallLogo from 'images/smallLogo.png';
import styles from './profileStyle';

function ProfileScreen({navigation}: routerProps<'Profile'>) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={{top: 25, right: -10}}>Regresar</Text>
        </Pressable>
        <Image style={{alignSelf: 'flex-end', left: -10}} source={smallLogo} />
      </View>

      {/* Profile container */}

      <View style={styles.containerProfile}>
        <ImageBackground source={ProfileBG} style={styles.backgroundImage}>
          <View style={styles.profilePicture}>
          <Image source={ProfileP} />
          </View>
        </ImageBackground>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Fernando Reyes Gonzalez</Text>
          <Text style={styles.textInfo}>No. Control: 1506242</Text>
          <Text style={styles.textInfo}>Andres_22@gmail.com</Text>
          <Text style={styles.textInfo}>222-222-2222</Text>
        </View>
        <View style={styles.editInfoContainer}>
          <Text style={styles.editInfoText}>Editar informacion</Text>
        </View>
      </View>
      <View>
        <Text style={styles.proyectito}>ProyectITO</Text>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
