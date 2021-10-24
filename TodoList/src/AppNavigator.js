import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    const blankStyle = {
        title: '',
        headerStyle: { backgroundColor: '#696969' },
        headerTitleStyle: { fontFamily: 'bebas neue', fontWeight: '900', color: '#BADA55', fontSize: 28 },
        headerLeft: null
    };

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={blankStyle} />
        </Stack.Navigator>
    )
}

export default AppNavigator;