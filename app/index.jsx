import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import McQueen from "../assets/img/McQueen.webp"

export default function App() {
  const [count, setCount] = useState(0);

  function Click(){
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Look My First App!</Text>
      <Image style={styles.img} source={McQueen}/>

      <View style={styles.div}>
        <Text style={styles.text} onPress={Click}>Click Me! {count}</Text>
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  div:{
    backgroundColor: '#4e4e4e',
    width: 400,
    height: 50,
    borderWidth: 3,
    borderColor: "e2e2e2"
  },

  title:{
    color: "#e2e2e2",
    fontSize: 18,
    position: "fixed",
    top: 10
  },

  text:{
    color: "#e2e2e2",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 10
  },

  img:{
    marginBottom: 100,
    width: 300,
    height: 200
  }
});
