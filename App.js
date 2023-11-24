import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {SafeAreaView, StyleSheet, Text, TextInput, Pressable} from 'react-native';
import Screen1 from './src/get.js';
import Screen2 from './src/post.js';
import Screen3 from './src/delete.js';
import Screen4 from './src/update.js';

const Tab = createBottomTabNavigator();
export default function App() {
return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Get" component={Screen1} />
      <Tab.Screen name="Post" component={Screen2} />
      <Tab.Screen name="Delete" component={Screen3} />
      <Tab.Screen name="Update" component={Screen4} />
    </Tab.Navigator>
  </NavigationContainer>
);
}


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

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.texto}> ID: </Text>
      <TextInput
        style={styles.input}
        onChangeText={ID}
        value={number}
        placeholder="Insira o ID que deseja ver"
        keyboardType="numeric"
      />
      <Button id="btn_get"> </Button>
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