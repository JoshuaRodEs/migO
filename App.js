/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet, deviceWidth, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Header, Icon, Button, Divider } from 'react-native-elements';

import { createAppContainer, } from "react-navigation"; // Version can be specified in package.json
import { createStackNavigator } from "react-navigation-stack";

import { misviajes } from './components/misviajes/misviajes';
import { misviajesperfilconductor } from "./components/misviajes/misviajesperfilconductor";
import { misviajesDetalles } from './components/misviajes/misviajesDetalles';
import { NavDetallesAR } from './components/misviajes/navDetalles';
import { misviajescambiapuntos } from './components/misviajes/misviajescambiapuntos';
import { graciascambiapuntos } from "./components/misviajes/graciascambiapuntos";
import { pantallagracias } from "./components/misviajes/pantallagracias";
import { Navmisviajes } from "./components/misviajes/navmisviajes"

import{ facturacion } from './components/facturacion/facturacion'
import {historialfacturas} from './components/facturacion/historialfacturas'
import { detallesfactura } from "./components/facturacion/detallesfactura";
import { listaviajes } from './components/facturacion/listaviajes';
import { Navfacturacion } from './components/facturacion/navfacturatf'
import { datosfacturaciondisponible } from './components/facturacion/datosfacturaciondisponible';



class Home extends React.Component {

  static navigationOptions = {
    title:'Mis viajes',
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold"
        }    
  }

  render() {
    return (

      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("MisViajes")} style={ styles.container}>
          <Icon
            name='directions-car'
            type='material' />
          <Text>Historial de mis viajes</Text>
          <Icon
            name='keyboard-arrow-right'
            type='material'
          />
        </TouchableOpacity>
        <Divider style={{ height: 1, backgroundColor: '#bababa' }} />
        <TouchableOpacity style={ styles.container}>
          <Icon
            name='food'
            type='material-community'/>
          <Text>Historial de mis pedidos de comida</Text>
          <Icon
            name='keyboard-arrow-right'
            type='material'
          />
        </TouchableOpacity>
        <Divider style={{ height: 1, backgroundColor: '#bababa' }} />
      </View>
    )
  }
}

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    MisViajes: {
      screen: misviajes
    },
    PerfilConductor: {
      screen: misviajesperfilconductor
    },
    AyudaRecibo: {
      screen: NavDetallesAR
    },
    DetallesViaje: {
      screen: misviajesDetalles
    },
    GraciasCambio:{
      screen: graciascambiapuntos
    },
    Facturar:{
      screen: facturacion
    },
    Gracias:{
      screen: pantallagracias
    },
    CambiaPuntos: {
      screen: misviajescambiapuntos
    },
    HistorialF:{
      screen: historialfacturas
    },
    NavFacturacion:{
      screen: Navfacturacion
    },
    NavMisviajes:{
      screen: Navmisviajes
    },
    Listaviajesfactura:{
      screen: listaviajes
    },
    DatosFacturacionActuales:{
      screen: datosfacturaciondisponible
    },
    DetallesFactura:{
      screen: detallesfactura
    }
  },
  {
    initialRouteName: "Home"
  }
);


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

export default createAppContainer(MainStack);
