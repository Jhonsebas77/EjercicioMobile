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
   StatusBar,KeyboardAvoidingView,
 } from 'react-native';
import { SearchBar,Card,Header,FormLabel, FormInput  } from 'react-native-elements';
 export default class FormLogin extends React.Component<{}> {
   constructor(props) {
     super(props);
     this.state = { nameInput: '', passwordInput:''};
   }
   render() {
     return (
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            placeholder="Nombre de Usuario"
            returnKeyType="next"
            onChangeText={(nameInput) => this.setState({nameInput})}
            value={this.state.nameInput}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
             />
          <Text style={styles.label}>Clave</Text>
          <TextInput
            placeholder="Clave de Usuario"
            secureTextEntry
            returnKeyType="go"
            onChangeText={(passwordInput) => this.setState({passwordInput})}
            value={this.state.passwordInput}
            style={styles.input}
            />

       </KeyboardAvoidingView>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding:20,
   },
   input: {
    width: '100%',
    backgroundColor:'rgba(255,255,255,0.3)',
    paddingLeft:10,
    paddingRight:10,
    marginBottom:15,
   },
   label: {
     alignItems: 'center',
     textAlign:'center',
     color:'white',
     fontWeight:'bold',
   },


 });
