import React, { useState, useEffect } from "react"
import {View,
        Text,
        TouchableOpacity,
        StyleSheet,
        Dimensions,
        TextInput} from "react-native"

const{ width, height } = Dimensions.get("window")

export default function ToDo(props) {

    const[editing, isEditing] = useState(false)
    const[completed, isCompleted] = useState(false)
    const[toDoValue, setToDoValue] = useState("asd")
    // const {text} = props

    return(
        <View style={styles.container}>
            <View style={styles.column}>
                <TouchableOpacity onPress={() => isCompleted(!completed)}>
                    <View style={[
                        styles.circle,
                        completed ? styles.completedCircle : styles.uncompletedCircle
                        ]}/>
                </TouchableOpacity>
                {editing ? <TextInput 
                    style={[styles.text, styles.input, completed ? styles.completedText : styles.uncompletedText]} 
                    value = {toDoValue} 
                    multiline={true}
                    onChangeText={text => setToDoValue(text)}
                    returnKeyType={"done"}
                    onBlur={() => {isEditing(false), setToDoValue(toDoValue)}}>
                </TextInput> : <Text style={
                    [styles.text,
                    completed ? styles.completedText : styles.uncompletedText]}>{toDoValue}</Text>}
            </View>
                {editing ? 
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={() => {
                                isEditing(false)
                            }}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>첵</Text>
                            </View>
                        </TouchableOpacity>
                    </View> : <View style={styles.actions}>
                        <TouchableOpacity onPressOut={() => isEditing(true)}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>연</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>엑</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    circle: {
      width: 35,
      height: 35,
      borderRadius: 30,
      borderWidth: 4,
      marginRight: 15,
      marginLeft: 5
    },
    completedCircle: {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "#f23657"
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    },
    completedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText: {
        color:"#353839",
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        width: width /2,
        justifyContent: "space-between"
    },
    actions: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    input: {
        width: width/2,
        marginVertical: 15,
        paddingBottom: 5
    }
})