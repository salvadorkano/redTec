import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';
export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    marginHorizontal: 30,
  },
  containerImg: {
    // backgroundColor: 'blue',
    marginTop: normalize(100),
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  containerTitle: {
    // backgroundColor: 'green',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  principalTitle: {
    color: colors.titleText,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
  },
  secundaryTitle: {
    color: colors.subTitle,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
  },
  containerForm: {flex: 1},
  containerButton: {flex: 1},
  styleError: {color: 'red', marginTop: 10, alignSelf: 'flex-end'},
  styleTextButton: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 26,
    letterSpacing: 0.32,
  },
});
