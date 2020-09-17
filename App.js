
import React from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';

import profile from "./assets/juvinalle1.jpg"

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.image} />  

      <View style={styles.datailsContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={[styles.label,styles.info]} >Alfred</Text>
      </View>

      <View style={styles.datailsContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={[styles.label,styles.info]} >alfred@gmail.com</Text>
      </View>

      <View style={styles.datailsContainer}>
        <Text style={styles.label}>Gender</Text>
        <Text style={[styles.label,styles.info]} >Male</Text>
      </View>
    </View> 
  );
}




const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"lawngreen"
  },

  image:{
    marginTop:100,
    width:150,
    height:150,
    bottom:30,
    alignSelf:'center',
    borderRadius:75
  },

  label:{
    borderBottomColor:"black",
    borderWidth:1,
    flex:2.5,
    fontSize:20,
    paddingHorizontal:5,
    backgroundColor:"lightblue"

  },
  
  datailsContainer:{
    flexDirection:"row",
    marginVertical:4
  },

  info:{
     flex:7.5,
     backgroundColor:"black",
     color:"white"
  }

})

 