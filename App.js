import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text,
  TextInput, 
  View, 
  Dimensions,
  Platform, 
  ScrollView} from 'react-native';
import ToDo from './ToDo'
import {AppLoading} from "expo"
import uuidv1 from "uuid/v1"
const {height, width} = Dimensions.get("window")

export default function App () {
  const[newToDo, setNewToDo] = useState("")
  const[loadedToDos, setLoadedToDos] = useState(true)
  const[toDos, setToDos] = useState("")

  useEffect(() => {
    console.log(toDos)
  });

  const _addToDo = () => {
    if(newToDo !== "") {
      //_addToDo.bind(newToDo)
      setToDos(prevState => {
        const ID = uuidv1()
        const newToDoObject = {
          [ID]: {
            id: ID,
            isCompleted: false,
            text:newToDo,
            createdAt: Date.now()
          }
        }
        const newState = {
          ...prevState,
          toDos: {
            ...prevState.toDos,
            ...newToDoObject
          }
        }
        setNewToDo("")
        return {...newState}
      })
    }
  }

  if(!loadedToDos) {
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>To do List</Text>
      <View style={styles.card}>
        <TextInput 
          style={styles.input} 
          placeholder={"New To Do"} 
          value={newToDo}
          onChangeText={text => setNewToDo(text)}
          placeholderTextColor={"#999"}
          returnKeyType={"done"}
          autoCorrect={false}
          onSubmitEditing={_addToDo}>
        </TextInput>
        <ScrollView contentContainerStyle={styles.toDos}>
          {Object.values(toDos.toDos).map(toDo => <ToDo key={toDo.id} {...toDo} />)}
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
  },
  toDos: {
    alignItems: "center"
  }
});
