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
   ImageBackground,Dimensions,
   Button,Alert,TouchableHighlight,
   StatusBar,KeyboardAvoidingView,ScrollView
 } from 'react-native';
import { SearchBar,Card  } from 'react-native-elements';


 export default class Body extends React.Component<{}> {

   constructor(props){
       super(props);
   }
   render() {

     return (

      <Card title= "Informacion Clinica">
        <View style={styles.bigView}>
    <Text>
       Mapa Clinica
    </Text>
        </View>

      </Card>
     );
   }
 }

 const styles = StyleSheet.create({
   bigView: {
     flexDirection:'row',
     flexWrap:'wrap',
   },
smallView:{
  margin:2,
  height:100,
  width:(Dimensions.get('window').width/2) - 4,
},
textone:{
  color:'#fff',
  fontSize:14,
  marginTop:5,
},
myImage:{
  flex:1,
  width:null,
  alignSelf:'stretch'
},
stylesleftbar:{
  borderRightWidth:4,
  borderRightColor:'white',
},

 });

 module.exports = Body;
