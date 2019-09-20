import React from 'react'
import {View, Text, StyleSheet, deviceWidth} from 'react-native';
import { Header, Icon,Button } from 'react-native-elements';


class misviajesHistorial extends React.Component {
    render() {
        return (
        <View>
        <Header
          placement="left"
          leftComponent={<Icon
            name='arrow-back' />}
          centerComponent={{ text: 'Elija un viaje', style: { color: '#fff' } }}
          rightComponent={
            <Button
              buttonStyle={{backgroundColor:'#fff'}}
              title='Facturar'
              type="outline"
            />
          }
        />
        <View style = {styles.container}>
          <Text style = {styles.texto} >   Taxi</Text>
          <Text style = {styles.texto} >           Flete</Text>
        </View>
      </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 60,
      width: deviceWidth,
      backgroundColor: '#bababa',
      borderBottomWidth: 1,
      borderBottomColor: '#e3e3e3'
    },
    texto: {
      marginTop: 17
  
    }
  })
