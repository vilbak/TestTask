import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    paddingHorizontal: 10,
  },
  logInContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  logInImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  image: {
    width: 360,
    height: 260,
    flex: 1,
    resizeMode: 'cover',
    marginTop: 8,
    borderRadius: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});
