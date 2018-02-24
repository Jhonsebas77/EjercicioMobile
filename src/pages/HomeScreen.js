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
   Switch,
   Button,Alert,TouchableOpacity,
   FlatList,ImageBackground,
   StatusBar,KeyboardAvoidingView,ScrollView
 } from 'react-native';
import { SearchBar,Card,Header,FormLabel, FormInput  } from 'react-native-elements';
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import ItemUser from '../components/ItemUser';
import ItemAlbum from '../components/ItemAlbum';
import ItemArtist from '../components/ItemArtist';
import Loading from '../components/Loading';
import {getRandomUsers,getAllArtists,getAllHotels} from '../utilities/api';
import {patients} from '../utilities/pacientes';
import { List, ListItem,CheckBox,Divider,Slider} from 'react-native-elements';

 export default class HomeScreen extends React.Component<{}> {
   static navigationOptions = {
     header:false,
   };
   constructor(props){
       super(props);
       this.state={
         users:[],
         allhotels:[],
         loaded:false,
       }
   }

   async componentWillMount(){
     let users = await getRandomUsers();
     let allhotels = await getAllHotels();
     console.log(allhotels);
     // console.log(allartist);
     // this.setState({users,allartist,loaded:true});
     this.setState({users,allhotels,loaded:true});
     console.log(allhotels[0].id);
   }

   renderLoadingView(){
     return(
       <Loading imageLoading= {require('../img/Logo.png')} />
     )
   }

// fetchData = async ()=>{
//   const response = await fetch("https://randomuser.me/api?results=10");
//   const json = await response.json();
//   this.setState({data: json.results});
// }
   render() {
     const { params } = this.props.navigation.state;
     const LoginName = params ? params.name : null;
     const LoginPassword = params ? params.password : null;
console.log(patients);
     const list = [
       {
         name: 'Aplicacion de Notas',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
         subtitle: 'Nunca olvides nada!',
         icon: 'av-timer'
       },
       {
         name: 'Chris Jackson',
         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
         subtitle: 'Vice Chairman',
         icon: 'flight-takeoff'
       },
     ]

     if (!this.state.loaded) {
       return this.renderLoadingView();
     }

     return (
       <ScrollView style={styles.container}>
           <Navbar name={LoginName}/>
       <Text>Pacientes</Text>
       <Card>
         <Text>
           Hola
         </Text>
       </Card>
<Card title="Pacientes">
          <FlatList
            horizontal={true}
            data={this.state.users.results}
            keyExtractor={(x,i)=>i.toString()}
            renderItem={({item})=>
            <TouchableOpacity
              onPress={() => {
                 this.props.navigation.navigate('Usuario', {item});
               }}
              >
              <ItemUser
              name= {item.name.first}
              last={item.name.last}
              imageSource ={item.picture.large}
            />
            </TouchableOpacity>
            }
          />
</Card>
      <Divider style={{ backgroundColor: 'white', marginTop:10 }} />

          <List containerStyle={{marginBottom: 20}}>
            {
              this.state.allhotels.map((l, i) => (
                <TouchableOpacity>
                <ListItem
                  roundAvatar
                  avatar={{uri:l.image}}
                  key={i}
                  title={l.name}
                  subtitle={l.city}
                />
                </TouchableOpacity>
              ))
            }
          </List>

<Divider style={{ backgroundColor: 'white', marginTop:10 }} />

<Card title="Destinos">
  <List containerStyle={{marginBottom: 20}}>
    {
      patients.map((patients) => (
        <TouchableOpacity
          onPress={() => {
             this.props.navigation.navigate('Usuario', {patients});
           }}
          >
        <ListItem
          roundAvatar
          avatar={{uri:patients.picture.large}}
          key={patients.login.md5}
          title={patients.name.first}
          subtitle={patients.email}
        />
        </TouchableOpacity>
      ))
    }
  </List>
</Card>

<Divider style={{ backgroundColor: 'white', marginTop:10 }} />



  </ScrollView>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'#6DA29E'
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
