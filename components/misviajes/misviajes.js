import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, deviceWidth, ActivityIndicator, FlatList } from 'react-native'
import { Divider, Icon, Button, Card, Image, Rating, Header } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Navmisviajes } from './navmisviajes'

const viajesTaxi = [

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
        formapago: 'Efectivo',
        origen: 'Vicente Guerrero 213, Obregon, 28000 Colima, Col, Mexico',
        destino: 'Porfirio Gaytan Nuñez 489, Lomas del Centenario, 28984, Villa de Alvarez, Col, Mexico',
        recorrido: 'https://images.clarin.com/2019/05/30/google-maps-muestra-la-ubicacion___qV2WQlVoQ_1256x620__1.jpg'
    },

    {
        fechaUso: '13/08/19 9:37 p.m.',
        modeloTaxi: 'Italika',
        montoViaje: 20.50,
        puntuacion: 2,
        formapago: 'Efectivo',
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



class misviajes extends React.Component {

    constructor(props) {

        const { navigate } = props.navigation;
        //function to go to next screen
        goToNextScreen = (viajeT) => {
            return navigate('DetallesViaje', { viajeT });
        }
        tipoPago = (pago) => {
            if (pago == 1) {
                return <Text> Efectivo </Text>
            }
            else {
                return <Text> Tarjeta </Text>
            }
        }

        super(props);
    }

    static navigationOptions = ({ navigation }) => {

        return {

            title: 'Elije un viaje',
            headerStyle: {
                backgroundColor: "#fff"
            },
            headerTintColor: "#000",
            headerTitleStyle: {
                fontWeight: "bold"
            },
            headerRight: (
                <Button

                    onPress={() => navigation.navigate("Facturar")}
                    title="Facturar"
                    buttonStyle={{ backgroundColor: '#000', marginRight: 7 }}
                />
            )
        }
    }

    state = {
        loading: true,
        viajes: []
    }


    async componentDidMount() {
        const result = await fetch('http://187.234.45.213:3001/webservice/interfaz108_109/Usuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'id_usuario': '1' })
        })

        const content = await result.json();

        this.setState({ viajes: content.datos, loading: false });

        console.log(this.state.viajes);

    }

    renderItem(data) {
        return <Card style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => this.goToNextScreen(data.item)}
                style={{ flexDirection: 'column' }}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    scrollEnabled={false}
                    liteMode={true}
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }} />
                <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{data.item.fecha_hora.split('T')[0]}</Text>
                        <Text>${data.item.total_servicio}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <Text>{data.item.vehiculo_info}</Text>
                        <Text style={{ fontWeight: 'bold' }} >{this.tipoPago(data.item.forma_pago)}</Text>
                        <Rating
                            readonly
                            imageSize={15}
                            startingValue={data.item.calificacion_chofer}
                        />
                    </View>
                </View>

            </TouchableOpacity>
        </Card>
    }


    render() {

        const { loading, viajes } = this.state;
        console.log(loading);


        if (!loading) {
            return <FlatList
                data={viajes}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.total_servicio}
                navigation={this.props.navigation}
            />
        } else {
            return <ActivityIndicator />


        }
    }
}

let styles = StyleSheet.create({
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
        resizeMode: 'contain'

    },
    map: {
        flex:1,
        height: 250
    },
    containermap: {
        ...StyleSheet.absoluteFillObject,
        width: deviceWidth,
        justifyContent: 'flex-end',
    }
})




export { misviajes }