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
   StatusBar,KeyboardAvoidingView,ScrollView,TouchableOpacity
 } from 'react-native';
import { List,ListItem,SearchBar,Card,Icon,FormLabel, Badge,FormInput,Divider  } from 'react-native-elements';


 export default class Mid extends React.Component<{}> {

   constructor(props){
       super(props);
   }
   render() {



     return (


       <Card style={styles.container} title="Informacion">
           <View style={styles.detaContainer}>
             <Icon reverse
               name='gender-male-female'
               type='material-community'
               color='#f50'
             />
             <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
               <Text >Genero</Text>
               <Text style={styles.badgeText}>{this.props.Genero}</Text>
             </Badge>
             <Icon reverse
               name='comment-account'
               type='material-community'
               color='#f50'/>
             <Badge containerStyle={styles.badge} wrapperStyle={styles.badgeExt}>
               <Text>Edad</Text>
               <Text style={styles.badgeText}>{this.props.Edad}</Text>
             </Badge>
             <View style={{padding:10 }}>
               <Divider style={styles.divider}/>
             </View>
           </View>
          <Divider style={styles.divider}/>
        <View style={styles.textContainerBig}>
           <View style={styles.textContainerSmall}>
             <Text style={styles.textTitle}>Direccion</Text>
             <Text style={styles.textSubTitle}>{this.props.Direccion}</Text>
             <Divider style={styles.divider}/>
           </View>
           <View style={styles.textContainerSmall}>
            <Text style={{fontWeight:'bold'}}>Telefono</Text>
            <Text>{this.props.TelefonoFijo}</Text>
            <Divider style={styles.divider}/>
           </View>
        </View>
        <View style={styles.textContainerBig}>
          <View style={styles.textContainerSmall}>
           <Text style={{fontWeight:'bold'}}>Ciudad</Text>
           <Text>{this.props.Ciudad}</Text>
           <Divider style={styles.divider}/>
          </View>
          <View style={styles.textContainerSmall}>
            <Text style={{fontWeight:'bold'}}>Pais</Text>
            <Text>{this.props.Pais}</Text>
            <Divider style={styles.divider}/>
          </View>
        </View>
      <View style={{alignItems:'center'}}>
         <Text style={{fontWeight:'bold'}}>Identificacion</Text>
         <Text>{this.props.Identificacion}</Text>
         <Divider style={styles.divider}/>
      </View>

       </Card>
     );
   }
 }

 const styles = StyleSheet.create({
   container:{
     flex:1,
     alignItems:'center',
     backgroundColor:'#6DA29E',
     width:'100%',
   },
   detaContainer:{
     padding:5,
     alignItems:'center',
     flexDirection:'row',
      justifyContent:'center'
   },
   badge:{
     backgroundColor: '#c8c7c8',
   },
   divider:{
     backgroundColor: 'red',
     marginTop:10,
   },
   badgeExt:{
     padding:5,
   },
   badgeText:{
     color:'black',
     fontWeight:'bold',
     fontSize:15,
   },
   textContainerBig:{
     flexDirection:'row',
     justifyContent:'center'
   },
     textContainerSmall:{
     alignItems:'center',
     alignSelf:'center',flex:2
   },
   textTitle:{
     fontWeight:'bold'
   },
   textSubTitle:{
     textAlign:'center'
   },
 });

 module.exports = Mid;
