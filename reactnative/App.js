import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [teste, setTeste] = useState(0);

  function add() {
    setTeste(teste+1)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={add}>
        <Text>Add +</Text>
      </TouchableOpacity>
      <Text>{teste}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
