/*
 * Proyecto: Prueba FullStackMobile.
 * Empresa: Almundo
 * Responsable Proyecto: Sebastian Otalora
 * Responsable Contacto: jhonsebas77@outlook.com | 3217209516
 * Header del Hotel en especifico, recibe todas las variables del componente Hotel.js
 */


 /*
 Peticiones (Todavia no se si deba o pueda ir aqui)
 */

 const getRandomUsers =
  async function(){
    const url = await fetch('https://randomuser.me/api?results=10');
    const randomUsers = await url.json();
    return randomUsers;
  };

  const getAllArtists =
    async function(){
     const url='http://192.168.10.115:3977/api/artist/get-allArtists';
     const response = await fetch(url);
     let allArtist=  await response.json();
     return allArtist;
  };

  const getAllData =
    async function(){
     const url='https://my.api.mockaroo.com/allData?key=69efee50';
     const response = await fetch(url);
     let allArtist=  await response.json();
     return allArtist;
  };

module.exports.getRandomUsers = getRandomUsers;
module.exports.getAllArtists = getAllArtists;
module.exports.getAllData = getAllData;
