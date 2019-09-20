import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { CheckBox, Divider, Icon, Button, Card, Image, Rating, Header } from 'react-native-elements'

import { createAppContainer, } from "react-navigation";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

let preciototal = 0;
let seleccionados = 0;

const viajeTaxi = [

    {
        fechaUso: '17/08/19 9:37 p.m.',
        modeloTaxi: 'Ford Lobo',
        montoViaje: 60.50,
        puntuacion: 5,
        formapago: 'Efectivo',
        origen: 'Vicente Guerrero 213, Obregon, 28000 Colima, Col, Mexico',
        destino: 'Porfirio Gaytan Nuñez 489, Lomas del Centenario, 28984, Villa de Alvarez, Col, Mexico',
        recorrido: 'http://2.bp.blogspot.com/-ufrUdR0htic/UJOA1SK4h3I/AAAAAAAAAGQ/Avc1jc0M-ww/s1600/como-dibujar-rutas-google-maps.PNG'
    },

    {
        fechaUso: '15/08/19 9:37 p.m.',
        modeloTaxi: 'Aveo',
        montoViaje: 30.50,
        puntuacion: 4,
        formapago: 'Tarjeta',
        origen: 'Vicente Guerrero 213, Obregon, 28000 Colima, Col, Mexico',
        destino: 'Porfirio Gaytan Nuñez 489, Lomas del Centenario, 28984, Villa de Alvarez, Col, Mexico',
        recorrido: 'https://images.clarin.com/2019/05/30/google-maps-muestra-la-ubicacion___qV2WQlVoQ_1256x620__1.jpg'
    },

    {
        fechaUso: '13/08/19 9:37 p.m.',
        modeloTaxi: 'Italika',
        montoViaje: 20.50,
        puntuacion: 2,
        formapago: 'Tarjeta',
        origen: 'Vicente Guerrero 213, Obregon, 28000 Colima, Col, Mexico',
        destino: 'Porfirio Gaytan Nuñez 489, Lomas del Centenario, 28984, Villa de Alvarez, Col, Mexico',
        recorrido: 'http://2.bp.blogspot.com/-ufrUdR0htic/UJOA1SK4h3I/AAAAAAAAAGQ/Avc1jc0M-ww/s1600/como-dibujar-rutas-google-maps.PNG'
    },

    {
        fechaUso: '11/08/19 9:37 p.m.',
        modeloTaxi: 'Ford Lobo',
        montoViaje: 200.40,
        puntuacion: 5,
        formapago: 'Efectivo',
        origen: 'Vicente Guerrero 213, Obregon, 28000 Colima, Col, Mexico',
        destino: 'Porfirio Gaytan Nuñez 489, Lomas del Centenario, 28984, Villa de Alvarez, Col, Mexico',
        recorrido: 'https://elcomercio.pe/files/listing_ec_flujo_xx/uploads/2018/02/22/5a8ebc807e576.jpeg'
    },

    {
        fechaUso: '10/08/19 9:37 p.m.',
        modeloTaxi: 'Papapure',
        montoViaje: 44.50,
        puntuacion: 5,
        formapago: 'Efectivo',
        origen: 'Vicente Guerrero 213, Obregon, 28000 Colima, Col, Mexico',
        destino: 'Porfirio Gaytan Nuñez 489, Lomas del Centenario, 28984, Villa de Alvarez, Col, Mexico',
        recorrido: 'http://2.bp.blogspot.com/-ufrUdR0htic/UJOA1SK4h3I/AAAAAAAAAGQ/Avc1jc0M-ww/s1600/como-dibujar-rutas-google-maps.PNG'
    }



]



class taxi extends React.Component {




    constructor(props) {
        super(props)
        // this is the default state on page load
        this.state = {
            checks: viajeTaxi.map(() => { return false })
        }
    }

    seleccionar(i) {
        let newChecks = this.state.checks;
        newChecks[i] = !newChecks[i];

        this.preciototal = preciototal + newChecks[i].montoViaje

        this.setState({
            checks: newChecks
        });
    }

    seleccionatodos() {
        let allChecks = this.state.checks;

        for (let index = 0; index < allChecks.length; index++) {

            if (!allChecks[index]) {
                allChecks[index] = !allChecks[index];
            }
        }

        this.setState({
            checks: allChecks
        });

    }



    render() {
        return (

            <View>
                <ScrollView>
                    {
                        viajeTaxi.map((viajeT, i) => {
                            return (
                                <Card key={i} >
                                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.seleccionar(i)}>

                                        <CheckBox
                                            checked={this.state.checks[i]}
                                        />
                                        <View style={{ flexDirection: 'column' }} >
                                            <Text>{viajeT.fechaUso}</Text>
                                            <Text>{viajeT.modeloTaxi}</Text>
                                            <Text>{viajeT.origen}</Text>
                                            <Text>{viajeT.destino}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column-reverse' }}>

                                            <Text>${viajeT.montoViaje}</Text>
                                            <Text>{viajeT.formapago}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Card>
                            );
                        })
                    }
                </ScrollView>
                <View>
                    <Card>
                        <Text>
                            viajes, en total MX ${preciototal}
                        </Text>
                    </Card>
                    <TouchableOpacity onPress={() => this.seleccionatodos()} >
                        <Card style={{ flexDirection: 'row' }} >
                            <CheckBox />
                            <View>
                                <Text>Seleccionar todo</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <Button
                        title='Siguiente'
                        buttonStyle={{ backgroundColor: '#d5d5d5', margin: 8 }}
                        onPress={() => this.props.navigation.navigate("DatosFacturacionActuales")}
                    />
                </View>

            </View>
        );
    }
}



class flete extends React.Component {
    render() {
        return (

            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: '500' }}>Recibo de Migo</Text>
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
                        <Text style={{ fontWeight: '400' }} >$ 52.70</Text>

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

const navFactura = createMaterialTopTabNavigator({
    Taxi: taxi,
    Fletes: flete,
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

const Navfacturacion = createAppContainer(navFactura);

export { Navfacturacion }