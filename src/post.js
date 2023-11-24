import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, Pressable} from 'react-native';
 
function Button(props) {
  const {onPress, title = 'ENVIAR'} = props;
  return (
    <Pressable style={styles.botao} onPress={onPress}> 
    <Text style={styles.text}> {title} </Text> 
    </Pressable>
  );
}
 
const TextInputExample = () => {
  const [number, ID] = React.useState('');
  const [text, Nome] = React.useState('');
  const [texto, Endereco] = React.useState('');
  const [num, Telefone] = React.useState('');
 
  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.texto}> ID: </Text>
      <TextInput
        style={styles.input}
        onChangeText={ID}
        value={number}
        placeholder="Insira seu ID"
        keyboardType="numeric"
      />
      <Text style={styles.texto}> Nome: </Text>
      <TextInput
        class="nome"
        style={styles.input}
        onChangeText={Nome}
        value={text}
        placeholder="Insira seu nome"
      />
      <Text style={styles.texto}> Endereço: </Text>
      <TextInput
        class="endereco"
        style={styles.input}
        onChangeText={Endereco}
        value={texto}
        placeholder="Insira seu endereço"
      />
      <Text style={styles.texto}> Telefone: </Text>
      <TextInput
        class="telefone"
        style={styles.input}
        onChangeText={Telefone}
        value={num}
        placeholder="Insira seu telefone"
        keyboardType="numeric"
      />
      <Button id="btn_post"> </Button>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  safe: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
  },
  texto: {
    margin: 10,
  },
  input: {
    height: 40,
    width: 380,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 380,
    margin: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: '#5a5ae1',
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#e6e6e6',
  },  
});
 
export default TextInputExample;