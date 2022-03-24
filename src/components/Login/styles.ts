import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  logIn: {marginBottom: 10, borderRadius: 50},
  withoutAuth: {borderRadius: 50},
});
