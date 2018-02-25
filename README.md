Bienvenido
===================


Bienvenid@s,  Proyecto **EjercicioMobile** presentado por Sebastian Otalora (@jhonsebas77)

----------

API para datos de Prueba
-------------
> **External API Random Users**

> - GET https://randomuser.me/api?results=10

> **API Random Generada y Modificada en Mockaroo**

> - GET https://my.api.mockaroo.com/allData?key=69efee50




Aplicación Móvil
-------------
**Configurando el entorno de ejecución**

Una vez instalado React Native, configuremos lo básico para cargar el proyecto

> **Nota:**

> - Necesitamos un editor de texto, ya sea *Sublime Text2* o en nuestro caso *Atom*
> - Tambien necesitamos un cliente de *Git Hub*, en nuestro caso usaremos *Git Hub Desktop* para tener control de versiones


 2. Clonar el proyecto con el App de GitHub Desktop
 3. En la terminal ubicarse en la carpeta donde se ejecutara el proyecto
 <kbd> cd /EjercicioMobile </kbd>
 4. Crear el proyecto con el mismo nombre del proyecto de GitHub, darle (yes) al momento de reemplazar el fichero <kbd> react-native init nombre_proyecto </kbd>
 5. Realizar el *commit* y luego el *fetch* en la aplicación de GitHub Desktop
 6. Abrir la carpeta del proyecto utilizando el editor de texto deseado para comenzar a editarlo
 7. Conectar nuestro dispositivo Android con la opción de **Desarrollador** activada junto a la opción **Depuración USB**
 8. Nos ubicamos dentro de la carpeta del proyecto en dos distintas terminales  <kbd>cd /nombre_proyecto </kbd>
 9. Instalamos las dependencias necesarias por medio de <kbd>npm dependencia --save</kbd>
 10. Y ejecutamos <kbd>react-native start </kbd> en la primera ventana, una vez indique *Loading dependency graph, done.*  ejecutamos en la segunda ventana <kbd>react-native run-android</kbd>

> **Dependencias Utilizadas:** Estas son las dependencias utilizadas en el proyecto
<kbd>react-native-calendars</kbd>
<kbd> react-native-elements</kbd>
<kbd> react-native-maps</kbd>
<kbd> react-native-vector-icons</kbd>
<kbd> react-navigation</kbd>


**Medical Organizer**

El App está enfocada al Front compuesta de la siguiente forma
>  <kbd>Componentes ./EjercicioMobile/src/components/</kbd>

> - ./components/Body : *Cuerpo Detalle Paciente*
> - ./components/Extra :*MapView con la ubicacion del Paciente*
> - ./components/Header : *Header Paciente Especifico*
> - ./components/InfoHotel : *Detalles Hotel Específico*
> - ./components/ImageOverlay : *Componente Texto sobre Imagen*
> - ./components/ItemUser : *Cada uno de los Usuarios Doctores /*
> - ./components/Loading : *Loading Screen*
> - ./components/Mid : *Componente del Medio de un Paciente en especifico*
> - ./components/NavBar : *Barra Superior HomeScreen*


----------
>  <kbd>VIstas ./FullStackMobile/src/pages/</kbd>

> - ./pages/MainScreen  : *Vista de Inicio*
> - ./pages/Login  : *Login*
> - ./pages/Patients :*Vista todos los pacientes*
> - ./pages/UserDetails  :*Vista Paciente Especifico*
> - ./pages/Calendario            :*Aproximacion a Agenda*

----------
>  <kbd>Otros </kbd>

> - ./src/img/  : *Recursos Graficos*
> - ./src/API  : *API Peticiones Externas*
> - ./api/  : *Sin Funcionalidad =( *


----------

## Capturas Pantalla

#### Pantalla de Login
![ ](./src/img/screencapture/HomeScreen.png)

> - Login básico, con validación de campos vacios <kbd>TextInput</kbd>

----------

#### Pantalla de Inicio
![ ](./src/img/screencapture/HomeScreen.png)

> - Vista compuesta por un Header con el icono del App, el nombre del App, y un icono con el usuario que ingresó al comienzo en el Login, una ligera introducción a lo que permitiría el App una barra de búsqueda que permite encontrar un hotel en específico y un <kbd>FlatList</kbd> que renderiza la respuesta obtenida de nuestra API


#### Video Preview
https://goo.gl/M7331p
