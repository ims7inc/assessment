import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const accountDetails = [
    {
      accountType: 'Savings',
      availableBalace: '99,980',
      accountNumber: 1234567,
    },
    {
      accountType: 'Current',
      availableBalace: '79,980',
      accountNumber: 654385683,
    },
  ];

class ShowModal extends React.Component {
    selectAcount = (item) => {
        const {selectedAccount, closeModal} = this.props;
        selectedAccount(item);
        closeModal();
    }

    renderAcounts = (item, key) => (
        <TouchableOpacity
          onPress={() => this.selectAcount(item)}
          style={{
            flex: 1,
            marginTop: 10,
            borderBottomWidth: 1,
            marginLeft: 15,
            marginRight: 15,
          }}
          key={key}>
          <Text style={{ marginTop: 4, paddingLeft: 15 }}>
            {item.accountType} Account - {item.accountNumber}
          </Text>
          <Text style={{ marginTop: 5, paddingLeft: 15 }}>
            Available Balance: RM{item.availableBalace}
          </Text>
        </TouchableOpacity>
      );
    render() {
        const {closeModal, openmodal} = this.props;
        return(
            <Modal visible={openmodal} transparent>
          <View
            style={{
              justifyContent: 'flex-end',
              height,
              width,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                height: 180,
                backgroundColor: '#fff',
                marginLeft: 40,
                marginRight: 40,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 44,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ddd',
                }}>
                <Text style={{ textAlign: 'center', flex: 1 }}>
                  Change Account
                </Text>
                <TouchableOpacity onPress={closeModal} style={{ alignItems: 'flex-end', padding: 10 }}>
                  <Image
                    style={{ justifyContent: 'flex-end', width: 15, height: 15 }}
                    source={require('../assets/close.png')}
                  />
                </TouchableOpacity>
              </View>
              {accountDetails.map((item, key) => this.renderAcounts(item, key))}
            </View>
          </View>
        </Modal>
        )
    }
}
export default ShowModal;
