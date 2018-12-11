import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableHighlight, Text, Image } from 'react-native';

import Imput from '../components/imput';
import Button from '../components/button';
import Texto from '../components/texto';
import Degrade from '../assets/fundoinvertido.png';
import Logo from '../components/logo';
import Estacio from '../assets/estacio.png';
import Vnw from '../assets/vnw.png';


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Degrade} 
        style={styles.bgimage}>
        <Logo/>
            <Imput placeholder="Login"/>
            <Imput placeholder="Senha"/> 
            <Button text='ENTRAR'/>
            <Text h2 style={styles.TextoMeio}>OU</Text>
            <View style={styles.BoxButton}>
              <TouchableHighlight style={styles.buttonFb} onPress={() => console.log("called")}
        underlayColor='#FF9000'>
                <Text h1 style={styles.TextoFb}>FACEBOOK</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.buttonGm} onPress={() => console.log("called")}
        underlayColor='#FF9000'>
                <Text h1 style={styles.TextoGm}>GMAIL</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.BoxFooter}>
              <Text h2 style={styles.TextoDesen}>Desenvolvido por:</Text>
              <View style={styles.BoxLogo}>
                <Image source={Estacio} style={styles.LogoEstacio}/>
                <Image source={Vnw} style={styles.LogoVnw}/>
              </View>
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
  },
  bgimage:{
    flex:1,
    width:null,
    // opacity: 0.65
  },
  TextoMeio:{
    width:'97%',
    textAlign:'center'
  },
  BoxButton:{
    width:'70%',
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'yellow',
    marginLeft: 50,
    // marginTop:20
  },
  buttonFb:{
    width:'45%',
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0081C3',
    borderRadius: 10,
  },
  buttonGm:{
    width:'45%',
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10
  },
  TextoFb:{
    color:'#fff'
  },
  TextoGm:{
    color:'red'
  },
  TextoDesen:{
    // height:'8%',
    marginVertical:10,
    // backgroundColor:'pink',
    color:'#fff',
    fontSize:11,
    marginLeft: 30,
  },
  BoxFooter:{
    width:'60%',
    height:'15%',
    marginLeft:5,
    justifyContent:'space-around',
    // backgroundColor:'yellow',
    alignItems:'flex-start'
  },
  BoxLogo:{
    width:'60%',
    height:'30%',
    flexDirection:'row',
    // backgroundColor:'pink'

  },
  LogoEstacio:{
    width:'95%',
    height:'90%',
    resizeMode: 'contain'
  },
  LogoVnw:{
    width:'90%',
    height:'85%',
    resizeMode: 'contain'
  }
});