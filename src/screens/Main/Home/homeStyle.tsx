import {colors} from 'colors';
import {StyleSheet} from 'react-native';
import {normalize} from 'utils/normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colors.white,
  },
  containerHeader: {
    flex: 1,
    padding: normalize(10),
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  viewImage: {
    flex: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: normalize(10),
  },
  viewMenu: {
    flex: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: normalize(10),
  },
  textFormat: {
    color: colors.titleText,
    fontSize: normalize(16),
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 28,
  },
});
