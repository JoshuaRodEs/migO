import React from 'react'
import { View, Text, Alert, ScrollView, StyleSheet, deviceWidth, ImageResizeMode, TextStyle, Dimensions } from "react-native";
import { Image, Divider, Rating, Icon, Button,withBadge, Badge} from "react-native-elements";
import Modal from "react-native-modalbox";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

var screen = Dimensions.get('window');
const BadgedIcon = withBadge(1)(Icon)

class misviajesperfilconductor extends React.Component {


    static navigationOptions = {

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
        swipeToClose: false,
        sliderValue: 0.3
    };


    render() {

        const { navigation } = this.props;
        const chofer = navigation.getParam('conductor');

        return (
            <View style={{ flex: 1 }}>

                <View style={{ marginLeft: 15, marginRight: 15 }}>
                    <View style={{ marginTop: 40, marginBottom: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >

                        <TouchableOpacity onPress={() => this.refs.modal2.open()}>
                            <Image
                                source={{ uri: chofer.fotoPerfil }}
                                style={{ height: 110, width: 110 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <Text style={{ fontSize: 20, marginLeft: 7 }}>{chofer.nombre}</Text>
                        <MenuProvider style={{ flexDirection: "column", marginLeft:30 }}>
                            <Menu >

                                <MenuTrigger  >
                                    <TouchableOpacity >
                                        <Icon
                                            name='options'
                                            type='simple-line-icon'
                                        />

                                    </TouchableOpacity>
                                </MenuTrigger  >

                                <MenuOptions style={{ width:50, marginLeft:20}} >
                                    <MenuOption onSelect={() => this.refs.modal.open()} text='Reportar perfil' />
                                </MenuOptions>

                            </Menu>
                        </MenuProvider>
                    </View>


                    <View style={{ marginLeft: 7, flexDirection: 'row' }}>
                        <Icon
                            name='ios-hand'
                            type='ionicon' />
                        <Text> {chofer.descripcion}</Text>
                    </View>
                    <View style={{ marginLeft: 7, flexDirection: 'row' }}>
                        <Icon
                            name='translate'
                            type='material' />
                        <Text> {chofer.idiomas}</Text>
                    </View>
                    <View style={{ marginLeft: 7, flexDirection: 'row' }}>
                        <Icon
                            name='hotel'
                            type='material' />
                        <Text> {chofer.residencia}</Text>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                            <Text> {chofer.puntuacion} </Text>
                            <Text>    {chofer.tiempoenservicio}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text>Calificación</Text>
                            <Text>Dias</Text>
                        </View>
                    </View>
                    <Divider style={{ backgroundColor: '#e8e8e8', height: 1.5 }} />
                    <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 }} >Mis reconocimientos</Text>
                    <View style={styles.reconocimientos} >
                        <View style={{width:30}} >
                            <BadgedIcon
                                reverse
                                value='4'
                                name='thumb-up'
                                type='material-community'
                                color='#696969'
                            />
                            <Text>Excelente servicio</Text>
                        </View>
                        <View style={{width:30}} >
                            <Icon
                                reverse
                                name='map-marker'
                                type='material-community'
                                color='#696969'
                            />
                            <Text>Buena ruta</Text>
                        </View>
                        <View style={{width:30}}>
                            <Icon
                                reverse
                                name='emoticon-outline'
                                type='material-community'
                                color='#696969'
                            />
                            <Text>Amable</Text>
                        </View>
                        <View style={{width:30}}>
                            <Icon
                                reverse
                                name='message-text'
                                type='material-community'
                                color='#696969'
                            />
                            <Text>Buena platica</Text>
                        </View>
                        <View style={{width:30}}>
                            <Icon
                                reverse
                                name='shield-check'
                                type='material-community'
                                color='#696969'
                            />
                            <Text>Excelente servicio</Text>
                        </View>
                    </View>

                    <Divider style={{ backgroundColor: '#e8e8e8', height: 1.5 }} />
                    <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 }}>Logros</Text>
                    <Icon
                        reverse
                        name='trophy'
                        type='material-community'
                        color='#bababa'
                    />

                </View>

                <Modal  onClosed={ () => this.refs.modal1.open()} position={'bottom'} style={styles.modal} ref={"modal"}>
                    <View style={{ width: screen.width }} >

                        <View style={{ margin: 10 }}>
                            <Text onPress={() => this.refs.modal.close()} style={styles.titulo}>¿Porque denuncias este perfil?</Text>
                            <Text onPress={() => this.refs.modal.close()} style={styles.texto}>El vehiculo no era lo que esperaba</Text>
                            <Text onPress={() => this.refs.modal.close()} style={styles.texto}>Problema distinto</Text>
                            <Text onPress={() => this.refs.modal.close()} style={styles.texto}>Carro  se quedo sin gasolina</Text>
                            <Text onPress={() => this.refs.modal.close()} style={styles.texto}>¿Como facturar?</Text>
                            <Text onPress={() => this.refs.modal.close()} style={styles.texto}>Se me cobro un viaje que cancele </Text>
                            <Text onPress={() => this.refs.modal.close()} style={styles.texto}>Reportar un robo</Text>
                        </View>

                    </View>
                </Modal>
                <Modal position={'bottom'} style={styles.modal1} ref={"modal1"}>
                    <View style={{ width: screen.width }} >

                        <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Text style={styles.titulo}>Gracias por informarnos</Text>
                                <Icon
                                    name='check-circle'
                                    type='FontAwesome5'
                                    size={60}
                                    color='#6be653'
                                />

                            </View>

                            <Text >Revisaremos tus comentarios y tomaremos las medidas necesarias. Gracias por ayudarnos a mejorar la comunidad miGO</Text>
                            <Button
                                title='Listo'
                                onPress={() => this.refs.modal1.close()}
                            />
                        </View>

                    </View>
                </Modal>

                <Modal 
                isOpen={this.state.isOpen} 
                onClosed={() => this.setState({isOpen: false})} 
                style={{justifyContent: 'center', alignItems: 'center', height:370}} 
                position={"center"} 
                ref={"modal2"} >
                            <View style={{ height: 350, width: 350 }} >
                                <TouchableOpacity onPress={() => this.refs.modal2.close()}>
                                    <Image
                                        source={{ uri: chofer.fotoPerfil }}
                                        style={{ height: 330, width: 330 }}
                                    />
                                </TouchableOpacity>
                                <Button title="Volver" onPress={() => this.refs.modal2.close()}/>
                            </View>
                        </Modal>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    }, recibo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlignVertical: 'center'
    },
    reconocimientos: {
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    menuContent: {
        color: "#000",
        fontWeight: "bold",
        padding: 2,
        fontSize: 20
    },
    modal: {
        width: screen.width,
        backgroundColor: '#dbdbdb',
        justifyContent: 'center',
        alignItems: 'center',
        height: 450
    },
    modal1: {
        width: screen.width,
        backgroundColor: '#dbdbdb',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250
    },
    titulo: {
        fontSize: 22,
        fontWeight: '500',
        textAlignVertical: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bababa'

    },
    texto: {
        textAlignVertical: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#bababa'

    }
});

export { misviajesperfilconductor }
