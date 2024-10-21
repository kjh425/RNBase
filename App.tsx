import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

function App(): React.JSX.Element {
  return <StackNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // 배경을 흰색으로 설정
    justifyContent: 'center', // 세로로 가운데 정렬
    alignItems: 'center',     // 가로로 가운데 정렬
  },
});

export default App;
