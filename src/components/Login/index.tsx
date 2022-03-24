import React from 'react';
import {ImageBackground, View, GestureResponderEvent} from 'react-native';
import 'react-native-url-polyfill/auto';
import {Button} from '@/components/Button';
import {styles} from './styles';

export type Login = {
  photo: string;
  handleWithoutAuth: (event: GestureResponderEvent) => void;
  handleAuth: (event: GestureResponderEvent) => void;
};

export const Login = ({photo, handleWithoutAuth, handleAuth}: Login) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: photo,
        }}>
        <View style={styles.buttonContainer}>
          <Button onPress={handleAuth} buttonStyle={styles.logIn}>
            Log in
          </Button>
          <Button onPress={handleWithoutAuth} buttonStyle={styles.withoutAuth}>
            Continue without authorizing
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};
