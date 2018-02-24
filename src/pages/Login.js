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
 import {Card} from 'react-native-elements';

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
         <StatusBar
          barStyle="light-content"
         />
         <View style={styles.logoContainer}>
           <Image
             source= {require('../img/Logo.png')}
           />
           <Text style={styles.title}>Medical Organizer (Beta)</Text>
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
     backgroundColor:'#3498db'
   },
   logoContainer: {
     flexGrow:1,
     alignItems: 'center',
     justifyContent:'center'
   },
   logo: {
     width: 150,
     height:150
   },
   title:{
     color:'white',
     marginTop:10,
     width:140,
     textAlign:'center',
   },
   formContainer:{
     padding:20,
   },
   buttonContainer:{
     backgroundColor:'#2980b9',
     paddingVertical:15,
   },
   buttonText:{
     color:'white',
     textAlign:'center',
     fontWeight:'700',
   },
   input: {
    width: '100%',
    backgroundColor:'rgba(255,255,255,0.2)',
    paddingLeft:10,
    paddingRight:10,
    marginBottom:15,
   },
   label: {
     alignItems: 'center',
     textAlign:'center',
     color:'black',
     fontWeight:'bold',
   },

 });

 module.exports = Login;
