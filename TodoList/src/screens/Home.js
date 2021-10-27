import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Task from '../components/Task';
import styles from '../styles/Home.style';

const Home = ({ navigation }) => {
    const [tasks, setTasks] = useState(global.tasks);

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
            <Footer navigation={navigation} />
        </View>
    )
}

export default Home;