import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

class TransactionStatus extends React.Component {
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
      <View style={styles.container}>
        <View style={styles.verifiedBlok}>
          <Image
            style={styles.verifiedImg}
            source={require('../assets/verified.png')}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.confirmBlock}>
            <View style={styles.opacity}>
              <Text style={styles.doneText}>You're done!</Text>
              <Text style={styles.refId}>Ref Id 12376534723</Text>
            </View>
          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity style={styles.searchTile}>
              <Image
                style={styles.imageStyles}
                source={require('../assets/search.png')}
              />
              <Text style={styles.textStyles}>View Receipt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchTile}>
              <Image
                style={styles.imageStyles}
                source={require('../assets/email.png')}
              />
              <Text style={styles.textStyles}>View Receipt</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.doneBtnBlock}>
            <TouchableOpacity onPress={this.navigateDashboard} style={styles.doneBtn}>
              <Text style={styles.doneBtnText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  verifiedBlok: {justifyContent: 'flex-end', alignItems: 'center', flex: 0.6},
  verifiedImg: {width: 120, height: 120, tintColor: '#fff'},
  confirmBlock: {alignItems: 'center', marginTop: 20},
  opacity: {backgroundColor: 'rgba(256,256,256,0.1)'},
  doneText: {textAlign: 'center', color: '#fff', fontSize: 17},
  refId: {padding: 10, color: '#fff', fontSize: 15},
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  searchTile: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(256,256,256,0.2)',
    width: 130,
  },
  imageStyles: {tintColor: '#fff', alignSelf: 'center'},
  textStyles: {color: '#fff', textAlign: 'center'},
  doneBtnBlock: {flex: 1, justifyContent: 'flex-end'},
  doneBtn: {
    marginBottom: 150,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'green',
  },
  doneBtnText: {
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    color: '#fff',
  },
});

export default TransactionStatus;
