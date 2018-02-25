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
import {} from 'react-native-elements';
import Navbar from '../components/Navbar';
import { Tile,List, Button,ListItem,CheckBox,Divider,Slider,SearchBar,Card} from 'react-native-elements';
import {patients} from '../utilities/pacientes';
import Loading from '../components/Loading';
import ItemUser from '../components/ItemUser';
import {getRandomUsers} from '../utilities/api';

 export default class HomeScreen extends React.Component<{}> {
   static navigationOptions = {
     header:false,
   };
   constructor(props){
       super(props);
       this.state={
         users:[],
         loaded:false,
       }
   }

   async componentWillMount(){
        let users = await getRandomUsers();
        this.setState({users,loaded:true});
      }

      renderLoadingView(){
        return(
          <Loading imageLoading= {require('../img/Loading1.png')} />
        )
      }

   render() {
     const { params } = this.props.navigation.state;
     const LoginName = params ? params.name : null;
     const LoginPassword = params ? params.password : null;

     if (!this.state.loaded) {
       return this.renderLoadingView();
     }

     return (
       <ScrollView style={styles.container}>
           <Navbar name={LoginName}/>
           <Card
             title='BIENVENIDO'
             image={require('../img/Landscape.jpg')}
             containerStyle={{borderRadius:20}}
             >
             <Text style={{marginBottom: 10}}>
               Medical Organizer te ayudara a organizar mejor tu agenda y conocer mejor a tus pacientes, por el momento toca el
               boton de "Ver Pacientes" para ver los pacientes que te han asignado, y "Ver Calendario" para visualizar tu agenda.
             </Text>
             <View style={{marginBottom:10}}>
               <Button
                 icon={{name: 'users', type:'font-awesome'}}
                 backgroundColor='#03A9F4'
                 fontFamily='Lato'
                 buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                 title='Ver Pacientes'
                 onPress={() => {
                    this.props.navigation.navigate('Pacientes', {
                      LoginName:LoginName
                    });
                  }}
                />
              </View>
              <View style={{marginBottom:10}}>
                <Button
                  icon={{name: 'calendar', type:'font-awesome'}}
                  backgroundColor='#03A9F4'
                  fontFamily='Lato'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='Ver Calendario'
                  onPress={() => {
                     this.props.navigation.navigate('Calendario', {
                       LoginName:LoginName
                     });
                   }}
                />
              </View>

           </Card>

           <Card title="Otros Usuarios Doctores" containerStyle={{borderRadius:20}}>
              <FlatList
                horizontal={true}
                data={this.state.users.results}
                keyExtractor={(x,i)=>i.toString()}
                renderItem={({item})=>
                 <ItemUser
                   name= {item.name.first}
                   last={item.name.last}
                   imageSource ={item.picture.large}
                 />
                }
              />
           </Card>


  </ScrollView>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'#E8E8E8'
   },
   songContainer: {
     width:140,
     height:140,
     backgroundColor:'#98d2c1'
   },
   landscape:{
     padding:5,
     alignItems:'center',
     backgroundColor:'#98d2c1'
   },
 });

 module.exports = HomeScreen;
 HomeScreen.defaultProps={... patients};
