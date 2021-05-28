// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screens/Signup'
import Login from '../screens/Login'
import Home from '../screens/Home'
import AddChat from '../screens/Addchat'
import Chat from '../screens/Chat'

const Stack = createStackNavigator();
// const globalScreenOptions = () =>
//     headerStyle: { backgroundColor: 'blue' }
//     // headerTitleStyle: {color: 'white'},
//     // headerTintColor: 'white'
// 


function Config() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: '#2C6BED' },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            }} >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} options={{ title: 'Lets sign Up' }} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddChat" component={AddChat} />
                <Stack.Screen name="Chat" component={Chat} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Config;