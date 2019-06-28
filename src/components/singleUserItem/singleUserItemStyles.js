import {
  StyleSheet,
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../helpers/Responsive';
const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    // width: responsiveWidth(100),
    marginLeft: responsiveWidth(5),
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
    fontSize: responsiveFontSize(2.0),
    color: '#000000',
    paddingLeft: responsiveWidth(4),
  },
  email: {
    fontSize: responsiveFontSize(1.8),
    color: '#3d3e3e',
    paddingLeft: responsiveWidth(4),
  },
})

export default styles;