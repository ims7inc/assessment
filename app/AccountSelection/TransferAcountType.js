import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Switch,
} from 'react-native';

const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 0, 'Ok'];

class TransferAcountSelection extends React.Component {
  renderbutton = (item, key) => {
    const {onPressbutton} = this.props;
    return (
      <TouchableOpacity
        onPress={() => onPressbutton(item)}
        style={[
          styles.button,
          item === 'X' && {backgroundColor: '#fff'},
          item === 'Ok' && {backgroundColor: 'green'},
        ]}
        key={key}>
        <Text style={styles.buttonText}>{item}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    const {
      amount,
      cancelPress,
      closeButtons,
      openModal,
      selectedFromAcount,
      selectedToAcount,
      changeLater,
      changeToday,
      todayButton,
      laterButton,
      preoccedTransaction,
      onChangeReference,
    } = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={styles.containar}>
          <View>
            <Text style={styles.fromText}>From</Text>
            <TouchableOpacity
              onPress={() => openModal('from')}
              style={styles.fromBlock}>
              <Image
                style={[
                  selectedFromAcount.accountType && {height: 25, width: 25},
                ]}
                source={require('../assets/own.png')}
              />
              {selectedFromAcount.accountType && (
                <View>
                  <Text style={styles.fieldElement}>
                    {selectedFromAcount.accountType} Account
                  </Text>
                  <Text style={styles.fieldValue}>
                    {selectedFromAcount.accountNumber}
                  </Text>
                  <Text style={styles.fieldElement}>Availabel Balance</Text>
                  <Text style={styles.amountField}>
                    RM{selectedFromAcount.availableBalace}.00
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <Image
            style={{tintColor: '#fff', alignSelf: 'center'}}
            source={require('../assets/rightArrow.png')}
          />
          <View>
            <Text style={styles.fromText}>To</Text>
            <TouchableOpacity
              onPress={() => openModal('to')}
              style={styles.fromBlock}>
              <Image
                style={[
                  selectedToAcount.accountType && {height: 25, width: 25},
                ]}
                source={require('../assets/own.png')}
              />
              {selectedToAcount.accountType && (
                <View>
                  <Text style={styles.fieldElement}>
                    {selectedToAcount.accountType} Account
                  </Text>
                  <Text style={styles.fieldValue}>
                    {selectedToAcount.accountNumber}
                  </Text>
                  <Text style={styles.fieldValue}>Availabel Balance</Text>
                  <Text style={styles.amountField}>
                    RM{selectedToAcount.availableBalace}.00
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 2, marginTop: 30}}>
          <Text style={{textAlign: 'center', fontSize: 22, color: '#e0ae22'}}>
            {`RM${amount}.00`}
          </Text>

          {!closeButtons ? (
            <View style={styles.buttonsBlock}>
              {buttons.map((item, index) => this.renderbutton(item, index))}
            </View>
          ) : (
            <View style={{marginTop: 30}}>
              <View style={styles.referenceBlock}>
                <TextInput
                  onChangeText={onChangeReference}
                  style={styles.referenceField}
                  placeholder={'Recipt Reference'}
                  placeholderTextColor={'#fff'}
                />
                <TextInput
                  placeholderTextColor={'#fff'}
                  placeholder={'Other payment details'}
                  style={{height: 40, color: '#fff', paddingLeft: 7}}
                />
              </View>

              <View style={{marginTop: 40}}>
                <Text style={styles.whenHeading}>When</Text>
              </View>

              <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.TodayHeading}>Today</Text>
                  <Switch
                    value={todayButton}
                    onValueChange={changeToday}
                    style={styles.switchBar}
                  />
                </View>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <Text style={styles.TodayHeading}>Later</Text>
                  <Switch
                    value={laterButton}
                    onValueChange={changeLater}
                    style={styles.switchBar}
                  />
                </View>
                <View style={styles.buttonsBlockA}>
                  <TouchableOpacity
                    onPress={cancelPress}
                    style={{felx: 1, width: 150, backgroundColor: '#fdfdfd'}}>
                    <Text style={styles.cancelButton}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={preoccedTransaction}
                    style={{felx: 1, width: 150, backgroundColor: 'green'}}>
                    <Text style={styles.processButton}>Proceed</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  fromText: {
    color: '#fff',
    fontSize: 17,
    paddingBottom: 5,
  },
  fromBlock: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    flex: 1,
    width: 140,
    alignItems: 'center',
  },
  fieldElement: {textAlign: 'center', color: '#fff', marginTop: 10},
  fieldValue: {textAlign: 'center', color: '#fff', marginTop: 4},
  amountField: {textAlign: 'center', fontSize: 18, color: '#e0ae22'},
  buttonsBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingLeft: '20%',
    paddingRight: '20%',
    marginTop: 30,
  },
  referenceBlock: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(256,256,256,0.2)',
    borderWidth: 1,
    borderColor: '#fff',
  },
  referenceField: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    height: 40,
    paddingLeft: 7,
    color: '#fff',
  },
  whenHeading: {fontSize: 18, textAlign: 'center', color: '#fff'},
  TodayHeading: {flex: 1, marginLeft: 20, color: '#fff'},
  switchBar: {justifyContent: 'flex-end', marginRight: 20},
  buttonsBlockA: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  cancelButton: {
    paddingTop: 12,
    paddingBottom: 12,
    textAlign: 'center',
  },
  processButton: {
    paddingTop: 12,
    paddingBottom: 12,
    textAlign: 'center',
    color: '#fff',
  },

  button: {
    borderWidth: 1,
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 20,
    marginBottom: 20,
    justifyContent: 'center',
    borderColor: '#cdcdcd',
  },
  buttonText: {
    padding: 5,
    textAlign: 'center',
    fontSize: 16,
    color: '#cdcdcd',
  },
});

export default TransferAcountSelection;
