import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NativeStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/stack';
import Login from './screens/Login';
import Home  from './screens/Home';

export default function App() {
  const MainStackNavigator = NativeStackNavigator();

  return (
    <View style={{flex:1,}} >
      <NavigationContainer>
         <MainStackNavigator.Navigator screenOptions={{headerShown: false}}
          initialRouteName= "Login">
          <MainStackNavigator.Screen name="Login" component= {Login} / >
          <MainStackNavigator.Screen name="Home" component= {Home} / >
         </MainStackNavigator.Navigator>
      </NavigationContainer>
      
    </View>
  );
}


