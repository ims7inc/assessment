/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginComopnent from './app/Login/LoginComponent';
import DashboardComponent from './app/Dashboard/DashboardComponent';
import AccountSelection from './app/AccountSelection/AcountSelection';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AccountSelection);
