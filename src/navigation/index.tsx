import React from 'react';
import {AuthorizationScreen, ImageScreen, LoginScreen} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Screens} from '@/constants';

export const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
      }}>
      <Stack.Screen
        options={{title: 'Image Gallery'}}
        name={Screens.login}
        component={LoginScreen}
      />
      <Stack.Screen name={Screens.imageList} component={ImageScreen} />
      <Stack.Screen
        name={Screens.authorization}
        component={AuthorizationScreen}
      />
    </Stack.Navigator>
  );
};
