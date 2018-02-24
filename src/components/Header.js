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
   StatusBar,KeyboardAvoidingView,
 } from 'react-native';
import { SearchBar,Card,FormLabel, FormInput  } from 'react-native-elements';


 export default class Header extends React.Component<{}> {

   constructor(props){
       super(props);
   }
   render() {

     return (
      <ImageBackground style={styles.headerBg}
          source={require('../img/Landscape.jpg')}>
        <View style={styles.headerContainer}>
          <View style={styles.profilePicContaine}>
            <Image  style={styles.avatar}  source={{uri: this.props.Avatar}}  />
          </View>
          <Text style={styles.name}> {this.props.CompletName} </Text>
          <Text style={styles.liner}> {this.props.Correo} | {this.props.Telefono}</Text>
        </View>
      </ImageBackground>
     );
   }
 }

 const styles = StyleSheet.create({
   headerBg: {
     flex: 1,
     width:null,
     alignSelf :'stretch',
   },
   headerContainer: {
     flex: 1,
     alignItems:'center',
     justifyContent :'center',
     padding:20,
     backgroundColor:'rgba(0,0,0,0.6)'
   },
   profilePicContaine: {
     width:180,
     height:180,
   },
   avatar: {
     flex: 1,
     width:null,
     alignSelf :'stretch',
     borderRadius:90,
     borderWidth:3,
     borderColor:'#fff'
   },
   name:{
     marginTop:20,
     fontSize:18,
     color:'#fff',
     fontWeight:'bold',
   },
   liner:{
     fontSize:15,
     color:'#fff',
     fontStyle:'italic',
   },

 });

 module.exports = Header;
