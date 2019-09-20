import React from 'react'
import { ScrollView, View, Text, TouchableHighlight, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Modal from 'react-native-modalbox';
import { MenuContext, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Icon, Button } from 'react-native-elements';


var screen = Dimensions.get('window');
var satisfaccion = 0;

class graciascambiapuntos extends React.Component {

    static navigationOptions = {

        title: 'Ayuda',
        headerStyle: {
            backgroundColor: "#fff"
        },
        headerTintColor: "#000",
        headerTitleStyle: {
            fontWeight: "bold"
        }

    }

    constructor(props) {
        super(props);
    }

    state = {
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }



    render() {

        const { navigation } = this.props;
        const viaje = navigation.getParam('viaje');

        return (
            <View style={{ paddingTop: 50, flex: 1 }}>
                <View style={{ marginLeft: 15, marginRight: 15 }}>

                    <View style={{ marginTop: 30 }} >
                        <Icon
                            name='check-circle'
                            type='FontAwesome5'
                            size={140}
                        />
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }} >
                            Gracias por tu calificacion
                    </Text>
                    </View>
                    <View style={{ marginTop: 15, marginBottom: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}>
                            Tus comentarios son una contribucion fundamental para nuestra comunidad,
                            ya que nos ayudan a garantizar una experiencia de calidad para todos
                    </Text>
                    </View>

                    <Button color='#c5c5c5' title='Listo' onPress={() => this.refs.modal.open()} />

                </View>

                <Modal position={'bottom'} style={styles.modal} ref={"modal"}>
                    <View>
                        <Text style={{ marginBottom: 20 }} >¿Que tan satisfecho estas con la ayuda que recibiste?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={this.satisfaccion=1, () => this.props.navigation.navigate("Gracias", { viaje, satisfaccion })} >
                                    <Icon
                                        name='emoji-happy'
                                        type='entypo'
                                    />
                                    <Text>Satisfecho</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={this.satisfaccion=2, () => this.props.navigation.navigate("Gracias", { viaje, satisfaccion })} >
                                    <Icon
                                        name='emoji-neutral'
                                        type='entypo'
                                    />
                                    <Text>Indiferente</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={this.satisfaccion=3, () => this.props.navigation.navigate("Gracias", { viaje, satisfaccion })} >
                                    <Icon
                                        name='emoji-sad'
                                        type='entypo'
                                    />
                                    <Text>Insatisfecho</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        )
    }
}

let styles = StyleSheet.create({
    modal: {
        width: screen.width,
        backgroundColor: '#dbdbdb',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150
    },
    texto: {
        textAlignVertical: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#bababa'

    }
})

export { graciascambiapuntos }
