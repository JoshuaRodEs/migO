import React from 'react'
import { View, Text, ScrollView, StyleSheet, deviceWidth, ImageResizeMode, ActivityIndicator } from "react-native";
import { Image, Divider, Rating, Button } from "react-native-elements";
import { TabNavigator } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavDetallesAR } from "./navDetalles";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';



/////////////////VARIABLES/PARAMETROS//////////////////////////////////////

const conductor = {
    nombre: 'Jose Ramon Ramirez',
    fotoPerfil: 'https://i.pinimg.com/474x/c8/c2/d7/c8c2d75658ad631101cfbfe51eb6d26f--cristiano-rinaldo-poloshirt.jpg',
    descripcion: 'Padre de Familia, Respetuoso y atento',
    idiomas: 'Hablo Ingles y Español',
    residencia: 'Colima',
    puntuacion: 4.85,
    tiempoenservicio: 11

}
let nombreC = conductor.nombre.split(' ')[0]


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

        super(props);

    }

    state = {
        chofer: [],
        loading: true
    }

    async componentWillMount() {
        const result = await fetch('http://187.144.62.47:3001/webservice/interfaz112/DatosUsuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'id_conductor': '1' })
        })

        const content = await result.json();

        this.setState({ chofer: content.datos, loading: false});

        console.log(this.state.chofer);

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
        const { chofer, loading } = this.state;
        const viajeElegido = navigation.getParam('viajeT');
        console.log(loading);
        

        if (!loading) {
            return <ScrollView>
                <View>
                    {/* Info y direccion del viaje seleccionado----------------------------------------------*/}
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            scrollEnabled={false}
                            liteMode={true}
                            style={styles.map}
                            initialRegion={{
                                latitude: 19.249184,
                                longitude: -103.717344,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }} />
                    
                    <Divider style={{ backgroundColor: '#bababa' }} />
                    <View>
                        <View style={styles.vistas}>
                            <Text>{viajeElegido.fecha_hora.split('T')[0]}</Text>
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("PerfilConductor", { chofer })} style={styles.vistas} >
                            <Image
                                source={{ uri: conductor.fotoPerfil }}
                                style={{ width: 50, height: 50 }}
                            />
                            <Text style={{ textAlignVertical: 'center' }} >    Calificaste a {viajeElegido.nombre_conductor.split(' ')[0]}</Text>
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
                                <Text>Como cambiar la calificacion</Text>
                                <Text>de estrellas</Text>
                                <Text>            </Text>
                                <Text>Quiero cambiar la calificacion</Text>
                                <Text>que le di a un conductor</Text>
                                <Text>            </Text>
                                <Text>Editar calificacion</Text>
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
