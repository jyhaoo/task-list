import React from 'react';
import { Image, Touchable, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Footer.style';

const Footer = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => console.log('GO TO ADD PAGE')}>
                <Image source={require('../assets/Plus.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Footer;