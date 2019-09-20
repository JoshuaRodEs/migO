
import React from 'react';
import { View, Text, StyleSheet, deviceWidth, TouchableOpacity } from 'react-native';
import { Card, Header, Icon, Button, Divider } from 'react-native-elements';

class detallesfactura extends React.Component {

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

        const { navigation } = this.props;
        const factura = navigation.getParam('factura');

        return (
            <View >

                <Card style={styles.card} >
                    <Text>RFC: {factura.rfc}</Text>
                    <Text>Denominacion/Razon Social: {factura.denominacion}</Text>
                    <Text>{factura.fecha}</Text>

                    <Text style={{ margin: 10, fontWeight: '500' }} >Domicilio Fiscal</Text>

                    <Text>Nombre de Vialidad: {factura.domicilio.calle}</Text>
                    <Text>Colonia: {factura.domicilio.colonia}</Text>
                    <Text>Numero exterior: {factura.domicilio.numext}</Text>
                    <Text>Numero interior: {factura.domicilio.numint}</Text>
                    <Text>Codigo postal: ${factura.domicilio.cp}</Text>
                    <Text>Nombre del muicipio o demarcacion teritorial: {factura.domicilio.municipio}</Text>
                    <Text>Nombre de la localidad: {factura.domicilio.localidad}</Text>
                    <Text>Nombre de la entidad federativa: {factura.domicilio.entidad}</Text>
                </Card>

                <Card style={styles.card} >
                    <Text>Cantidad: MX ${factura.cantidad}</Text>
                    <Text>Tipo de pago: {factura.pago}</Text>
                    <Text>Correo Electronico: {factura.correo}</Text>
                </Card>


            </View>
        )
    }
}

let styles = StyleSheet.create({
    card:{
        backgroundColor: '#a9a9a9',
        marginHorizontal:15,
        marginBottom:30
    }
})

export { detallesfactura }