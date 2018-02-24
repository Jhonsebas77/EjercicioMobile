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
   Button,Alert,TouchableOpacity,
   StatusBar,KeyboardAvoidingView,Dimensions
 } from 'react-native';
import { SearchBar,Card,Header,FormLabel, FormInput  } from 'react-native-elements';
import { Icon } from 'react-native-elements';

 export default class Navbar extends React.Component<{}> {
   constructor(props) {
     super(props);
     this.state = { nameInput: '', passwordInput:''};
   }
   render() {
     return (
       <View style={styles.container}>
         <View style={styles.navbar}>
           <Image source= {require('../img/Logo.png')} style = {styles.logo} />
           <Text>Title App</Text>
           <View style={styles.moveRight}>
             <View style={{flexDirection:'column',alignItems:'center'}}>
               <Icon name="account-circle" size={50} style={styles.icon}/>
               <Text>{this.props.name}</Text>
            </View>
           </View>
         </View>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {

   },
   navbar: {
    marginTop: 2,
    marginLeft:2,
    marginRight:2,
    height:100,
    backgroundColor:'rgba(255,255,255,0.3)',
    elevation:3,
    width:'100%',

    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
   },
   logo: {
     height: 50,
     width:50,
   },
   moveRight: {
      flexDirection:'row',
   },


 });
