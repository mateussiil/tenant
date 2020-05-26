import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

import Login from './Pages/Login';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

import HousesList from './Pages/HouseList';
import House from './Pages/House';

export default function Routes(){
    return(
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Lista" component={HomeStackScreen} />
                <Tabs.Screen name="Profile" component={Profile} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

function HomeStackScreen() {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Lista" component={HousesList} />
            <HomeStack.Screen name="Details" component={House} />
        </HomeStack.Navigator>
    )
}

function ProfileStackScreen(){
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile} />
        </ProfileStack.Navigator>
    )
}