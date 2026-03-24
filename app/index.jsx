import { StyleSheet, View, Text } from "react-native";


export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Hi Everyone!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})