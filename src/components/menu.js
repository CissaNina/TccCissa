import React, {Component} from  'react';
import { StyleSheet, View,Image } from 'react-native';

import What from '../assets/pergunta.png';
import Home from '../assets/Ativo8.png';
import Object from '../assets/Ativo7.png';
import Tarefa from '../assets/Ativo6.png';
import Sair from '../assets/port1.png';

export default class Menu extends React.Component { 
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.topo}>
            <Image source={Home} style={styles.topo2}/>
            <Image source={Object} style={styles.topo2}/>
            <Image source={What} style={styles.topo2}/>
            <Image source={Tarefa} style={styles.topo2}/>
            <Image source={Sair} style={styles.topo2}/>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        alignItems:'center',
        // backgroundColor: 'red',
        // alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    topo:{
      width:'100%',
      height:60,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      alignItems:'center',
      paddingLeft:'2%',
      justifyContent:'space-between'
    },
    topo2:{
      marginRight:20,
      width:'10%',
      height:43,
      resizeMode: 'contain'
    }  
});