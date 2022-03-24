import React from 'react';
import {View, Image} from 'react-native';
import 'react-native-url-polyfill/auto';

import {styles} from './styles';

export const Photo = ({photo}: any) => {
  const {user, urls} = photo;

  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: urls.regular,
        }}
      />
    </View>
  );
};
