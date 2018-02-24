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
import Header from '../components/Header';
import Mid from '../components/Mid';
import Body from '../components/Body';

 export default class UserDetails extends React.Component<{}> {
   static navigationOptions = ({ navigation }) => ({
     title: "Inicio ",
     headerTintColor:'#50B19B',
     headerColor:'#50B19B',
   });
   constructor(props){
       super(props);
   }
   render() {
     const { params } = this.props.navigation.state;
     const Nombre = params ? params.patients.name.first : null;
     const Apellido = params ? params.patients.name.last : null;
     var completname= Nombre + " "+  Apellido;

     return (
<View style={styles.container}>
  <Header
    Avatar = {params.patients.picture.large}
    CompletName = {completname}
    Correo={params.patients.email}
    Telefono={params.patients.cell}
   />
     <Mid/>
   <Body/>


</View>


     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'#fff',
     alignItems :'center',
     justifyContent:'center'
   },


 });

 module.exports = UserDetails;
