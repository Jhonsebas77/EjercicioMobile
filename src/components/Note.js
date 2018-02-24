'use stric'
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class Note extends React.Component{
  render() {
    return(
      <View key={this.props.keyval} style={styles.noteStyle}>
       <Text style={styles.textNote}> {this.props.val.date} </Text>
       <Text style={styles.textNote}> {this.props.val.note} </Text>
       <TouchableOpacity style={styles.noteDelete} onPress={this.props.deleteMethod} >
        <Text style={styles.noteDeleteText}> X </Text>
       </TouchableOpacity>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  noteStyle: {
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor:'#ededed',
  },
  textNote: {
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:'#e91e63',
  },
  noteDelete:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2980b9',
    padding:10,
    top:10,
    bottom:10,
    right:10,
  },
  noteDeleteText:{
    color:'white',
  },
})


module.exports = Note;
