import React, { Component } from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../actions/index";
import styles from '../style/detailsScreenStyle';
import { Colors } from '../../../helpers/colors';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.state.params.user || {}
    };
  }


  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.user.name.first.toUpperCase(),
      headerRight: (
        <View />
      )
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={Colors.THEME_COLOR}
        />
        <View style={styles.contentContainer}>
          <Text> DetailsScreen </Text>
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
