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
import { SearchBar,Card,Header,FormLabel, FormInput,Slider  } from 'react-native-elements';
import FormLogin from '../components/FormLogin';

 export default class Login extends React.Component<{}> {
   static navigationOptions = ({ navigation }) => ({
        header:false,
      });

      constructor(props) {
        super(props);
        this.state = { nameInput: '', passwordInput:''};
      }


   render() {

     const { navigate } = this.props.navigation;
     var name=this.state.nameInput;
     var password=this.state.passwordInput;

     return (
       <View  style={styles.container}>

         <View style={styles.logoContainer}>
           <Image
             source= {require('../img/Logo.png')}
           />
          <Text style={styles.title}>A Simple App made with Love</Text>
          <Text>{this.state.nameInput}</Text>
          <Text>{this.state.passwordInput}</Text>

         </View>
         <View style={styles.formContainer}>
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
             onChangeText={(passwordInput) => this.setState({passwordInput})}
             value={this.state.passwordInput}
             returnKeyType="go"
             style={styles.input}
             />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                 this.props.navigation.navigate('HomeScreen', {
                   name:name,
                   password:password
                 });
               }}
               >
              <Text style={styles.buttonText}>Iniciar Sesion</Text>
            </TouchableOpacity>
         </View>

       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'#6DA29E'
   },
   logoContainer: {
     flexGrow:1,
     alignItems: 'center',
     justifyContent:'center'
   },
   logo: {
     width: 500,
     height:500
   },
   title:{
     color:'white',
   },
   formContainer:{
     flex:2,
   },
   buttonContainer:{
     backgroundColor:'green',
   },
   buttonText:{
     color:'white',
     textAlign:'center',
     fontWeight:'bold',
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

 module.exports = Login;
