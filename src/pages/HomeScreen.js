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
import ItemPill from '../components/ItemPill';
import Loading from '../components/Loading';
import {getRandomUsers,getAllArtists,getAllData} from '../utilities/api';
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
         alldata:[],
         loaded:false,
         pacientes:[],
         pacientesSearch:[],
         text:'',
         noData:false,
       }
   }

   async componentWillMount(){
     let users = await getRandomUsers();
     let alldata = await getAllData();

     this.setState({users,alldata,pacientesSearch:patients,pacientes:patients,loaded:true});
   }

   renderLoadingView(){
     return(
       <Loading imageLoading= {require('../img/Logo.png')} />
     )
   }

   /*
    * Filtro de Busqueda, recibe el Texto del SearchBar
    * compara las dos cadenas de texto y retorna un valor
    * con el cual podemos tomar desiciones
    *
    * ademas se realizan otras validaciones para permitir retornar
    la busqueda sin afectar la lista original
    */
   filterSearch(text){
     const newData = this.state.pacientesSearch.filter(function (pacientes){
       const itemData = pacientes.name.first.toUpperCase()
       const textData= text.toUpperCase()
       return itemData.indexOf(textData) > -1
     })
     // Si no coinciden y el texto es vacio retorne la lista original
     if (!text || text === '') {
         this.setState({
           pacientesSearch:this.state.pacientes,
           text:''
         })
       }
        // Si no coincide ningun dato retorne la lista original
        else if (!Array.isArray(newData) && !newData.length) {
         this.setState({
           pacientesSearch:this.state.pacientes,
           noData: true
         })
       }
       // Si el nombre coincide retorna los valores necesarios y lo pasa al FlatList
       // done mapea los datos y le asigna un indice para poderlo visualizar

       else if (Array.isArray(newData)) {
         this.setState({
           noData: false,
           pacientesSearch:newData,
           text:text
         })
       }
   }




// ddddddd

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

<Card title="Pacientes">
  <SearchBar
    lightTheme
    icon={{name: 'search', color: 'white'}}
    placeholder=' ¿Buscas un paciente en especifico?'
    onChangeText= {(text)=>this.filterSearch(text)}
    value={this.state.text}
   />
  <List containerStyle={{marginBottom: 20}}>
    {
      this.state.pacientesSearch.map((pacientes) => (
        <TouchableOpacity
          onPress={() => {
             this.props.navigation.navigate('Usuario', {pacientes});
           }}
          >
        <ListItem
          roundAvatar
          avatar={{uri:pacientes.picture.large}}
          key={pacientes.login.md5}
          title={pacientes.name.first + " "+ pacientes.name.last}
          subtitle={pacientes.email}
        />
        </TouchableOpacity>
      ))
    }
  </List>
</Card>

<Divider style={{ backgroundColor: 'white', marginTop:10 }} />


          <FlatList
            horizontal={true}
            data={this.state.alldata}
            keyExtractor={(x,i)=>i.toString()}
            renderItem={({item})=>
            <TouchableOpacity
              onPress={() => {
                 this.props.navigation.navigate('Usuario', {item});
               }}
              >
              <ItemPill
              medicaments= {item.medicaments}
            />
            </TouchableOpacity>
            }
          />


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
