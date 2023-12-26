import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import FinesScreen from '../screens/FinesScreen';
import FineScreen from '../screens/FineScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Fines" component={FinesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Fine" component={FineScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );``
}

export default AppNavigator;
