import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailScreen: React.FC = () => {
    const navigation = useNavigation();
  
    return (
      <View>
        <Text>Detail Screen</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  
  export default DetailScreen;
