import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, deviceWidth, ActivityIndicator, FlatList } from 'react-native'
import { Divider, Icon, Button, Card, Image, Rating, Header } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Navmisviajes } from './navmisviajes'


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
        const result = await fetch('http://34.95.33.177:3003/webservice/interfaz108_109/Usuarios', {
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
                <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{data.item.fecha_hora.split('T')[0]} {data.item.fecha_hora.split('T')[1].split('.')[0]}</Text>
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
                <MapView
                    provider={PROVIDER_GOOGLE}
                    scrollEnabled={false}
                    liteMode={true}
                    customMapStyle={[
                        {
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#f5f5f5"
                            }
                          ]
                        },
                        {
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#616161"
                            }
                          ]
                        },
                        {
                          "elementType": "labels.text.stroke",
                          "stylers": [
                            {
                              "color": "#f5f5f5"
                            }
                          ]
                        },
                        {
                          "featureType": "administrative.land_parcel",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "administrative.land_parcel",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#bdbdbd"
                            }
                          ]
                        },
                        {
                          "featureType": "administrative.neighborhood",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#eeeeee"
                            }
                          ]
                        },
                        {
                          "featureType": "poi",
                          "elementType": "labels.text",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#757575"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.business",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.park",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#e5e5e5"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.park",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#9e9e9e"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#ffffff"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "labels",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "road.arterial",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#757575"
                            }
                          ]
                        },
                        {
                          "featureType": "road.highway",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#dadada"
                            }
                          ]
                        },
                        {
                          "featureType": "road.highway",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#616161"
                            }
                          ]
                        },
                        {
                          "featureType": "road.local",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#9e9e9e"
                            }
                          ]
                        },
                        {
                          "featureType": "transit",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "transit.line",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#e5e5e5"
                            }
                          ]
                        },
                        {
                          "featureType": "transit.station",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#eeeeee"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#c9c9c9"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "labels.text",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#9e9e9e"
                            }
                          ]
                        }
                      ]}
                    style={styles.map}
                    initialRegion={{
                        latitude: 19.249184,
                        longitude: -103.722117,
                        latitudeDelta: 0.0122,
                        longitudeDelta: 0.011,

                    }} >
                    <MapViewDirections
                        origin={{ latitude: 19.249184, longitude: -103.717344 }}
                        strokeWidth={4}
                        destination={{ latitude: 19.231830, longitude: -103.722117 }}
                        apikey={"AIzaSyCr3ismAo7J6PSBpGCVYVvTu8S-7kcPkJ4"}
                    />
                </MapView>


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
        flex: 1,
        height: 200
    },
    containermap: {
        ...StyleSheet.absoluteFillObject,
        width: deviceWidth,
        justifyContent: 'flex-end',
    }
})




export { misviajes }