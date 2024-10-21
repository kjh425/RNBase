// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

function LoginScreen(): React.JSX.Element {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [id,setId] = useState('');
  const [pwd,setPwd] = useState('');

  const loginFunction = () => {
    Alert.alert('알림','로그인 구현중입니다.');
    console.log('입력한 id : ',id); 
    console.log('입력한 pw : ',pwd); 
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인 페이지</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디 입력"
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 입력"
        secureTextEntry={true}
        onChangeText={setPwd}
      />
      <Button
        title="로그인"
        onPress={loginFunction}
      />
      <View style={styles.spacer} />
      <Button
        title="메인으로 돌아가기"
        onPress={() => navigation.navigate('Home')}  // 홈 페이지로 돌아가기
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  spacer: {
    height: 20,
  },
});

export default LoginScreen;
