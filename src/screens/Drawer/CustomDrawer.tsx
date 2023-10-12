import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer';
import React, {useRef} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import styles from './DrawerStyle';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const {navigation} = props;
  const scrollRef = useRef<Animated.ScrollView>(null);

  const logOut = () => {
    navigation.navigate('Auth');
  };

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value, [0, 1], [300, 0]);
    return {
      transform: [{translateX}],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.row, styles.view, styles.marginTop, viewStyles]}>
        <View style={styles.iconContainer}>
          <Text>Otro icono</Text>
        </View>
        <Text style={styles.headerTitle}>¡Hola!</Text>
      </Animated.View>
      <Animated.ScrollView
        ref={scrollRef}
        {...props}
        showsVerticalScrollIndicator={false}
        style={[styles.marginVertical, viewStyles]}>
        {/* <DrawerItemList {...props} /> */}
        <Animated.View
          style={[styles.row, styles.view, styles.marginTop, viewStyles]}>
          <View style={styles.iconContainer}>
            <Text
              style={
                (styles.headerTitle,
                {
                  flex: 1,
                  textAlign: 'right',
                  paddingRight: 20,
                  textAlignVertical: 'center',
                })
              }>
              Perfil
            </Text>
            <Text style={{alignSelf: 'flex-end', textAlignVertical: 'center'}}>
              icono
            </Text>
          </View>
        </Animated.View>
      </Animated.ScrollView>
      <TouchableOpacity onPress={logOut}>
        <Animated.View
          style={[styles.row, styles.view, styles.marginBottom, viewStyles]}>
          <View>
            <Text style={styles.headerTitle}>Cerrar sesión</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
