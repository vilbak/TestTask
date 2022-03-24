import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
  },
  disabledErrorButton: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  disabledButton: {
    backgroundColor: 'grey',
    borderColor: 'grey',
  },
  text: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
    textTransform: 'capitalize',
  },
  disabledText: {
    color: 'white',
  },

  // outline styles
  outlinedButton: {
    backgroundColor: 'white',
  },
  outlinedText: {
    color: 'blue',
  },
  disabledOutlinedButton: {
    backgroundColor: 'white',
  },
  disabledOutlinedText: {
    color: 'grey',
  },
});
