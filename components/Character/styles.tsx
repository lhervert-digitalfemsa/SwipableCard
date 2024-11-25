import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  card: {
    width: '100%',
    height: Dimensions.get('window').height,
    alignSelf: 'center',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',

    // resizeMode: 'contain',
  },
  nameContainer: {
    position: 'absolute',
    paddingTop: 10,
    display: 'flex',
    width: '100%',
  },
  name: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
  }
});