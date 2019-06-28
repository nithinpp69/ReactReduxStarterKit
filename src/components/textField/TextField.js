import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../helpers/responsive';
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
      <View>
        <View style={[styles.textFieldContainer, { borderColor: error ? Colors.RED : Colors.LIGHTER_GREY, borderWidth: (this.state.inFocus) ? 2 : 1, }]}>
          <TextInput
            style={styles.textField}
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
              <View activeOpacity={0.9} style={styles.errorInfo}>
                <Ionicons name='ios-information-circle-outline' color={Colors.RED} size={responsiveWidth(6)} />
              </View>
            )
          }
        </View>
        <View style={styles.errorWindow}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </View>
    );
  }
}