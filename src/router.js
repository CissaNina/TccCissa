import React from 'react';
import { 
  createSwitchNavigator,
  createStackNavigator,
  createTabNavegador,
  createDrawerNavigator,
} from 'react-navigation';

// Screens

import Avaliando from './screens/avaliando';
import Loading from './screens/loading';

import Login from './screens/login';
import Objeto from './screens/objeto';

import Perfil from './screens/perfil';
import Resultado from './screens/resultado';


const Navegador = createStackNavigator({
    Home: {
      screen: Loading,
      navigationOptions:{
        header: null
      }
    },
    
    Avaliando:{
      screen:Avaliando,
      navigationOptions:{
          header: null
        }
    },

    Objetivo:{
      screen:Objeto,
      navigationOptions:{
        header:null
      }
    }
});

export default Navegador;
// const Login = createSwitchNavigator({
//     Loading: {
//       screen: Loading,
//       navigationOptions: {
//         header: null
//       }
//     }, 
//     Login: {
//       screen: Login,
//       navigationOptions: {
//         header: null
//       }
//     }
//   },{
//     initialRouteName: 'Loading',
//   });
  