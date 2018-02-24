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
   ImageBackground,Dimensions,
   Button,Alert,TouchableHighlight,
   StatusBar,KeyboardAvoidingView,ScrollView
 } from 'react-native';
import { SearchBar,Card  } from 'react-native-elements';
import MapView from 'react-native-maps';

 export default class Body extends React.Component<{}> {

   constructor(props){
       super(props);
   }
   render() {

     return (

      <Card title= "Informacion Clinica">
        <View style={styles.mapContainer}>
          <MapView style={styles.map}
              region={{
                // latitude:this.props.lat,
                // longitude: this.props.long,
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0009,
                longitudeDelta: 0.0009,
              }}>
              <MapView.Marker
               coordinate={{
                 latitude: 37.78825,
                 longitude: -122.4324,
                }}
               title="Prueba"
               description="Otra Prueba"
             />
          </MapView>
        </View>
      </Card>
     );
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
 });

 module.exports = Body;
