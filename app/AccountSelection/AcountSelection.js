import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';

const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 0, 'Ok'];

class AcountSelection extends React.Component {

    renderbutton = (item, key) => (
        <TouchableOpacity style={{borderWidth: 1, borderRadius: 50, width: 50, height: 50, marginLeft: 20, marginBottom: 20, justifyContent: 'center', borderColor: '#cdcdcd'}} key={key}>
            <Text style={{padding: 5, textAlign: 'center', fontSize: 16, color: '#cdcdcd'}}>{item}</Text>
        </TouchableOpacity>
    )
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('../assets/bgvTest.jpeg')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}>
            <View>
              <Text style={{color: '#fff', fontSize: 17, paddingBottom: 5}}>
                From
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: '#fff',
                  flex: 1,
                  width: 140,
                  alignItems: 'center',
                }}>
                <Image source={require('../assets/own.png')} />
              </View>
            </View>
            <Image
              style={{tintColor: '#fff', alignSelf: 'center'}}
              source={require('../assets/rightArrow.png')}
            />
            <View style={{}}>
              <Text style={{color: '#fff', fontSize: 17, paddingBottom: 5}}>
                To
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#fff',
                  flex: 1,
                  justifyContent: 'center',
                  width: 140,
                  alignItems: 'center',
                }}>
                <Image source={require('../assets/own.png')} />
              </View>
            </View>
          </View>
          <View style={{flex: 2, marginTop: 30}}>
            <Text style={{textAlign: 'center', fontSize: 22, color: '#e0ae22'}}>
              RM0.00
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                paddingLeft: '20%',
                paddingRight: '20%',
                marginTop: 30
              }}>
              {buttons.map((item, index) => this.renderbutton(item, index))}
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default AcountSelection;
