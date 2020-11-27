import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { 
  StyleSheet, 
  Text,
  TextInput, 
  View, 
  Dimensions,
  Platform, 
  ScrollView} from 'react-native';
import ToDo from './ToDo'

const {height, width} = Dimensions.get("window")

export default function App () {
  const[newToDo, setNewToDo] = useState("")
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>To do List</Text>
      <View style={styles.card}>
        <TextInput 
          style={styles.input} 
          placeholder={"new To do"} 
          // value={newTodo}
          onChangeText={text => setNewToDo(text)}
          placeholderTextColor={"#999"}
          returnKeyType={"done"}>
        </TextInput>
        <ScrollView>
          <ToDo />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center'
  },
  title: {
    color: "white",
    fontSize: 40,
    marginTop: 70,
    fontWeight: "100",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height:-1,
          width:0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  }
});
