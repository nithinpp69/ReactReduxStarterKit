import {
  StyleSheet,
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../helpers/Responsive';
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
    color: '#000000',
    fontSize: responsiveFontSize(2.0),
    paddingLeft: responsiveWidth(4),
  },
  email: {
    color: '#3d3e3e',
    fontSize: responsiveFontSize(1.8),
    paddingLeft: responsiveWidth(4),
  },
})

export default styles;