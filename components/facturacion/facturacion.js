import React from 'react';
import { View, Text, StyleSheet, deviceWidth, TouchableOpacity } from 'react-native';
import { Header, Icon, Button, Divider } from 'react-native-elements';
import { BannerModal } from "./modalBanner";

class facturacion extends React.Component {

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

    getInitialState(){
        return {
            modalVisible: true
        }
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{margin:10}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Listaviajesfactura")} style={styles.container} >
                
                    <Text>Viajes</Text>
                    <Icon
                        name='keyboard-arrow-right'
                        type='material'
                    />
                </TouchableOpacity>
                <Divider style={{ height: 1, backgroundColor: '#bababa' }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("HistorialF")} style={styles.container} >
                    <Text>Historial de Facturacion</Text>
                    <Icon
                        name='keyboard-arrow-right'
                        type='material'
                    />
                </TouchableOpacity>
                <Divider style={{ height: 1, backgroundColor: '#bababa' }} />
                <TouchableOpacity style={styles.container}>
                    <Text>Reglas de Facturacion</Text>
                    <Icon
                        name='keyboard-arrow-right'
                        type='material'
                    />
                </TouchableOpacity>


            </View>
        )
    }

    showModal() {
        this.setState(
        {
            modalVisible: true
        })
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

export { facturacion }
