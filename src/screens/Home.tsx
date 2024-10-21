// Home.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function Home(): React.JSX.Element {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>준한이의 앱프로젝트</Text>
      <Button
        title="디테일 페이지"
        onPress={() => navigation.navigate('Detail')}
      />
      <View style={styles.spacer} />
      <Button
        title="로그인하러 가기"
        onPress={() => navigation.navigate('Login')}  // 로그인 페이지로 이동
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  spacer: {
    height: 20,  // 버튼 사이에 여백 추가
  },
});

export default Home;
