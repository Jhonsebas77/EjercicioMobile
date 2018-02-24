/*
 * Proyecto: Prueba FullStackMobile.
 * Empresa: Almundo
 * Responsable Proyecto: Sebastian Otalora
 * Responsable Contacto: jhonsebas77@outlook.com | 3217209516
 * Vista principal
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,Text,
   View,Image,TextInput,
   ImageBackground,
   Button,Alert,TouchableHighlight,
   StatusBar,KeyboardAvoidingView,ScrollView,
 } from 'react-native';
import { List,ListItem,SearchBar,Card,FormLabel, FormInput  } from 'react-native-elements';


 export default class Mid extends React.Component<{}> {

   constructor(props){
       super(props);
   }
   render() {

     const list = [
       {
         name: 'Aplicacion de Notas',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
         subtitle: 'Nunca olvides nada!',
         icon: 'av-timer'
       },
       {
         name: 'Chris Jackson',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
         subtitle: 'Vice Chairman',
         icon: 'flight-takeoff'
       },
       {
         name: 'Chris Jackson',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
         subtitle: 'Vice Chairman',
         icon: 'flight-takeoff'
       },
       {
         name: 'Chris Jackson',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
         subtitle: 'Vice Chairman',
         icon: 'flight-takeoff'
       },
     ]

     return (


  <Card title="Informacion" style={styles.mid} >
    <Text>
      HPuta
    </Text>
  </Card>
     );
   }
 }

 const styles = StyleSheet.create({
   mid: {
     flex: 1,
     width:500,
     height: 500,
     borderTopWidth:10,
   },
outerView:{
  flex:1,
  alignItems:'center'
},
textone:{
  color:'#fff',
  fontSize:14,
  marginTop:5,
},
texttwo:{
  color:'#fff',
  fontSize:14,
  marginTop:5,
},
stylesleftbar:{
  borderRightWidth:4,
  borderRightColor:'white',
},

 });

 module.exports = Mid;
