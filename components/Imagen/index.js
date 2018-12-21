import React from 'react';
import { Image } from 'react-native';

export default class Icono extends React.Component {
    render() {
        return (
            <Image 
                source={require('../../assets/images/smiley.png')}
                fadeDuration={0}
                style={{width: 120, height: 75 }}
            />
        );
    }
}