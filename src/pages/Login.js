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
         <Card containerStyle={{height:'100%', width:'90%',borderRadius:20}}>
         <View style={styles.logoContainer}>
           <Image
             source= {require('../img/Logo.png')}
           />
           <Text style={styles.title}>Medical Organizer (Beta)</Text>
         </View>
         <View style={styles.formContainer}>
           <TextInput
             placeholder="Nombre de Usuario"
             returnKeyType="next"
             onChangeText={(nameInput) => this.setState({nameInput})}
             value={this.state.nameInput}
             autoCapitalize="none"
             autoCorrect={false}
             style={styles.input}
              />
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
         </Card>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     alignItems:'center',
     flex: 1,
     backgroundColor:'#E8E8E8',
     padding:20,
     justifyContent:'center',
   },
   logoContainer: {
     flexGrow:1,
     margin:15,
     alignItems: 'center',
     justifyContent:'center',
   },
   logo: {
     width: 150,
     height:150
   },
   title:{
     color:'#03A9F4',
     marginTop:10,
     width:140,
     textAlign:'center',
   },
   formContainer:{
     padding:20,
     marginTop:30,
   },
   buttonContainer:{
     backgroundColor:'#03A9F4',
     paddingVertical:15,
   },
   buttonText:{
     color:'white',
     textAlign:'center',
     fontWeight:'700',
   },
   input: {
    width: '100%',
    backgroundColor:'rgba(0,0,0,0.3)',
    paddingLeft:10,
    paddingRight:10,
    marginBottom:15,
   },

 });

 module.exports = Login;
