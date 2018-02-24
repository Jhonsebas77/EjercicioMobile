/*
 * Proyecto: Prueba FullStackMobile.
 * Empresa: Almundo
 * Responsable Proyecto: Sebastian Otalora
 * Responsable Contacto: jhonsebas77@outlook.com | 3217209516

    Banner en la pantalla de inicio

 */

import React, { Component } from 'react';
import {StyleSheet,ImageBackground,View,Image,Text} from 'react-native';
import { Rating,Card } from 'react-native-elements';

export default class ItemSong extends React.Component<{}> {
  render() {
    return (
      <Card containerStyle={{
        height:200,
        padding:0,
        flexDirection:'column',
      }}
        featuredTitle="Cancion">
        <View style={styles.imageSong}>
          <Text style={styles.overlayHeader}>Nombre Cancion</Text>
        </View>
        <View style={styles.detailSong}>
          <Text>Artista</Text>
          <Text>Album</Text>
          <Text>Duracion</Text>
        </View>
      </Card>



    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  imageSong: {
    backgroundColor:'red',
    width:140,
    height:140,
  },
  detailSong: {
    backgroundColor:'blue',
    width:140,
    height:100,
  },
  overlayHeader: {
    elevation:1,
    alignSelf:'center',
    fontSize:12,
    color:"#292929",
    textAlign:'center',
    padding:10,
    backgroundColor:'rgba(255,255,255,0.6)',
    fontWeight:'bold',
  },
});

module.exports = ItemSong;
