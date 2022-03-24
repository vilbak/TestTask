import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import unsplash from '@/api/unSplash';
import {Login} from '@/components/Login';
import {Screens} from '@/constants';
import {ActivityIndicator} from 'react-native';
import 'react-native-url-polyfill/auto';
import {styles} from './styles';

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [photo, setPhotos] = useState('');

  const handleWithoutAuth = () => {
    navigation.navigate(Screens.imageList, {
      fromAuth: false,
      profileImage: '',
    });
  };

  const handleAuth = () => {
    navigation.navigate(Screens.authorization);
  };

  useEffect(() => {
    unsplash.photos
      .getRandom({})
      .then(result => {
        setPhotos(result?.response?.urls?.regular);
      })
      .catch(() => {
        console.log('Something went wrong!');
      });
  }, []);
  return photo ? (
    <Login
      photo={photo}
      handleWithoutAuth={handleWithoutAuth}
      handleAuth={handleAuth}
    />
  ) : (
    <ActivityIndicator animating={true} style={styles.spinner} />
  );
};
