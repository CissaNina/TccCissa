import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';

import Imput from '../components/imput';
// import Button from '../components/button';
import Texto from '../components/texto';
import Natureza from '../assets/natureza.png';
import Degrade from '../assets/fundo2.png';

import Menu from '../components/menu';



export default class Resultado extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  // static navigationOptions = ({navigation}) => ({
  //   title: 'Resultado'
  // });

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Degrade} 
        style={styles.bgimage}>
          <View style={styles.Box}>
            <View style={styles.boxConteudo}>
              <Image source={Natureza} style={styles.ImgResultado}/>
              <Text h1 style={styles.fontResultado}>
              Durante esta semana irá aprender mais sobre você mesmo ao final do curso faça o teste novamente.
              “Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo” – Winston Churchill
              </Text>
            </View>
          </View>
          <Menu/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width:'100%',
    height:'100%',
    // justifyContent: 'space-around'
  },
  bgimage:{
    flex:1,
    width:null,
  },
  Box:{
    width:'100%',
    height:'100%',
    // backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  boxConteudo:{
    width:'80%',
    height:'60%',
    borderRadius: 6,
    backgroundColor:'#fff',
    justifyContent:'flex-end',
    alignItems:'center',
    
  },
  ImgResultado:{
    width: '100%',
    height: '85%',
    resizeMode: 'contain',
    borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
  },
  fontResultado:{
    width:'90%',
    fontSize:12,
    paddingBottom: 30
  }
});
