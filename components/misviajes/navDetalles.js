import React from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Divider, Icon, Button, Card, Image, Rating, Header } from 'react-native-elements'

import { createAppContainer, } from "react-navigation";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';


class ayuda extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            recibo: []
        };
    }

    render() {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <TouchableOpacity>
                    <Text style={styles.texto}>Estuve involucrado en un accidente</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.texto}>Revisar mis tarifas</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.texto}>Articulos perdidos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.texto}>Comentarios sobre el conductor</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.texto}>El vehiculo no era lo que esperaba</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.texto}>Problema distinto</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.texto}>Carro  se quedo sin gasolina</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.texto}>¿Como facturar?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.texto}>Se me cobro un viaje que cancele </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.texto}>Reportar un robo</Text>
                </TouchableOpacity>

            </View>
        );
    }
}



class inforecibo extends React.Component {


    constructor(props) {
        super(props);

    }

    state = {
        loading: true,
        recibo: []
    }

    tipoPago = (pago) => {
        if (pago == 1) {
            return <Text> Efectivo </Text>
        }
        else {
            return <Text> Tarjeta </Text>
        }
    }

    async componentWillReceiveProps() {
        const result = await fetch('http://34.95.33.177:3003/webservice/interfaz111/Usuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'id_servicio': '1' })
        })

        const content = await result.json();

        this.setState({ recibo: content.datos, loading: false });

        console.log(this.state.recibo);

    }



    render() {

        const { loading, recibo } = this.state;
        console.log(loading);


        if (!loading) {
            return <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: '500' }}>Recibo de Migo</Text>
                <View style={styles.recibo} >
                    <Text>Tarifa base</Text>
                    <Text>${recibo[0].tarifa_base}</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Tiempo</Text>
                    <Text>${recibo[0].total_tiempo}</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Distancia</Text>
                    <Text>${recibo[0].total_distancia}</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Subtotal</Text>
                    <Text>${recibo[0].subtotal}</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Contribucion gubernamental</Text>
                    <Text>${recibo[0].contribucion_gob}</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Cuota de solicitud</Text>
                    <Text>${recibo[0].xuota_solicitud}</Text>
                </View>
                <View style={styles.recibo} >
                    <Text>Total</Text>
                    <Text>${recibo[0].total}</Text>
                </View>
                <View>
                    <View style={styles.recibo}>
                        <Icon
                            name='cash'
                            type='material-community' />
                        <Text>Pago en {this.tipoPago(recibo[0].forma_pago)}</Text>
                        <Text style={{ fontWeight: '400' }} >${recibo[0].total}</Text>

                    </View>
                </View>
            </View >
        } else {
            return <ActivityIndicator />


        }
    }
}

let styles = StyleSheet.create({
    recibo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#bababa'
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