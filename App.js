/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { store, persistor } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'

export default class ReactReduxStarterKit extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider >
    );
  }
}