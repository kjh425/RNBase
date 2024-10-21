import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();  // 타입 적용

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
