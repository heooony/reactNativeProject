import React from "react"
import {View, Text, TouchavleOpacity, StyleSheet} from "react-native"
export default function ToDo() {
    return(
        <View>
            <Text style={styles.text}>Hello</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 50
    }
})