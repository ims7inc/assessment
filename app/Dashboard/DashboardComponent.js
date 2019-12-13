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

var renderContent = [
  {
    accountType: 'own',
    text: 'Own Account Transfer',
  },
  {
    accountType: 'other',
    text: 'Other Accounts Transfer',
  },
  {
    accountType: 'telegraphic',
    text: 'Telegraphic Transfer',
  },
  {
    accountType: 'manage',
    text: 'Manage Transfer',
  },
];

class DashboardComponent extends React.Component {
  getAccountIcon = type => {
    switch (type) {
      case 'own':
        return require('../assets/own.png');
      case 'other':
        return require('../assets/other.png');
      case 'telegraphic':
        return require('../assets/telegraphic.png');
      case 'manage':
        return require('../assets/own.png');
      default:
        return require('../assets/own.png');
    }
  };

  renderTransferMode = (item, key) => (
    <TouchableOpacity
      key={key}
      style={{
        width: 150,
        alignItems: 'center',
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
      }}>
      <Image source={this.getAccountIcon(item.accountType)} />
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          paddingTop: 5,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10,
        }}>
        {item.text}{' '}
      </Text>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('../assets/bgvTest.jpeg')}>
          <Text
            style={{
              marginTop: 15,
              textAlign: 'center',
              color: '#000',
              fontSize: 22,
            }}>
            Transfer
          </Text>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                paddingLeft: '20%',
                paddingRight: '20%',
                color: '#e0ae22',
                fontSize: 28,
              }}>
              What would you like to do?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}>
              {renderContent.map((item, key) =>
                this.renderTransferMode(item, key),
              )}
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default DashboardComponent;
