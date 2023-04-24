import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const somar = () => {
    const resultadoSoma = parseFloat(num1) + parseFloat(num2);
    setResultado(resultadoSoma);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo</Text>
      <Input
        label="Valor 1"
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
        containerStyle={styles.inputContainer}
      />
      <Input
        label="Valor 2"
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
        containerStyle={styles.inputContainer}
      />
      <Button title="Somar" onPress={somar} buttonStyle={{backgroundColor:'purple'}} />
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'purple',

  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  resultado: {
    marginTop: 20,
    
  },
});