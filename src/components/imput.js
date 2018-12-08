import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class Imput extends React.Component {
  
  choosePlaceholderColor = () => {
    switch(this.props.placeholderColor) {
      default: 
        return '#000'; 
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.Imput} placeholder={this.props.placeholder}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      height:'12%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor:'red'
    },
    Imput:{
      width: '70%',
      height:50,
      alignSelf:'center',
      paddingLeft:10,
      borderRadius:10,
      backgroundColor:'#fff',
    }
  });
  
