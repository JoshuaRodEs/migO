import React, { Component } from 'react'
import { View } from 'react-native'
import { Navfacturacion } from './navfacturatf'
import { Card, Header, Icon, Button, Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler'

class listaviajes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <ScrollView>
                <Navfacturacion />
                
            </ScrollView>
        )
    }
}

export { listaviajes }
