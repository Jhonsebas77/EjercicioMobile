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
   View,Image,TouchableOpacity,
   FlatList,ImageBackground,
   StatusBar,KeyboardAvoidingView,ScrollView
 } from 'react-native';
import Navbar from '../components/Navbar';
import {Card, List, ListItem} from 'react-native-elements';
import { Agenda } from 'react-native-calendars';
import {patients} from '../utilities/pacientes';

 export default class Calendario extends React.Component<{}> {
   static navigationOptions = ({ navigation }) => ({
     title: "Inicio ",
     headerTintColor:'#03A9F4',
     headerColor:'#03A9F4',
   });
   constructor(props){
       super(props);
       this.state={
         loaded:false,
         pacientes:[],
       }
   }

   async componentWillMount(){
     this.setState({pacientes:patients,loaded:true});
   }

   renderLoadingView(){
     return(
       <Loading imageLoading= {require('../img/Landscape.jpg')} />
     )
   }

   render() {
     const { params } = this.props.navigation.state;
     const LoginName = params ? params.name : null;
     if (!this.state.loaded) {
       return this.renderLoadingView();
     }
     return (
       <View style={styles.container}>



             <Agenda
  // the list of items that have to be displayed in agenda. If you want to render item as empty date
  // the value of date key kas to be an empty array []. If there exists no value for date key it is
  // considered that the date in question is not yet loaded
  items={
    {'2018-02-24': [{text: 'Prueba Almundo'}],
     '2018-02-23': [{text: 'item 2 - any js object'}],
     '2018-02-21': [],
     '2018-02-19': [{text: 'item 3 - any js object'},{text: 'any js object'}],
    }}
  // callback that gets called when items for a certain month should be loaded (month became visible)
  loadItemsForMonth={(month) => {console.log('trigger items loading')}}
  // callback that fires when the calendar is opened or closed
  onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
  // callback that gets called on day press
  onDayPress={(day)=>{console.log('day pressed'+day.toString())}}
  // callback that gets called when day changes while scrolling agenda list
  onDayChange={(day)=>{console.log('day changed')}}
  // initially selected day
  selected={'2018-02-24'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2018-01-01'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2018-12-31'}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={50}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={50}
  // specify how each item should be rendered in agenda
  renderItem={(item, firstItemInDay) => {return (<View />);}}
  // specify how each date should be rendered. day can be undefined if the item is not first in that day.
  renderDay={(day, item) => {return (<View />);}}
  // specify how empty date content with no items should be rendered
  renderEmptyDate={() => {return (<View />);}}
  // specify how agenda knob should look like
  renderKnob={() => {return (<View />);}}
  // specify what should be rendered instead of ActivityIndicator
  renderEmptyData = {() => {return (<View />);}}
  // specify your item comparison function for increased performance
  rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
  // Hide knob button. Default = false
  hideKnob={true}
  // By default, agenda dates are marked if they have at least one item, but you can override this if needed
  markedDates={{
    '2018-02-21': {selected: true, marked: true},
    '2018-02-23': {marked: true},
    '2018-02-20': {disabled: true}
  }}
  // agenda theme
  theme={{
    agendaDayTextColor: 'yellow',
    agendaDayNumColor: 'green',
    agendaTodayColor: 'red',
    agendaKnobColor: 'blue'
  }}
  // agenda container style
  style={{width:'100%',
  height:'50%', flex:1}}
/>


<Card containerStyle={styles.cardContainer} title="Citas">
  <Text>
    Aqui se agendaran tus citas con los pacientes
    (Componente Externo // react-native-calendar)
  </Text>

</Card>


</View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'#E8E8E8',
     alignItems:'center',
   },
   cardContainer:{
     width:'90%',
   height:'50%',
   flex:1,
 marginBottom:10,
 borderRadius:20,
},

 });

 module.exports = Calendario;
