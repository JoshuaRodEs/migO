import React from 'react'
import { View } from "react-native";
import { Text, Button, Icon } from 'react-native-elements';

class pantallagracias extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { navigation } = this.props;
        const viajeT = navigation.getParam('viaje');
        const satisfaction = navigation.getParam('satisfaccion');

        return (
            <View style={{ marginLeft: 15, marginRight: 15 }}>

                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 24, fontWeight: '500' }} >
                        Gracias 
                    </Text>
                </View>
                <View style={{ marginTop: 15, marginBottom: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: '400' }} >
                        Tus comentarios nos ayudan a ofrecerte una mejor experiencia
                    </Text>
                </View>
                <Button
                    title='Listo' color= '#C5C5C5' onPress={() => this.props.navigation.navigate("DetallesViaje", {viajeT})} />
            </View>
        )
    }
}

export {pantallagracias}
