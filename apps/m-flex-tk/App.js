import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Hello World</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Button title={"Yes"} onPress={() => alert("test")}>
                    Test
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
