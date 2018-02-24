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
   StatusBar,KeyboardAvoidingView,ScrollView
 } from 'react-native';
import { SearchBar,Card,FormLabel, FormInput  } from 'react-native-elements';
import Header from '../components/Header';
import Mid from '../components/Mid';
import Body from '../components/Body';
import Extra from '../components/Extra';

 export default class UserDetails extends React.Component<{}> {
   static navigationOptions = ({ navigation }) => ({
     title: "Pacientes ",
     headerTintColor:'#50B19B',
     headerColor:'#50B19B',
   });
   constructor(props){
       super(props);
   }
   render() {
     const { params } = this.props.navigation.state;
     console.log(params);
     const Nombre = params ? params.pacientes.name.first : null;
     const Apellido = params ? params.pacientes.name.last : null;
     var completname= Nombre + " "+  Apellido;

     return (
       <ScrollView>
<View style={styles.container}>
  <View style={styles.section}>
    <Header
      Avatar = {params.pacientes.picture.large}
      CompletName = {completname}
      Correo={params.pacientes.email}
      Telefono={params.pacientes.cell}
     />
  </View>
  <View style={styles.section}>
    <Mid
      Direccion={params.pacientes.location.street}
      TelefonoFijo={params.pacientes.phone}
      Ciudad={params.pacientes.location.city}
      Pais={params.pacientes.location.state}
      Genero={params.pacientes.gender}
      Identificacion={params.pacientes.login.salt}
      Edad={params.pacientes.age}
    />
  </View>
  <View style={styles.section}>
      <Body
      Historia={params.pacientes.description}
    />
  </View>
  <View style={styles.section}>
      <Extra
        Latitude={params.pacientes.location.latitude}
        Longitude={params.pacientes.location.longitude}
        Nombre={completname}
      />
  </View>
</View>
</ScrollView>

     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'#E8E8E8',
     alignItems :'center',
     justifyContent:'center'
   },

   section:{
     width:'100%',
     marginBottom:10,
   },


 });

 module.exports = UserDetails;
