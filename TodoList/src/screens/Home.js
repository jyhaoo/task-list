import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Task from '../components/Task';
import styles from '../styles/Home.style';

const Home = () => {
    const [tasks, setTasks] = useState(require('../Seed.json'))

    const renderTasks = ({ item }) => (
        <Task task={item} />
    );

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={tasks}
                renderItem={renderTasks}
                keyExtractor={task => task.id}
            />
            <Footer />
        </View>
    )
}

export default Home;