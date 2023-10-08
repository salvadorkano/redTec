import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from 'screens/Main/Home/home';
import React from 'react';
import ProfileScreen from 'screens/Main/Profile/profile';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation={false}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
