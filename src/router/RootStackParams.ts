// https://benjaminwoojang.medium.com/react-navigation-with-typescript-270dfa8d5cad
// https://reactnavigation.org/docs/typescript/

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  MyDrawer: undefined;
  Home: undefined;
  Details: {
    variable: number;
  };
};

export type routerProps<RouteName extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, RouteName>;
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
};

export type navigationProps<RouteName extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, RouteName>;
