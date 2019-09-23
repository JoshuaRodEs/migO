import React from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { CheckBox, Divider, Icon, Button, Card, Image, Rating, Header } from 'react-native-elements'

import { createAppContainer, } from "react-navigation";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';



const viajes = []

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
        super(props);

    }

    state = {
        loading: true,
        viajes: []
    }


    async componentDidMount() {
        const result = await fetch('http://187.144.62.47:3001/webservice/interfaz111/Usuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'id_servicio': '1' })
        })

        const content = await result.json();

        this.setState({ viajes: content.datos, loading: false });

        console.log(this.state.viajes);

    }

    renderItem(data) {
        return  <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    <View>
                        <Text >{data.item.nombre_conductor}</Text>
                        <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}}/>
                    </View>
                </TouchableOpacity>
    }

    render() {

        const { loading, viajes } = this.state;
    console.log(loading);
    

        if(!loading) {
            return <FlatList 
                    data={viajes}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.nombre_conductor} 
                    />
        } else {
            return <ActivityIndicator/>
            
            
        }
    }
}



class flete extends React.Component {
    render() {
        return (
            <ScrollView>
                {/*
                    this.state.viajes.map((viajeT, i) => {
                        return (
                            <Card key={i} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("DetallesViaje", { viajeT })} >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text>{viajeT.fecha_hora}</Text>
                                        <Text>${viajeT.total_servicio}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                        <Text>{viajeT.vehiculo_info}</Text>
                                        <Text style={{ fontWeight: 'bold' }} >{viajeT.forma_pago}</Text>
                                        <Rating
                                            readonly
                                            imageSize={15}
                                            startingValue={viajeT.calificacion_chofer}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        );
                    })
                */ }
            </ScrollView>
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

const navmisviajes = createMaterialTopTabNavigator({
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

const Navmisviajes = createAppContainer(navmisviajes);

export { Navmisviajes }