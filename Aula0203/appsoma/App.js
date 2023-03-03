import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';


export default function App() {
const [num1,setNum1] = useState('');
const [num2,setNum2] = useState('');

function soma(){
  const resultado = parseFloat(num1) + parseFloat(num2);
  alert('O resultado é: '+resultado);
}

function sub(){
  const resultado = parseFloat(num1) - parseFloat(num2);
  alert('O resultado é: '+resultado);
}

function mul(){
  const resultado = parseFloat(num1) * parseFloat(num2);
  alert('O resultado é: '+resultado);
}

function div(){
  const resultado = parseFloat(num1) / parseFloat(num2);
  alert('O resultado é: '+resultado);
}
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}> Soma de Valores </Text>
      <TextInput style={styles.input0} onChangeText={(num1)=>setNum1(num1)} keyboardtype='numeric' placeholder="Digite um número:" />
      <TextInput style={styles.input1} onChangeText={(num2)=>setNum2(num2)} keyboardtype='numeric' placeholder="Digite um número:" />
      <TouchableOpacity style={styles.btnSm} onPress={soma}>
        <Text style={styles.titulobtn}> Somar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSb} onPress={sub}>
        <Text style={styles.titulobtn}> Subtrair </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnMp} onPress={mul}>
        <Text style={styles.titulobtn}> Multiplicar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnDv} onPress={div}>
        <Text style={styles.titulobtn}> Dividir </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  
  input0: {
    backgroundColor: '#ffaa33',
    borderRadius: 15,
    margin: 30,
    padding: 10,
    fontSize: 30
  },

input1: {
    backgroundColor: '#a3b567',
    borderRadius: 25,
    margin: 35,
    padding: 10,
    fontSize: 30
  },

  btnSm: {
    alignItems: "center",
    backgroundColor: "#ff0000",
    margin: 35,
    borderRadius: 10,
    padding: 15
  },

  btnSb: {
    alignItems: "center",
    backgroundColor: "#ff0000",
    margin: 35,
    borderRadius: 10,
    padding: 15
  },

  btnMp: {
    alignItems: "center",
    backgroundColor: "#ff0000",
    margin: 35,
    borderRadius: 10,
    padding: 15
  },

  btnDv: {
    alignItems: "center",
    backgroundColor: "#ff0000",
    margin: 35,
    borderRadius: 10,
    padding: 15
  },


  titulobtn: {
    fontSize: 34,
    borderRadius: 15
  }
});
