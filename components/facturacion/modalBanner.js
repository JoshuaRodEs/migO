import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableOpacity, View, StyleSheet, deviceWidth } from 'react-native';


class BannerModal extends React.Component {

    // _showModal: () => this.setState({ modalVisible: true }),

    // _hideModal: () => this.setState({ modalVisible: false }),

    render() {
      return (
        <View style={{ flex: 1 }}>
          <Modal hasBackdrop={false} style= {{position: 'absolute'}} isVisible={this.state.visibleModal === 'bottom'} >
          <View style={{ marginTop: 10 }}>
                        <Image

                            style={styles.imagen}
                        />
                    </View>
          </Modal>
        </View>
      )
    }
}

let styles = StyleSheet.create({
    imagen: {
        width: deviceWidth,
        marginRight: 9,
        marginLeft: 9,
        height: 150,
    }
})

module.exports = BannerModal;