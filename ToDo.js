import React, { useState } from "react"
import {View,
        Text,
        TouchavleOpacity,
        StyleSheet,
        Dimensions} from "react-native"

const{ width, height } = Dimensions.get("window")

export default function ToDo() {
    const[editing, isEditing] = useState("")
    return(
        <View style={style.container}>
            <TouchableOpacity>
                <View style={styles.circle}/>
            </TouchableOpacity>
            <Text style={style.text}>Hello</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 20,
      borderColor: "red",
      borderWidth:5,
      marginRight: 20
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    }
})