import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* 빈 화면 */}
      <View style={styles.container}>
        <Text>영광스러운 첫 시작이다~</Text>
      </View>
    </SafeAreaView>
  );
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
