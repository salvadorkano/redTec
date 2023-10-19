import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  containerProfile: {
    flex: 1,
    flexDirection: 'column',
    borderColor: colors.neutral05,
    borderWidth: 1,
    margin: 20,
  },
  container: {
    flex: 1,
    marginLeft: 3,
    marginRight: 5,
  },
  backgroundImage: {
    flex: 0.3,
    width: '100%',
    top: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 155,
    height: 155,
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    top: 75,
  },
  name: {
    padding: 5,
    fontSize: 20,
    lineHeight: 28,
    color: '#263765',
  },
  textInfo: {
    padding: 5,
    color: '#828282',
  },
  editInfoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    top: 100,
  },
  editInfoText: {
    color: '#1769E4',
    lineHeight: 28,
  },
  proyectito: {
    fontSize: 18,
    color: '#263765',
    textAlign: 'center',
  },
});
