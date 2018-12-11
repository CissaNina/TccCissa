// import React, { Component } from 'react';
// import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// // import { connect } from 'react-redux';



// import ImageCheck from '../assets/ponto.png';

// class AcaoSocialScreen extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       input: false,
//       agreement: false,
//     }

//     this.handleAgreement = this.handleAgreement.bind(this);
//   }

//   handleAgreement() {
//     this.setState({
//       agreement: !this.state.agreement,
//     });
//   }

//   renderAgreementMessage() {
//     const { agreement } = this.state;

//     return (
//       <TouchableOpacity
//         style={styles.agreementContainer}
//         onPress={this.handleAgreement}>
//         <View
//           style={styles.agreementCheck}
//         >
//           {agreement ? <Image source={ImageCheck} style={styles.imageCheck}/> : null}
//         </View>
//         <Text
//           style={styles.agreementText}>
//          Eu sinto bem estar no meu dia a dia?
//         </Text>
//       </TouchableOpacity>
//     )
//   }

//   render() {
//     const { user } = this.props;

//     return (
//       <ScrollView>
//        <View style={styles.caseBtn}>
//           {this.renderAgreementMessage()}
//         </View>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create ({
//   container: {
//     flex: 1,
//   },
//   agreementContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '80%',
//     marginHorizontal: '15%',
//     marginTop: 30,
//     marginBottom: 20,    
//   },
//   agreementCheck: {
//     // width: 25,
//     width:'5%', 
//     height: '40%',
//     marginRight: 10,
//     borderWidth: 1,
//     backgroundColor:'#fff' ,
//     borderRadius:20
//   },
//   imageCheck: {
//     width: 37,
//     height: 37,
//     resizeMode: 'contain',
//   },
// //   agreementText: {
// //     fontSize: 19,
// //   },
// });

// export default AcaoSocialScreen;