import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Divider, Icon, Button, Card, Image, Rating, Header } from 'react-native-elements'

import { createAppContainer, } from "react-navigation";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { TouchableHighlight } from 'react-native-gesture-handler';


class ayuda extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ marginLeft: 10, marginRight:10 }}>
                <Text style={styles.texto}>Estuve involucrado en un accidente</Text>
                <Text style={styles.texto}>Revisar mis tarifas</Text>
                <Text style={styles.texto}>Articulos perdidos</Text>
                <Text style={styles.texto}>Comentarios sobre el conductor</Text>
                <Text style={styles.texto}>El vehiculo no era lo que esperaba</Text>
                <Text style={styles.texto}>Problema distinto</Text>
                <Text style={styles.texto}>Carro  se quedo sin gasolina</Text>
                <Text style={styles.texto}>¿Como facturar?</Text>
                <Text style={styles.texto}>Se me cobro un viaje que cancele </Text>
                <Text style={styles.texto}>Reportar un robo</Text>
            </View>
        );
    }
}



class inforecibo extends React.Component {
    render() {
        return (

            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={{fontSize: 17, fontWeight: '500'}}>Recibo de Migo</Text>
                <View style={styles.recibo} >
                    <Text>Tarifa base</Text>
                    <Text>$ 7.00</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Tiempo</Text>
                    <Text>$ 24.00</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Distancia</Text>
                    <Text>$ 15.70</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Subtotal</Text>
                    <Text>$ 47.08</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Contribucion gubernamental</Text>
                    <Text>$ 0.92</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Cuota de solicitud</Text>
                    <Text>$ 4.71</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Total</Text>
                    <Text>$ 52.70</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Propina al conductor</Text>
                    <Text>$ 00.00</Text>
                </View>
                <View>
                    <View style={styles.recibo}>
                        <Icon
                            name='cash'
                            type='material-community' />
                        <Text>Pago en efectivo</Text>
                    <Text style= {{ fontWeight: '400'}} >$ 52.70</Text>

                    </View>
                </View>
            </View>
        );
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

    }
})

const navDetallesAR = createMaterialTopTabNavigator({
    Ayuda: ayuda,
    Recibo: inforecibo,
},
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#A9A9A9',
            }
        }
    });

const NavDetallesAR = createAppContainer(navDetallesAR);

export { NavDetallesAR }