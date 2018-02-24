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
   ImageBackground,Dimensions,TouchableOpacity,
   Button,Alert,TouchableHighlight,
   StatusBar,KeyboardAvoidingView,ScrollView
 } from 'react-native';
import { SearchBar,Card  } from 'react-native-elements';
import MapView from 'react-native-maps';
import Note from './Note';

 export default class Body extends React.Component<{}> {

   constructor(props){
       super(props);
       this.state={
         noteArray:[],
         noteText:'',
       }
   }
   render() {
     let notes = this.state.noteArray.map((val,key) => {
       return <Note key={key} keyval={key} val={val}
       deleteMethod={()=> this.deleteNote(key)}/>
     });
     return (

      <Card title= "Informacion Clinica">
        <View>
          <Text>Historia Clinica</Text>
          <Text>{this.props.Historia}</Text>
        </View>

        
      </Card>
     );
   }

   addNote(){
     if(this.state.noteText){
       var d = new Date();
       var Fecha=d.getFullYear() + "/" + (d.getMonth()+1)+ "/"+ d.getDate();
       this.state.noteArray.push({
         'date':Fecha,
         'note':this.state.noteText
       });
       this.setState({noteArray:this.state.noteArray})
       this.setState({noteText:''});
     }
     alert( "Nota Creada "+"\n Fecha: "+Fecha+" Texto: "+this.state.noteText);
   }
   deleteNote(key){
     this.state.noteArray.splice(key,1);
     this.setState({noteArray: this.state.noteArray})
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
mapContainer:{
  position:'absolute',
  top:0,
  left:'40%',
  bottom:0,
  right:0,
  justifyContent:'flex-end',
  alignItems:'center'
},
mapView:{
  width:'100%',
  alignItems:'center',
  justifyContent:'center',
  height:100,
},
map: {
  position:'absolute',
  top:0,
  left:0,
  bottom:0,
  right:0
},
header: {
  backgroundColor: '#e91e63',
  alignItems:'center',
  justifyContent: 'center',
  borderBottomWidth: 10,
  borderBottomColor:'#ddd'
},
headerText: {
  color: 'white',
  fontSize: 20,
  padding:26,
},
scrollContainer: {
  flex: 1,
  marginBottom: 100,
},
footer: {
  position:'absolute',
  alignItems:'center',
  bottom:0,
  left:0,
  right:0,
},
addButton: {
  backgroundColor: '#e91e63',
  width:90,
  height:90,
  borderRadius:50,
  borderColor:'#ccc',
  alignItems:'center',
  justifyContent: 'center',
  elevation:8,
  marginBottom:45,
  zIndex:10,
  right:20,


},
addButtonText: {
  color:'#fff',
  fontSize:30,
},
textInput: {
  alignSelf:'stretch',
  color:'#fff',
  padding:20,
  paddingTop:46,
  backgroundColor:'#252525',
  borderTopWidth:2,
  borderTopColor:'#ededed',
},
 });

 module.exports = Body;
