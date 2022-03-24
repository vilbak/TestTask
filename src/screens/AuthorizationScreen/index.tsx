import React from 'react';
import {ACCESS_KEY, SECRET_KEY, REDIRECT_URI} from '@env';
import 'react-native-url-polyfill/auto';
import {SafeAreaView} from 'react-native-safe-area-context';

import {URLSearchParams} from 'react-native-url-polyfill';
import {WebView} from 'react-native-webview';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '@/constants';
export const AuthorizationScreen = () => {
  const navigation = useNavigation();

  const handleNavigationStateChange = ({url, loading}: any) => {
    if (url.includes('code=') && !loading) {
      const [, secondPart] = url.split('?code=');

      axios
        .post('https://unsplash.com/oauth/token', null, {
          params: {
            client_id: ACCESS_KEY,
            client_secret: SECRET_KEY,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code',
            code: secondPart,
          },
        })
        .then(response => {
          axios
            .get('https://api.unsplash.com/me', {
              headers: {
                Authorization: 'Bearer ' + response.data.access_token,
              },
            })
            .then(resp => {
              navigation.navigate(Screens.imageList, {
                fromAuth: true,
                profileImage: resp.data.profile_image.medium,
              });
            })
            .catch(err => console.warn(err));
        })
        .catch(err => console.warn(err));
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{
          uri:
            'https://unsplash.com/oauth/authorize?' +
            new URLSearchParams({
              client_id: ACCESS_KEY,
              redirect_uri: REDIRECT_URI,
              response_type: 'code',
              scope: 'public',
            }),
        }}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </SafeAreaView>
  );
};
