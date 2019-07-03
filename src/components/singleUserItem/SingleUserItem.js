import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../helpers/responsive';
import styles from './singleUserItemStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Transition } from 'react-navigation-fluid-transitions';
export default class SingleUserItem extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {
      onPress,
      itemIndex,
      imageURL,
      firstName,
      lastName,
      email,
    } = this.props;
    let { enabled } = this.state;
    return (
      <TouchableOpacity style={styles.user} activeOpacity={1.0} onPress={onPress}>
        <Transition shared={email}>
          <Image
            resizeMode={'cover'}
            defaultSource={require('../../../assets/images/profile_image_placeholder.png')}
            source={{ uri: imageURL }} style={styles.image}
          />
        </Transition>
        <View>
          <Text style={styles.name}>{firstName} <Text>{lastName}</Text></Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}