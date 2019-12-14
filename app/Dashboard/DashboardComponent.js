import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
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
  static navigationOptions = {
    header: null,
    headerVisible: false,
  }

  navigateTransaction = () => {
    const { navigation } = this.props;
    navigation.navigate('Transaction', { header: 'Own Account Transfer' })
  }

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
    <TouchableOpacity onPress={this.navigateTransaction} key={key} style={styles.tileSection}>
      <Image source={this.getAccountIcon(item.accountType)} />
      <Text style={styles.tileText}>{item.text} </Text>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require('../assets/bgvTest.jpeg')}>
          <Text style={styles.transferText}>Transfer</Text>
          <View style={styles.likeToDo}>
            <Text style={styles.heading}>What would you like to do?</Text>
            <View style={styles.contentBlock}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {height: '100%', width: '100%'},
  transferText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    marginTop: 40
  },
  likeToDo: {flex: 1, justifyContent: 'center'},
  heading: {
    textAlign: 'center',
    paddingLeft: '20%',
    paddingRight: '20%',
    color: '#e0ae22',
    fontSize: 28,
  },
  contentBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  tileSection: {
    width: 150,
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  tileText: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});

export default DashboardComponent;
