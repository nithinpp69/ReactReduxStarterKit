import {
  StyleSheet,
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../../helpers/Responsive';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolBar: {
    alignItems: 'center',
    width: responsiveWidth(100),
    paddingTop: responsiveWidth(5),
    paddingBottom: responsiveWidth(5),
    marginBottom: responsiveWidth(5),
    borderWidth: 0,
    borderRadius: 0,
    borderColor: '#ddd',
    shadowColor: '#ddd',
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 1,
    backgroundColor: '#b30059',
    color: 'white'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    // paddingHorizontal: responsiveWidth(5),
  },
  userResults: {
    // paddingTop: responsiveWidth(5),
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  ItemSeparator: {
    width: responsiveWidth(100) - responsiveWidth(10),
    borderWidth: 0.2,
    borderColor: '#3d3e3e',
    margin: responsiveWidth(5)
  }
})

export default styles;