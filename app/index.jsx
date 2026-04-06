Snack

No description

Edit details

Expo Docs
Save
Run on device
Download as zip
Show embed code


import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function Click(){
    setCount(count + 1);
  }
  
  function farm(){
      if(count < 20 && count > 10){
          setCount(count + 1)
      }
      
    
  }
  
  useEffect(() => {
      setTimeout(() => {
          farm()
      }, 1500)
  }, [count])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Look My First App!</Text>
      <Text style={styles.text}>Pages:</Text>
      
      <View style={styles.div}>
         <Text style={styles.pagesText}>Click</Text>
         <Text style={styles.pagesText}>Math</Text>
      </View>
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
    width: 300,
    height: 50,
    borderWidth: 3,
    borderColor: "e2e2e2",
    borderRadius: 15,
    transition: 350,
    display: "flex",
    justifyContent: "space-around",
    alignItens: "center",
    flexDirection: "row"
  },

  title:{
    color: "#e2e2e2",
    fontSize: 18,
    position: "fixed",
    top: 0
  },

  text:{
    color: "#e2e2e2",
    fontSize: 18,
    textAlign: "center",
    transition: 350
  },
  
  pagesText:{
    color: "#e2e2e2",
    textAlign: "center",
    paddingTop: 13,
    backgroundColor: "red",
    height: 45
    
  }
});

import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function Click(){
    setCount(count + 1);
  }
  
  function farm(){
      if(count < 20 && count > 10){
          setCount(count + 1)
      }
      
    
  }
  
  useEffect(() => {
      setTimeout(() => {
          farm()
      }, 1500)
  }, [count])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Look My First App!</Text>
      <Text style={styles.text}>Pages:</Text>
      
      <View style={styles.div}>
         <Text style={styles.pagesText}>Click</Text>
         <Text style={styles.pagesText}>Math</Text>
      </View>
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
    width: 300,
    height: 50,
    borderWidth: 3,
    borderColor: "e2e2e2",
    borderRadius: 15,
    transition: 350,
    display: "flex",
    justifyContent: "space-around",
    alignItens: "center",
    flexDirection: "row"
  },

  title:{
    color: "#e2e2e2",
    fontSize: 18,
    position: "fixed",
    top: 0
  },

  text:{
    color: "#e2e2e2",
    fontSize: 18,
    textAlign: "center",
    transition: 350
  },
  
  pagesText:{
    color: "#e2e2e2",
    textAlign: "center",
    paddingTop: 13,
    backgroundColor: "red",
    height: 45
    
  }
});

No errors, 1 warning



v54.0.0
0
