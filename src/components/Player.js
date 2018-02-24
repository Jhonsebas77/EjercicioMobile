/*
 * Proyecto: Prueba FullStackMobile.
 * Empresa: Almundo
 * Responsable Proyecto: Sebastian Otalora
 * Responsable Contacto: jhonsebas77@outlook.com | 3217209516

    Banner en la pantalla de inicio

 */

import React, { Component } from 'react';
import {StyleSheet,ImageBackground,View,Image,Text,WebView} from 'react-native';
import ImageOverlay from './ImageOverlay';
var port = process.env.PORT || 3977;
var ip = process.env.IP || '192.168.10.115';

export default class Player extends React.Component<{}> {
  render() {
    return (
      <View style = {styles.container}>

<View style={styles.WebPlayer}>
<Text>Imagen Cancion</Text>
</View>
<View style={styles.WebPlayer}>
  <WebView
    source={{uri: 'http://'+{ip}+':'+{port}+'/api/song/get-song-file/hd-693ezNxjr2pJcDQNMovw1.mp3'}}
  />
</View>
<View style={styles.SongDetails}>
  <Text>Nombre de Cancion</Text>
  <Text>Nombre de Artista</Text>
  <Text>Nombre de Album</Text>
</View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    borderColor:'rgba(0,0,0,0.5)',
    borderWidth:0.5,
    backgroundColor:'#FFFFFF'
  },
  SongDetails:{
    flex:3,
    padding:5,
    alignItems:'center',
    backgroundColor:'#98d2c1',
        height:140
  },
  WebPlayer:{
    flex:2,
    width:140,
    height:140,
  },

});

module.exports = Player;
