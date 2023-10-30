import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: normalize(20),
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
  textInput: {
    backgroundColor: colors.neutral05,
    color: colors.neutral60,
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
