import React from 'react'
import { View, Text, ScrollView, StyleSheet, deviceWidth, ImageResizeMode, ActivityIndicator } from "react-native";
import { Image, Divider, Rating, Button } from "react-native-elements";
import { TabNavigator } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavDetallesAR } from "./navDetalles";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';



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

        super(props)

        

    }

    state = {
        chofer: [],
        mejorescomentarios: [],
        logroschofer: [],
        loading: true,
    }

    


    async componentWillMount() {

        let idchof= this.idChofer();

        const result = await fetch('http://34.95.33.177:3003/webservice/interfaz112/DatosUsuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'id_conductor': idchof })
        });

        const result1 = await fetch('http://34.95.33.177:3003/webservice/interfaz112/MejoresComentariosUsuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'id_conductor': idchof })
        });

        const result2 = await fetch('http://34.95.33.177:3003/webservice/interfaz112/LogrosUsuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'id_conductor': idchof })
        });

        const content = await result.json();
        const contentcomentarios = await result1.json();
        const contentlogros = await result2.json();

        this.setState({ chofer: content.datos, mejorescomentarios: contentcomentarios.datos, logroschofer: contentlogros.datos, loading: false});

        console.log(" chofer: ", this.state.chofer);
        console.log(" MEJORESCOMENTARIOS: ", this.state.mejorescomentarios);

        console.log(" LOGGROS: ", this.state.logroschofer);


    }

    idChofer = () => {

        const { navigation } = this.props;
        
        const viajeElegido = navigation.getParam('viajeT');
        

        return viajeElegido.id_chofer
    }


    tipoPago = (pago) => {
        if (pago == 1) {
            return <Text> Efectivo </Text>
        }
        else {
            return <Text> Tarjeta </Text>
        }
    }

    render() {

        const { navigation } = this.props;     
        const viajeElegido = navigation.getParam('viajeT');
        const { chofer, mejorescomentarios, logroschofer, loading } = this.state;
        
        

        if (!loading) {
            console.log('este chofer se enviara: ', chofer);
            return <ScrollView>
                <View>
                    {/* Info y direccion del viaje seleccionado----------------------------------------------*/}
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
                    strokeWidth={4}
                        origin={{ latitude: 19.249184, longitude: -103.717344 }}
                        destination={{ latitude: 19.231830, longitude: -103.722117 }}
                        apikey={"AIzaSyCr3ismAo7J6PSBpGCVYVvTu8S-7kcPkJ4"}
                    />
                </MapView>
                    
                    <Divider style={{ backgroundColor: '#bababa' }} />
                    <View>
                        <View style={styles.vistas}>
                            <Text>{viajeElegido.fecha_hora.split('T')[0]} {viajeElegido.fecha_hora.split('T')[1].split('.')[0]} </Text>
                            <Text>$ {viajeElegido.total_servicio}</Text>
                        </View>
                        <View style={styles.vistas}>
                            <Text>{viajeElegido.vehiculo_info}</Text>
                            <Text>{this.tipoPago(viajeElegido.forma_pago)}</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text>*Direccion de origen</Text>
                            <Text>*Direccion de destino</Text>
                        </View>
                    </View>
                    <Divider style={{ backgroundColor: '#fff', height: 14 }} />
                    <Divider style={{ backgroundColor: '#bababa' }} />
                    <Divider style={{ backgroundColor: '#fff', height: 10 }} />
                    <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("PerfilConductor", { chofer, mejorescomentarios, logroschofer })} style={styles.vistas} >
                            <Image
                                source={{}}
                                style={{ width: 50, height: 50 }}
                            />
                            <Text
                            style={{ textAlignVertical: 'center' }} >    
                            Calificaste a {viajeElegido.nombre_conductor.split(' ')[0]}
                            </Text>
                        </TouchableOpacity>
                        <Rating
                            style={{ justifyContent: 'center' }}
                            readonly
                            imageSize={19}
                            startingValue={viajeElegido.calificacion_chofer}
                        />
                    </View>
                    <Divider style={{ backgroundColor: '#fff', height: 10 }} />
                    <Text style={{ fontWeight: '400', fontSize: 17 }}>
                        ¿Necesitas ayuda con el viaje?
                </Text>
                    <Divider style={{ backgroundColor: '#fff', height: 10 }} />

                    <View style={{ marginBottom: 5, width: deviceWidth, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("CambiaPuntos", { viajeElegido })}
                            style={{ backgroundColor: '#d1d1d1', marginRight: 4 }}>
                            <View style={{ marginLeft: 5, marginRight: 5 }}>
                                <Text>Como cambiar la calificación</Text>
                                <Text>de estrellas</Text>
                                <Text>            </Text>
                                <Text>Quiero cambiar la calificación</Text>
                                <Text>que le di a un conductor</Text>
                                <Text>            </Text>
                                <Text>Editar calificación</Text>
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
        }
        else{
            return <ActivityIndicator />
        }
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
    },
    map: {
        flex:1,
        height: 250
    }
})

export { misviajesDetalles }
//export default createAppContainer(detallesviaje);
