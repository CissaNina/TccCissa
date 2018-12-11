// import React, { Component } from 'react';
// import { 
//   createSwitchNavigator,
//   createStackNavigator
// } from 'react-navigation';
// import { TouchableOpacity, View, Text } from 'react-native';

// // Screens
// import Loading from './screens/loading';
// import Login from './screens/login';
// import Perfil from './screens/perfil';
// import Objeto from './screens/objeto';
// import Avaliando from './screens/avaliando';
// import Resultado from './screens/resultado';

// const Navegador = createStackNavigator({
//   Main: {
//     screen: Login,
//     navigationOptions: {
//       header: null
//     }
//   },  
//   Perfil: {
//   screen: Perfil,
//   navigationOptions: {
//     header: null
//   }
//   },
//   Objeto:{
//   	screen: Objeto,
//     navigationOptions: {
//       header: null
//     }
// 	},
//   Avaliando:{
//     screen: Avaliando,
//     navigationOptions: {
//       header: null
//     }
//   },
//   Resultado:{
//     screen: Resultado,
//     navigationOptions: {
//       header: null
//     }
//   }
// }, {
//   mode: 'card',
//   initialRouteName: 'Main',
//   //headerMode: 'float',
//   navigationOptions:{
//     headerStyle:{
//       backgroundColor: '#3913B3'
//     },
//     headerTintColor:'#FFF'
//   }
// });

// const MainStack = createSwitchNavigator({
//   Validated: Navegador
// },{
//   initialRouteName: 'Validated',
// });

// export default MainStack;


// import React, { Component } from 'react';
// import { 
//   createStackNavigator
// } from 'react-navigation';
// import {  View, Text } from 'react-native';

// class TelaInicial extends Component {
//   static navigationOptions = ({navigation}) => ({
//     title: 'Ate q enfim'
//   });

//   render() {
//     return (
//       <View>
//         <Text> Obaaaa</Text>
//       </View>
//     );
//   }
// }

// const Navegador = createStackNavigator({
//   Home: {
//     screen: TelaInicial
//   }
// });

// export default Navegador;


