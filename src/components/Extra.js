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
import { Card  } from 'react-native-elements';
import MapView from 'react-native-maps';

 export default class Extra extends React.Component<{}> {

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

      <Card title= "Donde esta el paciente?" containerStyle={{height:300, borderRadius:20}}>
        <View style={styles.mapContainer}>
            <MapView style={styles.map}
                region={{
                  latitude:this.props.Latitude,
                  longitude: this.props.Longitude,
                  latitudeDelta: 0.0009,
                  longitudeDelta: 0.0009,
                }}>
                <MapView.Marker
                 coordinate={{
                   latitude:this.props.Latitude,
                   longitude: this.props.Longitude,
                  }}
                 title="Paciente"
                 description={this.props.Nombre}
               />
            </MapView>
          </View>
      </Card>
     );
   }


 }

 const styles = StyleSheet.create({

mapContainer:{
  height: 400,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:20,
  marginBottom:20
},
mapView:{
  width:520,
  alignItems:'center',
  height:500,
},
map: {
  position:'absolute',
  top:0,
  left:0,
  bottom:0,
  right:0,
},

 });

 module.exports = Extra;
