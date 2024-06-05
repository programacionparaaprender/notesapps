import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import React from 'react';

import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <Header />
        <HomeScreen />
        <StatusBar style="auto" />
      </View>
    )
    
  }
  
}

export function App2() {
  return (
    <View style={styles.container}>
      <Header />
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
