import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


function Home(): React.JSX.Element {
    const navigation = useNavigation<HomeScreenNavigationProp>(); // 네비게이션 타입 지정



  return (
    <View style={styles.container}>
      <Text>메인 페이지</Text>
      <Button
        title="디테일 페이지"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;