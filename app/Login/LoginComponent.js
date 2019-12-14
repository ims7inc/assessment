import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';

class LoginComponent extends React.Component {
  static navigationOptions = {
    header: null,
    headerVisible: false,
  }
  navigateDashboard = () => {
    const { navigation } = this.props;
    navigation.navigate('Dashboard')
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.background}
            source={require('../assets/bgvTest.jpeg')}>
            <View style={styles.logo}>
              <Image
                style={styles.username}
                source={require('../assets/username.png')}
              />
            </View>
            <View style={styles.inputSection}>
              <View style={styles.textInputs}>
                <TextInput
                  placeholder="Username"
                  placeholderTextColor={'#fff'}
                  style={styles.usernameText}
                />
                <TextInput
                  placeholder="password"
                  placeholderTextColor={'#fff'}
                  style={styles.password}
                  secureTextEntry
                />
              </View>
            </View>
            <View style={styles.btnContainar}>
              <TouchableOpacity onPress={this.navigateDashboard} style={styles.loginBtn}>
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {width: '100%', height: '100%'},
  logo: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  username: {width: 100, height: 100},
  inputSection: {flex: 1, alignItems: 'center'},
  textInputs: {width: '80%', justifyContent: 'center'},
  usernameText: {
    borderBottomWidth: 2,
    paddingTop: 8,
    paddingBottom: 18,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    textAlign: 'center',
    color: '#fff',
    borderBottomColor: '#fff',
    fontSize: 18,
  },
  password: {
    borderBottomWidth: 2,
    paddingTop: 8,
    paddingBottom: 18,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 50,
    textAlign: 'center',
    color: '#fff',
    borderBottomColor: '#fff',
    fontSize: 18,
  },
  btnContainar: {flex: 0.6, justifyContent: 'center'},
  loginBtn: {
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'green',
  },
  btnText: {textAlign: 'center', color: '#fff'},
});

export default LoginComponent;
