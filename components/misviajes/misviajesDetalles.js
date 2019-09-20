import React from 'react'
import { View, Text, ScrollView, StyleSheet, deviceWidth, ImageResizeMode } from "react-native";
import { Image, Divider, Rating, Button } from "react-native-elements";
import { TabNavigator } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavDetallesAR } from "./navDetalles";



/////////////////VARIABLES/PARAMETROS//////////////////////////////////////

const conductor = {
    nombre: 'Jose Ramon Ramirez',
    fotoPerfil: 'https://i.pinimg.com/474x/c8/c2/d7/c8c2d75658ad631101cfbfe51eb6d26f--cristiano-rinaldo-poloshirt.jpg',
    descripcion: 'Padre de Familia, Respetuoso y atento',
    idiomas: 'Hablo Ingles y Español',
    residencia: 'Colima',
    puntuacion: 4.85,
    tiempoenservicio: 11

}
let nombreC = conductor.nombre.split(' ')[0]


//-----------CLASES----------------------------



class misviajesDetalles extends React.Component {


    static navigationOptions = {

        title: 'Detalles del viaje',
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
        this.state = {};
    }

    render() {

        const { navigation } = this.props;
        const viajeElegido = navigation.getParam('viajeT');

        return (
            <ScrollView>
                <View>
                    {/* Info y direccion del viaje seleccionado----------------------------------------------*/}
                    <View style={styles.vistas, { marginTop: 10 }}>
                        <Image
                            source={{ uri: viajeElegido.recorrido }}
                            style={styles.imagen}
                        />
                    </View>
                    <Divider style={{ backgroundColor: '#bababa' }} />
                    <View>
                        <View style={styles.vistas}>
                            <Text>{viajeElegido.fechaUso}</Text>
                            <Text>$ {viajeElegido.montoViaje}</Text>
                        </View>
                        <View style={styles.vistas}>
                            <Text>{viajeElegido.modeloTaxi}</Text>
                            <Text>{viajeElegido.formapago}</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text>*{viajeElegido.origen}</Text>
                            <Text>*{viajeElegido.destino}</Text>
                        </View>
                    </View>
                    <Divider style={{ backgroundColor: '#fff', height: 14 }} />
                    <Divider style={{ backgroundColor: '#bababa' }} />
                    <Divider style={{ backgroundColor: '#fff', height: 10 }} />
                    <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("PerfilConductor", { conductor })} style={styles.vistas} >
                            <Image
                                source={{ uri: conductor.fotoPerfil }}
                                style={{ width: 50, height: 50 }}
                            />
                            <Text style={{ textAlignVertical: 'center' }} >    Calificaste a {nombreC}</Text>
                        </TouchableOpacity>
                        <Rating
                            style={{ justifyContent: 'center' }}
                            readonly
                            imageSize={19}
                            startingValue={viajeElegido.puntuacion}
                        />
                    </View>
                    <Divider style={{ backgroundColor: '#fff', height: 10 }} />
                    <Text style={{ fontWeight: '400', fontSize: 17 }}>
                        ¿Necesitas ayuda con el viaje?
                </Text>
                    <Divider style={{ backgroundColor: '#fff', height: 10 }} />

                    <View style={{ marginBottom: 5, width: deviceWidth, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("CambiaPuntos", { viajeElegido})}
                            style={{ backgroundColor: '#d1d1d1', marginRight: 4 }}>
                            <View style={{ marginLeft: 5, marginRight: 5 }}>
                                <Text>Como cambiar la calificacion</Text>
                                <Text>de estrellas</Text>
                                <Text>            </Text>
                                <Text>Quiero cambiar la calificacion</Text>
                                <Text>que le di a un conductor</Text>
                                <Text>            </Text>
                                <Text>Editar calificacion</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#cccccc', marginLeft: 4 }}>
                            <View style={{ marginLeft: 5, marginRight: 5 }}>

                                <Text>Como cambiar el metodo de </Text>
                                <Text>pago            </Text>
                                <Text>Quiero cambiar el metodo de</Text>
                                <Text>pago para este viaje</Text>
                                <Text>            </Text>
                                <Text>            </Text>
                                <Text>Editar pago</Text>

                            </View>

                        </TouchableOpacity>
                    </View>
                </View>

                <NavDetallesAR />

            </ScrollView>
        )
    }
}



let styles = StyleSheet.create({
    recibo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlignVertical: 'center'
    },
    texto: {
        textAlignVertical: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#bababa'

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 45,
        width: deviceWidth,
        marginBottom: 2,
        backgroundColor: '#bababa',

    },
    imagen: {
        width: deviceWidth,
        marginRight: 9,
        marginLeft: 9,
        height: 200,
        aspectRatio: 1.5,
        resizeMode: 'stretch'
    },
    vistas: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export { misviajesDetalles }
//export default createAppContainer(detallesviaje);
