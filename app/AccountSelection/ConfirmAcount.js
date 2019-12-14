import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class ConfirmAcount extends React.Component {
  render() {
    const {
      selectedFromAcount,
      selectedToAcount,
      reference,
      amount,
      confirmTransaction,
      cancelConfirm,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.accountAlign}>
          <View style={styles.fromBlock}>
            <View style={styles.sectionBlock}>
              <Text style={styles.accountText}>From Account</Text>
            </View>
            <View style={styles.sectionBlock}>
              <Text style={styles.valueText}>
                {selectedFromAcount.accountType} Account{' '}
                {selectedFromAcount.accountNumber}
              </Text>
            </View>
          </View>
          <View style={styles.heading}>
            <View style={styles.sectionBlock}>
              <Text style={styles.accountText}>Transfer To</Text>
            </View>
            <View style={styles.sectionBlock}>
              <Text style={styles.valueText}>
                {selectedToAcount.accountType} Account{' '}
                {selectedToAcount.accountNumber}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.transactionDetails}>
          <View style={styles.heading}>
            <View style={styles.sectionBlock}>
              <Text style={styles.accountText}>When</Text>
            </View>
            <View style={styles.sectionBlock}>
              <Text style={styles.valueText}>{'1 May 2017'}</Text>
            </View>
          </View>
          <View style={styles.heading}>
            <View style={styles.sectionBlock}>
              <Text style={styles.accountText}>Amount</Text>
            </View>
            <View style={styles.sectionBlock}>
              <Text style={styles.valueText}>RM{amount}.00</Text>
            </View>
          </View>

          <View style={styles.heading}>
            <View style={styles.sectionBlock}>
              <Text style={styles.accountText}>Recepitance Reference</Text>
            </View>
            <View style={styles.sectionBlock}>
              <Text style={styles.valueText}>{reference}</Text>
            </View>
          </View>
          <View style={styles.heading}>
            <View style={styles.sectionBlock}>
              <Text style={styles.accountText}>Other Payment</Text>
            </View>
            <View style={styles.sectionBlock}>
              <Text style={styles.valueText}>N/A</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonSection}>
          <View style={styles.buttonBlock}>
            <TouchableOpacity
              onPress={cancelConfirm}
              style={{felx: 1, width: 150, backgroundColor: '#fdfdfd'}}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={confirmTransaction}
              style={{felx: 1, width: 150, backgroundColor: 'green'}}>
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {marginTop: 60, flex: 1},
  accountAlign: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(256,256,256,0.1)',
    borderWidth: 1,
    borderColor: '#fff',
  },
  fromBlock: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#dcdcdc',
  },
  sectionBlock: { flex: 1, justifyContent: 'center' },
  accountText: { fontWeight: '700', paddingLeft: 20 },
  valueText: { color: '#fff', paddingLeft: 20 },
  heading: {flexDirection: 'row', height: 50, justifyContent: 'center'},
  transactionDetails: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(256,256,256,0.1)',
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 20,
  },
  buttonSection: {flex: 1, justifyContent: 'flex-end', marginBottom: 150},
  buttonBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  cancelText: {
    paddingTop: 12,
    paddingBottom: 12,
    textAlign: 'center',
  },
  confirmText: {
    paddingTop: 12,
    paddingBottom: 12,
    textAlign: 'center',
    color: '#fff',
  },
});
export default ConfirmAcount;
