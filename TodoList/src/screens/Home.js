import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header';
import Task from '../components/Task';
import styles from '../styles/Home.style';

const Home = () => {
    const [tasks, setTasks] = useState(require('../Seed.json'))

    const loadTasks = () => {
        const data = require('../Seed.json');
        return (
            <View>{data.forEach((task) => <Task />)}</View>
        )
    }

    return (
        <View style={styles.container}>
            <Header />
            <Task />
        </View>
    )
}

export default Home;