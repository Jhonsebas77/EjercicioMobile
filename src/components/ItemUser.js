/*
 * Proyecto: Prueba FullStackMobile.
 * Empresa: Almundo
 * Responsable Proyecto: Sebastian Otalora
 * Responsable Contacto: jhonsebas77@outlook.com | 3217209516

    Banner en la pantalla de inicio

 */

import React, { Component } from 'react';
import {StyleSheet,ImageBackground,View,Image,Text,Dimensions} from 'react-native';
import { Rating,Card,Tile } from 'react-native-elements';

export default class ItemUser extends React.Component<{}> {
  render() {
var completname= this.props.name + " "+  this.props.last;
    return (
<View style={{padding:5}}>
        <ImageBackground
          source={{uri: this.props.imageSource}}
          style={styles.landscape} >
          <Text style={styles.overlayParagraph}>
            {completname}
          </Text>
        </ImageBackground>
</View>

    );
  }
}

const styles = StyleSheet.create({
  landscape:{
    width:200,
    alignItems:'center',
    justifyContent:'center',
    height:200,
  },
  overlayParagraph: {
    elevation:1,
    alignSelf:'center',
    fontSize:16,
    fontStyle:'italic',
    color:"#292929",
    textAlign:'center',
    padding:8,
    marginTop:150,
    backgroundColor:'rgba(255,255,255,0.6)',
    fontWeight:'bold',
    borderRadius:50,
  },
});

module.exports = ItemUser;
