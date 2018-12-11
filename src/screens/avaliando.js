import React from 'react';
import { StyleSheet, View, ImageBackground, Botton} from 'react-native';
import Texto from '../components/texto';
import Degrade from '../assets/fundo2.png';
import CheckBoxC from '../components/CheckBox';

import Menu from '../components/menu';


// import{StackNavigator} from 'react-navigation'


export default class Avaliando extends React.Component {
  // static navigationOptions = ({navigation}) =>({

  // });
  // constructor(props){
  //   super(props)
  //   this.state = { 
  //     fundoBola:''
  //   }
  // }

  

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Degrade} 
        style={styles.bgimage}>
        <View style={styles.boxTemp}>
          <View>
            <Texto text='Eu sinto bem estar no meu dia a dia?' textColor='white'/>
            <View style={styles.boxSequencePoint}>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
            </View>
          </View>
          <View>
            <Texto text='A escola é importante na minha vida? ' textColor='white'/>
            <View style={styles.boxSequencePoint}>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
            </View>
          </View>
          <View>
            <Texto text='Minha motivação para terminar os estudos.' textColor='white'/>
            <View style={styles.boxSequencePoint}>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
            </View>
          </View> 
          <View>
            <Texto text='Como é a minha relação familiar?' textColor='white'/>
            <View style={styles.boxSequencePoint}>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
            </View>
          </View>
          <View>
            <Texto text='Você se acha criativo?' textColor='white'/>
            <View style={styles.boxSequencePoint}>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
              <View style={styles.point}></View>
            </View>
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
    justifyContent: 'space-around'
  },
  bgimage:{
    flex:1,
    width:null,
  },
  boxTemp:{
    width:'100%',
    height: '70%',
    marginTop:50,
    justifyContent:'space-between',
    paddingLeft:8,
    
    //backgroundColor:'blue'
  },
  boxSequencePoint:{
    width:'95%',
    height:'20%',
    flexDirection:'row',
    justifyContent:'space-around',


    //backgroundColor:'red'
  },
  point:{
    width:'5%', 
    height:'100%',
    backgroundColor:'#fff' ,
    borderRadius:20
  }
});
