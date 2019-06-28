import {
  StyleSheet,
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../helpers/responsive';
import { Colors } from '../../helpers/colors';
const styles = StyleSheet.create({
  textFieldContainer:{
    backgroundColor: Colors.LIGHTER_GREY,
    borderRadius: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(6),
    marginVertical: responsiveWidth(5),
  },
  textField:{
    flex: 1,
    paddingHorizontal: responsiveWidth(2),
    color: 'rgba(0,0,0,0.80)',
    height: responsiveHeight(6),
    fontSize: responsiveFontSize(1.3),
  },
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
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  errorText: {
    color: Colors.RED,
  },
  labelTextStyle: {
    fontWeight: '400',
    fontSize: responsiveFontSize(1.9),
    paddingHorizontal: responsiveWidth(12),
    color: Colors.WHITE,
  },
})

export default styles;