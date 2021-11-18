import React from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component= {Signup}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name= "Checkout" component={Checkout}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;