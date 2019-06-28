/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store/store'

export default class ReactReduxStarterKit extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider >
    );
  }
}