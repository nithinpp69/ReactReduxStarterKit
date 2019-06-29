import React, { Component } from 'react';
import { SafeAreaView, FlatList, View, Text, StatusBar, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../actions/index";
import { Strings } from '../../../helpers/strings';
import styles from '../style/loginStyle';
import { Header } from 'react-navigation';
import TextField from '../../../components/textField/TextField';
import { Colors } from '../../../helpers/colors';
import { emailvalidation } from '../../../helpers/validation';
import { responsiveWidth } from '../../../helpers/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      autovalidate: false,
      errors: {},
    };
  }

  // static navigationOptions = {
  //   header: null,
  // }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Login',
    };
  };

  isValid = () => {
    var letters = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    var numbers = /^\d+$/;
    var alphaNumeric = /^[a-zA-Z0-9]*$/;
    this.setState({
      email: this.state.email.trim().replace(/\s\s+/g, ' '),
      password: this.state.password.trim().replace(/\s\s+/g, ' '),
    }, () => {
    })
    let errors = {};
    let valid = true;
    if (this.state.email == "") {
      valid = false;
      errors.email = 'Email is required'
    }
    if (this.state.password == "") {
      valid = false;
      errors.password = 'Password is required'
    }
    if (this.state.email != "") {
      if (!emailvalidation(this.state.email)) {
        valid = false;
        errors.email = 'Enter a valid email'
      }
    }
    this.setState({
      errors: errors
    })
    return valid;
  }

  handleLogin() {
    this.setState({
      autovalidate: true
    })
    if (this.isValid())
      this.props.navigation.navigate('Application')
  }

  render() {
    const { autovalidate } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={Colors.THEME_COLOR}
        />
        <View style={styles.contentContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={true}
            keyboardShouldPersistTaps='always'
            removeClippedSubviews={false}
          >
            <TextField
              placeholder={'Your email address *'}
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              reference={(input) => {
                this.email = input;
              }}
              keyboardType={'email-address'}
              onSubmitEditing={() => {
                this.password.focus()
              }}
              onBlur={() => {
                if (autovalidate) this.isValid()
              }}
              maxLength={25}
              error={this.state.errors['email']}
            />
            <TextField
              placeholder={'Your password *'}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              reference={(input) => {
                this.password = input;
              }}
              onSubmitEditing={() => {
              }}
              onBlur={() => {
                alert('hello')
                if (autovalidate) this.isValid()
              }}
              secureTextEntry={true}
              maxLength={25}
              error={this.state.errors['password']}
            />
            <TouchableOpacity onPress={() => { this.handleLogin() }} style={styles.loginButton} activeOpacity={0.8}>
              <Text style={styles.loginButtonText}>{Strings.LoginScreen.loginButtonText}</Text>
            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
