import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: normalize(30),
    backgroundColor: colors.white,
  },
  containerHeader: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBack: {
    fontSize: normalize(14),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: normalize(28),
  },
  imageHeader: {
    width: normalize(42),
    height: normalize(41),
  },
  inputEmail: {
    backgroundColor: colors.neutral05,
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 50,
    margin: 10,
    alignContent:'center'
  },
  buttonText: {fontSize: 16, fontWeight: '600'},
  footScreenContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    marginBottom: 10,
  },
  proyectitoFootPage: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.titleText,
  },
});
