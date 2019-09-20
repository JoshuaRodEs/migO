import React from 'react';
import { View, Text, StyleSheet, deviceWidth, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Icon, Button, Divider, Card } from 'react-native-elements';


const facturas = [

    {
        fecha:'17/08/19 9:37 p.m.',
        rfc: 'KIO140409EIC',
        denominacion: 'KIOTRACK',
        domicilio: {
            colonia: 'FATIMA',
            calle: 'PLUTARCO ELIAS CALLES',
            numext: 256,
            numint: 'C',
            cp: '28050',
            municipio: 'COLIMA',
            localidad: 'COLIMA',
            entidad: 'COLIMA',
        },
        cantidad: 155.14,
        pago:'Efectivo',
        correo: '16460557@itcolima.edu.mx'
    },

    {
        fecha:'17/08/19 9:37 p.m.',
        rfc: 'KIO140409EIC',
        denominacion: 'KIOTRACK',
        domicilio: {
            calle: 'PLUTARCO ELIAS CALLES',
            numext: 256,
            numint: 'C',
            cp: '28050',
            municipio: 'COLIMA',
            localidad: 'COLIMA',
            entidad: 'COLIMA',
        },
        cantidad: 85.14,
        pago:'Tarjeta de Debito/Credito',
        correo: '16460557@itcolima.edu.mx'
    },
    {
        fecha:'17/08/19 9:37 p.m.',
        rfc: 'KIO140409EIC',
        denominacion: 'KIOTRACK',
        domicilio: {
            calle: 'PLUTARCO ELIAS CALLES',
            numext: 256,
            numint: 'C',
            cp: '28050',
            municipio: 'COLIMA',
            localidad: 'COLIMA',
            entidad: 'COLIMA',
        },
        cantidad: 90.14,
        pago:'Efectivo',
        correo: '16460557@itcolima.edu.mx'
    },
    {
        fecha:'17/08/19 9:37 p.m.',
        rfc: 'KIO140409EIC',
        denominacion: 'KIOTRACK',
        domicilio: {
            calle: 'PLUTARCO ELIAS CALLES',
            numext: 256,
            numint: 'C',
            cp: '28050',
            municipio: 'COLIMA',
            localidad: 'COLIMA',
            entidad: 'COLIMA',
        },
        cantidad: 45.54,
        pago:'Tarjeta de Debito/Credito',
        correo: '16460557@itcolima.edu.mx'
    }
]

class historialfacturas extends React.Component {

    static navigationOptions = {

        title: 'Historial de Facturacion',
        headerStyle: {
            backgroundColor: "#fff"
        },
        headerTintColor: "#000",
        headerTitleStyle: {
            fontWeight: "bold"
        }

    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {
                        facturas.map((factura, i) => {
                            return (
                                <Card>
                                    <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate("DetallesFactura", { factura })} >
                                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <Text>{factura.fecha}</Text>
                                            <Text>Cantidad: ${factura.cantidad}</Text>
                                            <Text>Tipo de pago: {factura.pago}</Text>
                                            <Text>Correo Electronico: {factura.correo}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Card>
                            );
                        })
                    }
                </ScrollView>

            </View>
        )
    }
}

export {historialfacturas}
