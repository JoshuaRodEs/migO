import React from 'react';
import { View, Text, StyleSheet, deviceWidth } from 'react-native';
import Modal from "react-native-modalbox";
import { Header, Icon, Button, Divider, CheckBox, Input, Card } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";

const facturas = [

    {
        fecha: '17/08/19 9:37 p.m.',
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
        pago: 'Efectivo',
        correo: '16460557@itcolima.edu.mx'
    }
]

class datosfacturaciondisponible extends React.Component {

    static navigationOptions = {

        title: 'Facturar',
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
            <View style={{ margin: 10 }}>
                <Text style={{ margin: 10 }}>Datos de facturacion</Text>
                <Card>
                    <Text>Selecciona datos a facturar</Text>
                    <View>
                        {
                            facturas.map((factura, i) => {
                                return (
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <CheckBox />
                                        <View style={{ flexDirection: 'column' }} >
                                            <Text>{factura.denominacion}</Text>
                                            <Text>{factura.rfc}</Text>
                                        </View>
                                    </View>

                                );
                            })
                        }
                    </View>
                    <View style={{ flexDirection: 'row', fontWeight: '500' }}>
                        <Icon
                            name='plus-circle'
                            type='material-community'
                        />
                        <Text style={{marginLeft:5, textAlignVertical:'center' }}>Registrar datos de facturacion</Text>
                    </View>
                </Card>

                <Text>Recibir informacion</Text>
                <Card>
                    <Text>Correo electronico</Text>
                    <Input
                        placeholder='Te enviaremos la factura'
                    />
                </Card>
                <Text style={{ margin: 10 }}>Si tienes dudas, contacta a soporte tecnico</Text>
                <Button
                style={{ margin: 10 }}
                    title='Siguiente'
                    ////onPress={() => this.refs.modal.open()}
                />
                { /* 

    <Modal position={'bottom'} style={styles.modal} ref={"modal"}>



                    <View >

                        <Card style={styles.card} >
                            <Text style={{ fontSize: 20, fontWeight: '500' }} >Facturar</Text>
                            <Text>RFC: {factura.rfc}</Text>
                            <Text>Denominacion/Razon Social: {factura.denominacion}</Text>
                            <Text>{factura.fecha}</Text>

                            <Text style={{ margin: 5, fontWeight: '400' }} >Domicilio Fiscal</Text>

                            <Text>Nombre de Vialidad: {factura.domicilio.calle}</Text>
                            <Text>Colonia: {factura.domicilio.colonia}</Text>
                            <Text>Numero exterior: {factura.domicilio.numext}</Text>
                            <Text>Numero interior: {factura.domicilio.numint}</Text>
                            <Text>Codigo postal: ${factura.domicilio.cp}</Text>
                            <Text>Nombre del muicipio o demarcacion teritorial: {factura.domicilio.municipio}</Text>
                            <Text>Nombre de la localidad: {factura.domicilio.localidad}</Text>
                            <Text>Nombre de la entidad federativa: {factura.domicilio.entidad}</Text>
                            <Text>Cantidad: MX ${factura.cantidad}</Text>
                            <Text>Tipo de pago: {factura.pago}</Text>
                            <Text>Correo Electronico: {factura.correo}</Text>
                        </Card>

                        <Button
                            title='Enviar'

                        />

                    </View>
                </Modal>

*/ }


            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        width: deviceWidth,
        margin: 5,
        backgroundColor: '#fff',

    },
    texto: {
        marginTop: 17

    }
})

export { datosfacturaciondisponible }
