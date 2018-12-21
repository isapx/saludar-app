import React from 'react';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';

import Boton from '../Boton';
import Imagen from '../Imagen';

class Saludar extends React.Component {
    render() {
        return(
            <View style={styles.contenedor}>
                <StatusBar barStyle={'light-content'} />
                <View style={styles.superior}>
                    <Text style={styles.letrasGrandes}>Saludar</Text>
                </View>
                <View style={styles.inferior}>
                    <Boton
                        iconName="star"
                        onPress={() => Alert.alert('Presionaste el smiley')}
                    />
                    <Imagen />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor:'#000000'        
    },
    superior: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inferior: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    letrasGrandes: {
        color: '#ffffff',
        fontSize: 120,
        fontWeight: '100'
    }
});

export default Saludar;