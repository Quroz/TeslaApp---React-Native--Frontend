import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground} from 'react-native';
import CarsList from './components/CarsList';
import Header from "./components/Header"
export default function App() {

 

  
  return (
    <View style = {styles.container}>
      <Header/>
     
    <CarsList/>

    </View>
      
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    justifyContent: 'center',
    alignItems: 'center',
    }, 

  
   
});
