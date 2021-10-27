import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Add from './screens/Add';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const blankStyle = {
        title: '',
        headerStyle: { backgroundColor: '#696969' },
        headerLeft: null
    };
    const addStyle = {
        title: 'Add',
        headerTitleStyle: { fontFamily: 'bebas neue', fontWeight: '900', fontSize: 28 },
        headerStyle: { backgroundColor: '#BADA55' },
        headerLeft: null
    }

    return (
        <Stack.Navigator initialRouteName='Add'>
            <Stack.Screen name='Home' component={Home} options={blankStyle} />
            <Stack.Screen name='Add' component={Add} options={addStyle} />
        </Stack.Navigator>
    )
}

export default AppNavigator;