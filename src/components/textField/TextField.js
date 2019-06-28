import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../helpers/Responsive';
import { Colors } from '../../helpers/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './TextFieldStyle';
/**
 * Custom input component used in the application. 
 */
export default class TextField extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      inFocus: false,
      showErrorText: false
    }
  }
  render() {
    const {
      labelText,
      onChangeText,
      keyboardType,
      autoCapitalize,
      reference,
      onSubmitEditing,
      maxLength,
      value,
      onPress,
      style,
      placeholder,
      secureTextEntry,
      onFocus,
      error,
      width
    } = this.props;
    const {
      showErrorText
    } = this.state;
    return (
      <View
        style={{
          borderColor: error ? Colors.RED : Colors.LIGHTER_GREY,
          borderWidth: (this.state.inFocus) ? 2 : 1,
          backgroundColor: Colors.LIGHTER_GREY,
          borderRadius: responsiveWidth(2),
          flexDirection: 'row',
          alignItems: 'center',
          height: responsiveHeight(6),
          marginVertical: responsiveWidth(5),
        }}>
        <TextInput
          style={{
            flex: 1,
            paddingHorizontal: responsiveWidth(2),
            color: 'rgba(0,0,0,0.80)',
            height: responsiveHeight(6),
            fontSize: responsiveFontSize(1.3),
          }}
          placeholderTextColor={Colors.LIGHT_GREY}
          ref={reference}
          label={labelText}
          value={!showErrorText ? value : ''}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          keyboardType={keyboardType == null ? 'default' : keyboardType}
          autoCapitalize={autoCapitalize == null ? 'none' : autoCapitalize}
          maxLength={maxLength}
          onSubmitEditing={onSubmitEditing}
          placeholder={!showErrorText ? placeholder : ''}
          on={() => this.setState({ inFocus: true })}
          onBlur={() => this.setState({
            inFocus: false
          })}
          numberOfLines={1}
          onFocus={() => {
            onFocus
            this.setState({ inFocus: true })
          }}>
        </TextInput>
        {
          error && (
            <TouchableOpacity activeOpacity={0.9} style={styles.errorInfo} onPress={() => this.setState({ showErrorText: true })}>
              <Ionicons name='ios-information-circle-outline' color={Colors.RED} size={responsiveWidth(6)} />
            </TouchableOpacity>
          )
        }
        {
          showErrorText && (
            <TouchableOpacity style={styles.errorMasterWindow} activeOpacity={1.0} onPress={() => this.setState({ showErrorText: false })}>
              <View style={styles.errorWindow}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            </TouchableOpacity>
          )
        }
      </View>
    );
  }
}