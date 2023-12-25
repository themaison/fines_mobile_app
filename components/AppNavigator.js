import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import FineScreen from './FineScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Fine" component={FineScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );``
}

export default AppNavigator;
