
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native'
import { CheckBox, Rating } from 'react-native-elements'



let puntuacionfinal = 3;

class misviajescambiapuntos extends React.Component {

    static navigationOptions = {

        title: 'Ayuda',
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
        // this is the default state on page load
        this.state = {

            checked5: false,
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false
        }
    }
    
    
    render() {

        const { navigation } = this.props;
        const viaje = navigation.getParam('viajeElegido');



        return (
            <ScrollView style={{ marginLeft: 15, marginRight: 15, marginTop: 30 }}>

                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 20 }} >Quiero cambiar la calificacion que le di a un conductor</Text>
                    <Text>¿Que calificacion quieres dar? </Text>
                </View>
                <TouchableOpacity>

                    <CheckBox
                        title='1 Estrella'
                        checked={this.state.checked1}
                        onPress={viaje.puntuacion=1, () => this.setState({ checked1: !this.state.checked1, checked2: false, checked3: false, checked4: false, checked5: false })}
                    />
                    <CheckBox
                        title='2 Estrellas'
                        checked={this.state.checked2}
                        onPress={viaje.puntuacion=2, () => this.setState({ checked2: !this.state.checked2, checked1: false, checked3: false, checked4: false, checked5: false })}
                    />
                    <CheckBox
                        title='3 Estrellas'
                        checked={this.state.checked3}
                        onPress={() => this.setState({ checked3: !this.state.checked3, checked2: false, checked1: false, checked4: false, checked5: false })}
                    />
                    <CheckBox
                        title='4 Estrellas'
                        checked={this.state.checked4}
                        onPress={() => this.setState({ checked4: !this.state.checked4, checked2: false, checked3: false, checked1: false, checked5: false })}
                    />
                    <CheckBox
                        title='5 Estrellas'
                        checked={this.state.checked5}
                        onPress={() => this.setState({ checked5: !this.state.checked5, checked2: false, checked3: false, checked4: false, checked1: false })}
                    />

                </TouchableOpacity>

                <Button
                    title={viaje.puntuacion}
                    onPress={() => this.props.navigation.navigate("GraciasCambio", {viaje} )} />


            </ScrollView>
        )
    }
}

let styles = StyleSheet.create({
    puntos: {
        flexDirection: 'row',
        height: 35,
        justifyContent: 'center',
        textAlignVertical: 'center'
    }
})

export { misviajescambiapuntos }
