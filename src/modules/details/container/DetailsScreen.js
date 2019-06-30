import React, { Component } from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StatusBar
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../actions/index";
import styles from '../style/detailsScreenStyle';
import { Colors } from '../../../helpers/colors';
import moment from 'moment';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.state.params.user || {}
    };
    console.log(this.props.navigation.state.params.user)
  }


  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.user.name.first.toUpperCase(),
      title: '',
      headerRight: (
        <View />
      ),
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        backgroundColor: Colors.THEME_COLOR,
      },
    };
  };

  ProfileItem(item, value) {
    return (
      <View style={styles.profileDetailsSingleItem}>
        <Text style={styles.profileDetailsItem}>{item}</Text>
        <Text style={styles.profileDetailsValue}>{value}</Text>
      </View>
    )
  }

  render() {
    const { user } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={Colors.THEME_COLOR}
        />
        <View style={styles.contentContainer}>
          <View style={styles.profileInfo}>
            <Image
              resizeMode={'cover'}
              defaultSource={require('../../../../assets/images/profile_image_placeholder.png')}
              source={{ uri: user.picture.large }} style={styles.image}
            />
            <Text style={styles.name}>{user.name.first.toUpperCase()} {user.name.last.toUpperCase()}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
          <ScrollView
            style={styles.profileDetailsContainer}
            showsVerticalScrollIndicator={false}
          >
            {this.ProfileItem('Gender', user.gender)}
            {this.ProfileItem('Date of birth', moment(user.dob.date).format('LL'))}
            {this.ProfileItem('Age', user.dob.age)}
            {this.ProfileItem('Phone', user.cell)}
            {this.ProfileItem('State', user.location.state)}
            {this.ProfileItem('City', user.location.city)}
            {this.ProfileItem('Street', user.location.street)}
            {this.ProfileItem('Post code', user.location.postcode)}
            {this.ProfileItem('Active since', moment(user.registered.date).format('LL'))}
            {this.ProfileItem('Active Years', user.registered.age)}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
