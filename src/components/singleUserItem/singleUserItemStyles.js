import {
  StyleSheet,
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../helpers/Responsive';
import { Colors } from '../../helpers/colors';
const styles = StyleSheet.create({
  user: {
    paddingHorizontal: responsiveWidth(5),
    width: responsiveWidth(100),
    flexDirection: 'row',
    alignItems: 'center'
  },
  userProfile: {
    justifyContent: 'center'
  },
  image: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(8),
  },
  name: {
    color: Colors.BLACK,
    fontSize: responsiveFontSize(2.0),
    paddingLeft: responsiveWidth(4),
  },
  email: {
    color: Colors.THEME_COLOR,
    fontSize: responsiveFontSize(1.8),
    paddingLeft: responsiveWidth(4),
  },
})

export default styles;