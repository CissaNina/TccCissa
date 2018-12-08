import React from 'react';
import { StyleSheet, View, ImageBackground,TouchableHighlight, Image, Text } from 'react-native';

import Imput from '../components/imput';
// import Button from '../components/button';
import Texto from '../components/texto';
import Degrade from '../assets/fundo2.png';
import Book from '../assets/EDucação.png';
import WORK from '../assets/Ativo20.png';
import DESENVOLVIMENTO from '../assets/desenv.png';
import FAMILY from '../assets/family.png';
import SAUD from '../assets/saud.png'



export default class Objeto extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Degrade} 
        style={styles.bgimage}>
        <TouchableHighlight onPress={()=> console.log("called")}underlayColor='#FF9000' 
        style={styles.buttonEducation}> 
          <View style={styles.Tentativa}> 
            <Image source={Book} style={styles.ImgEducation}/>
            <Text h1>EDUCAÇÃO</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.body}>
          <TouchableHighlight onPress={()=> this.props.navigation.navigate(this.props.router)}underlayColor='#FF9000'  style={styles.buttonRetangular}> 
            <View style={styles.Tentativa2}> 
              <Image source={WORK} style={styles.ImgWork}/>
              <Text h1 style={styles.fontWork}>TRABALHO FINANCEIRO</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=> console.log("called")}underlayColor='#FF9000'  style={styles.buttonRetangularAzul}> 
            <View style={styles.Tentativa2}> 
              <Image source={DESENVOLVIMENTO} style={styles.ImgDesen}/>
              <Text h1 style={styles.fontDesen}>DESENVOLVIMENTO PESSOAL</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.body}>
          <TouchableHighlight onPress={()=> console.log("called")}underlayColor='#FF9000'  style={styles.buttonRetangularAzul}> 
            <View style={styles.Tentativa2}> 
              <Image source={SAUD} style={styles.ImgSaude}/>
              <Text h1>SAÚDE</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=> console.log("called")}underlayColor='#FF9000'  style={styles.buttonRetangular}> 
            <View style={styles.Tentativa2}> 
              <Image source={FAMILY} style={styles.ImgWork}/>
              <Text h1>FAMÍLIA</Text>
            </View>
          </TouchableHighlight>
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
    justifyContent: 'space-around'
  },
  bgimage:{
    flex:1,
    width:null,
  },
  buttonEducation:{
    width:'90%',
    height:200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    marginLeft: 18,
    marginTop: 20
  },
  Tentativa:{
    width:'60%',
    height:140,
    alignItems:'center',
    justifyContent:'space-around',
    // backgroundColor:'red'
  },

  Tentativa2:{
    width:'60%',
    height:110,
    alignItems:'center',
    justifyContent:'space-evenly',
    // backgroundColor:'red'
  },
  ImgEducation:{
    width:'40%',
    height:90
  },
  body:{
    width:'100%',
    flexDirection: 'row',
  },
  buttonRetangular:{
    width:'42.5%',
    height:130,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    marginLeft: 18,
    marginTop: 15
  },
  buttonRetangularAzul:{
    width:'42.5%',
    height:130,
    backgroundColor: '#2293D1',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    marginLeft: 18,
    marginTop: 15
  },
  ImgWork:{
    width:'65%',
    height:63
  },
  ImgDesen:{
    width:'65%',
    height:67
  },
  fontWork:{
    fontSize:12,
    textAlign:'center'
  },
  ImgSaude:{
    width: '80%',
    height:67
  },
  fontDesen:{
    fontSize:12,
    width: '150%',
    textAlign:'center'
  }
});