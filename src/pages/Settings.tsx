import React, {useState} from 'react';
import {View, Text} from 'react-native';

function Settings() {
  const [count, setCount] = useState(10);

  return (
    <View>
      <Text onPress={() => setCount(v => v + 12)}>{count}</Text>
    </View>
  );
}

export default Settings;
