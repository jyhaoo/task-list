import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Task.style';

const Task = ({ task }) => {

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => console.log('IM PRESSED')}>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.desc}>{task.desc.substring(0, 69)}...</Text>
                <Text style={styles.date}>Created on {task.date}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Task;