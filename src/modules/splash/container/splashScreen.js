import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../actions/index";
import SplashScreen from 'react-native-splash-screen'

class splashScreenUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.navigation.navigate('Authentication');
    // this.getSavedBookmarks();
  }

  getSavedBookmarks = async () => {
    const existingBookmarks = await AsyncStorage.getItem('bookmarks');
    this.props.actions.getSavedBookmarks(JSON.parse(existingBookmarks));
    this.props.navigation.navigate('Application');
  }

  componentWillUnmount() {
    if (Platform.OS == 'ios')
      SplashScreen.hide();
  }

  render() {
    return null;
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

export default connect(mapStateToProps, mapDispatchToProps)(splashScreenUI);
