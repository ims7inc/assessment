/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginComopnent from './app/Login/LoginComponent';
import DashboardComponent from './app/Dashboard/DashboardComponent';
import TransactionComponent from './app/AccountSelection/AcountSelection';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginComopnent},
  Dashboard: {screen: DashboardComponent},
  Transaction: {screen: TransactionComponent}
});

const App = createAppContainer(MainNavigator);

export default App;
