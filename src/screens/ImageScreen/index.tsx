import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import 'react-native-url-polyfill/auto';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetPhotos} from '@/hooks/useGetPhotos';
import {styles} from './styles';
import {Screens} from '@/constants';
import {Photo} from '@/components';

export const ImageScreen = ({
  route: {
    params: {fromAuth, profileImage},
  },
}: any) => {
  const navigation = useNavigation<any>();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {data: data, refetch} = useGetPhotos({isRefreshing, setIsRefreshing});

  const onRefresh = () => {
    setIsRefreshing(true);
    refetch();
  };

  const handleLogOut = () => {
    navigation.navigate(Screens.login);
  };

  const handleLogIn = () => {
    navigation.navigate(Screens.authorization);
  };
  return (
    <SafeAreaView style={styles.container}>
      {data.length > 0 ? (
        <View>
          <View style={styles.logInContainer}>
            {fromAuth ? (
              <View>
                <Image
                  source={{
                    uri: profileImage,
                  }}
                  style={styles.logInImage}
                />
                <TouchableOpacity onPress={handleLogOut}>
                  <Text>Log out</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={handleLogIn}>
                <Text>Log In</Text>
              </TouchableOpacity>
            )}
          </View>

          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.index}
            onEndReachedThreshold={0}
            onEndReached={onRefresh}
            renderItem={item => {
              return <Photo photo={item.item} />;
            }}
            ListFooterComponent={
              <ActivityIndicator animating={true} style={styles.spinner} />
            }
          />
        </View>
      ) : (
        <ActivityIndicator animating={true} style={styles.spinner} />
      )}
    </SafeAreaView>
  );
};
