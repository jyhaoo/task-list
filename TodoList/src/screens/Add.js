import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Add.style';

const Add = ({ navigation }) => {
    const [title, onChangeTitle] = useState('');
    const [desc, onChangeDesc] = useState('');
    const [deadline, onChangeDeadline] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleInput}
                onChangeText={onChangeTitle}
                value={title}
                placeholder={'Title'}
            />
            <TextInput
                multiline
                style={styles.descInput}
                onChangeText={onChangeDesc}
                value={desc}
                placeholder={'Description'}
            />
            <TextInput
                style={styles.titleInput}
                onChangeText={onChangeTitle}
                value={title}
                placeholder={'Deadline'}
            />
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>ADD TODO</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Add;