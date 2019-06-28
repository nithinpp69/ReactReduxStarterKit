import {
  StyleSheet,
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../helpers/Responsive';
import { Colors } from '../../helpers/colors';
const styles = StyleSheet.create({
  errorInfo: {
    paddingHorizontal: responsiveWidth(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMasterWindow: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
    ...StyleSheet.absoluteFillObject,
  },
  errorWindow: {

  },
  errorText: {
    color: Colors.RED,
    paddingLeft: responsiveWidth(2),
  },
  labelTextStyle: {
    fontWeight: '400',
    fontSize: responsiveFontSize(1.9),
    paddingHorizontal: responsiveWidth(12),
    color: Colors.WHITE,
  },
})

export default styles;