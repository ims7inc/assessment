import React from 'react';
import {View, ImageBackground, Dimensions} from 'react-native';
import TransferAcountType from './TransferAcountType';
import ConfirmAcount from './ConfirmAcount';
import TransactionStatus from './TransactionStatus';
import ShowModal from './Modal';

const {width, height} = Dimensions.get('window');

class TrtansactionComponent extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('header'),
      headerStyle: {
        backgroundColor: '#384080',
      },
      headerTintColor: '#fff'
    };
  };
  constructor() {
    super();
    this.state = {
      amount: '0',
      closeButtons: false,
      openmodal: false,
      selectedFromAcount: {},
      selectedToAcount: {},
      accountType: '',
      reference: '',
      todayButton: true,
      laterButton: '',
      confirmState: false,
      transactionDone: false,
    };
  }

  onPressbutton = item => {
    let {amount} = this.state;
    if (item !== 'X' && item !== 'Ok') {
      if (amount == '0') {
        amount = '';
      }
      this.setState({
        amount: amount + item,
      });
    } else if (item === 'X') {
      this.setState({
        amount: '0',
      });
    } else {
      this.setState({
        closeButtons: true,
      });
    }
  };

  cancelPress = () => {
    this.setState({
      closeButtons: false,
    });
  };

  changeToday = () => {
    this.setState({
      todayButton: true,
      laterButton: false,
    });
  };

  changeLater = () => {
    this.setState({
      todayButton: false,
      laterButton: true,
    });
  };

  preoccedTransaction = () => {
    this.setState({
      confirmState: true,
    });
  };

  openModal = (accountType = undefined) => {
    if (accountType == 'from') {
      this.setState({
        openmodal: true,
        accountType,
      });
    } else if (accountType == 'to') {
      this.setState({
        openmodal: true,
        accountType,
      });
    } else {
      this.setState({
        openmodal: true,
      });
    }
  };
  closeModal = () => {
    this.setState({
      openmodal: false,
    });
  };

  selectedAccount = selectedAccount => {
    const {accountType} = this.state;
    if (accountType === 'from') {
      this.setState({
        selectedFromAcount: selectedAccount,
      });
    } else {
      this.setState({
        selectedToAcount: selectedAccount,
      });
    }
  };

  onChangeReference = text => {
    this.setState({
      reference: text,
    });
  };

  cancelConfirm = () => {
    this.setState({
      confirmState: false,
    });
  }
  confirmTransaction = () => {
    this.setState({
      transactionDone: true,
    });
  };

  render() {
    const {
      amount,
      closeButtons,
      openmodal,
      selectedFromAcount,
      selectedToAcount,
      todayButton,
      laterButton,
      confirmState,
      reference,
      transactionDone,
    } = this.state;
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          style={{height, width}}
          source={require('../assets/bgvTest.jpeg')}>
          {!confirmState && (
            <TransferAcountType
              amount={amount}
              onPressbutton={this.onPressbutton}
              closeButtons={closeButtons}
              cancelPress={this.cancelPress}
              openModal={this.openModal}
              selectedFromAcount={selectedFromAcount}
              selectedToAcount={selectedToAcount}
              changeToday={this.changeToday}
              changeLater={this.changeLater}
              todayButton={todayButton}
              laterButton={laterButton}
              preoccedTransaction={this.preoccedTransaction}
              onChangeReference={this.onChangeReference}
            />
          )}

          {confirmState && !transactionDone && (
            <ConfirmAcount
              selectedFromAcount={selectedFromAcount}
              selectedToAcount={selectedToAcount}
              reference={reference}
              amount={amount}
              cancelConfirm={this.cancelConfirm}
              confirmTransaction={this.confirmTransaction}
            />
          )}

          {transactionDone && <TransactionStatus {...this.props} />}
        </ImageBackground>
        <ShowModal
          selectedAccount={this.selectedAccount}
          closeModal={this.closeModal}
          openmodal={openmodal}
        />
      </View>
    );
  }
}

export default TrtansactionComponent;
