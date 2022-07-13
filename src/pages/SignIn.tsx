import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const doneInput = email || password;

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);

  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(() => {
    Alert.alert('다시해', '이메일이 그게 맞냐?');
  }, []);

  DeviceInfo.getPhoneNumber().then(phoneNumber => {
    console.log('phoneNumber >> ', phoneNumber);
    // Android: null return: no permission, empty string: unprogrammed or empty SIM1, e.g. "+15555215558": normal return value
  });
  return (
    <View>
      <Text style={styles.label}>번호 내놔</Text>
      {/*<Text style={styles.label}>{DeviceInfo.getPhoneNumber()}</Text>*/}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>로그인</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력해주세요."
          onChangeText={onChangeEmail}
          value={email}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요."
          onChangeText={onChangePassword}
          secureTextEntry
          value={password}
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            !doneInput
              ? styles.loginButton
              : [styles.loginButton, styles.loginButtonActive]
          }
          disabled={!doneInput}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable>
          <Text>회원가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20,
  },
  textInput: {padding: 5, borderBottomWidth: StyleSheet.hairlineWidth},
  label: {fontWeight: 'bold', fontSize: 16, marginBottom: 20, color: '#000000'},
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },

  loginButtonText: {
    color: '#ffffff',
  },
  buttonZone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SignIn;
