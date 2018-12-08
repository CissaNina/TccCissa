import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';

import Degrade from '../assets/fundo2.png';
import LogoPrincipal from '../assets/logo-jc.png';



export default class Loading extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Degrade} 
        style={styles.bgimage}>
         <View style={styles.BoxLogo}>
            <Image source={LogoPrincipal} style={styles.ImgLogo}/>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    justifyContent: 'center',
},
bgimage:{
    flex:1,
    width:null,
    // opacity: 0.65
},
BoxLogo:{
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent:'center',
    // backgroundColor: 'red'

  },
  ImgLogo:{
      width: '60%',
      height: '45%',
      resizeMode: 'contain'
  }
  
});
