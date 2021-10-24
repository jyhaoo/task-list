import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Header.style';

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>LIST OF TODO</Text>
            <Image source={require('../assets/Union.png')} style={styles.union} />
            <TouchableOpacity
                style={styles.settingsContainer}
                onPress={() => console.log('Settings pressed')}
            >
                <Image source={require('../assets/Settings.png')} style={styles.settings} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;