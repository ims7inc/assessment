import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';

class LoginComponent extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={require('../assets/bgvTest.jpeg')}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{tintColor: '#000', width: 100, height: 100}}
                source={require('../assets/username.png')}
              />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={{width: '80%', justifyContent: 'center'}}>
                <TextInput
                  placeholder="Username"
                  placeholderTextColor={'#fff'}
                  style={{
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
                  }}
                />
                <TextInput
                  placeholder="password"
                  placeholderTextColor={'#fff'}
                  style={{
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
                  }}
                  secureTextEntry
                />
              </View>
            </View>
            <View style={{flex: 0.6, justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  paddingTop: 15,
                  paddingBottom: 15,
                  marginLeft: 20,
                  marginRight: 20,
                  backgroundColor: 'green',
                }}>
                <Text style={{textAlign: 'center', color: '#fff'}}>Login</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}
export default LoginComponent;
