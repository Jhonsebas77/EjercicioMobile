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
import {SearchBar,Card} from 'react-native-elements';
import Navbar from '../components/Navbar';
import ItemUser from '../components/ItemUser';
import Loading from '../components/Loading';
import {getRandomUsers,getAllArtists,getAllHotels} from '../utilities/api';
import { List, ListItem,CheckBox,Divider,Slider} from 'react-native-elements';
import {patients} from '../utilities/pacientes';

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
         pacientes:[],
       }
   }

   async componentWillMount(){
     let users = await getRandomUsers();
     let allhotels = await getAllHotels();

     this.setState({users,allhotels,pacientes:patients,loaded:true});
   }

   renderLoadingView(){
     return(
       <Loading imageLoading= {require('../img/Logo.png')} />
     )
   }

   render() {
     const { params } = this.props.navigation.state;
     const LoginName = params ? params.name : null;
     const LoginPassword = params ? params.password : null;

     var d = new Date();
     var Fecha=d.getFullYear() + "/" + (d.getMonth()+1)+ "/"+ d.getDate();

     if (!this.state.loaded) {
       return this.renderLoadingView();
     }

     return (
       <ScrollView style={styles.container}>
           <Navbar name={LoginName}/>
       <Card title="Bienvenido">
         <Text>
          {Fecha}
         </Text>
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

<Card title="Pacientes">
  <SearchBar
    lightTheme
    icon={{name: 'search', color: 'white'}}
    placeholder=' ¿Buscas un paciente en especifico?'
    // onChangeText= {(text)=>this.filterSearch(text)}
    // value={this.state.text}
   />
  <List containerStyle={{marginBottom: 20}}>
    {
      this.state.pacientes.map((pacientes) => (
        <TouchableOpacity
          onPress={() => {
             this.props.navigation.navigate('Usuario', {pacientes});
           }}
          >
        <ListItem
          roundAvatar
          avatar={{uri:pacientes.picture.large}}
          key={pacientes.login.md5}
          title={pacientes.name.first}
          subtitle={pacientes.email}
        />
        </TouchableOpacity>
      ))
    }
  </List>
</Card>

<Divider style={{ backgroundColor: 'white', marginTop:10 }} />

<Card title="Amigos Doctores">
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
