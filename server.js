var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
var router = express.Router();
var port = process.env.PORT || 3977;
var UserCtrl = require('./Controllers/UserCtrl');
var ArtistCtrl = require('./Controllers/ArtistCtrl');
var AlbumCtrl = require('./Controllers/AlbumCtrl');
var SongCtrl = require('./Controllers/SongCtrl');
var md_auth=require('./middlewares/authenticated');
var multipart = require('connect-multiparty');
var md_upload_user = multipart({uploadDir:'./uploads/users'});
var md_upload_artist = multipart({uploadDir:'./uploads/artist'});
var md_upload_album = multipart({uploadDir:'./uploads/album'});
var md_upload_song = multipart({uploadDir:'./uploads/songs'});
/*
  Conexion a MongoDB por medio del servicio MongoLab
*/
mongoose.connect('mongodb://Sebastian:12345@ds111638.mlab.com:11638/otadb',(err,res)=>{
  if(err){
    console.log('ERROR: connecting to Database. ' + err);
  }  else {
    console.log("La conexion a la BD esta funcionando...");
    app.listen(port, function() {
      console.log("Node server running on http://localhost:"+port);
    });
  }
});

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(methodOverride());

/*
  Routes /api/
*/
var user = express.Router();
var artist = express.Router();
var album = express.Router();
var song = express.Router();

user.route('/register')
  .post(UserCtrl.saveUser);
user.route('/login')
  .post(UserCtrl.loginUser);
user.route('/update-user/:id')
  .put(md_auth.ensureAuth,UserCtrl.updateUser);
user.route('/upload-avatar-user/:id')
  .post([md_auth.ensureAuth,md_upload_user],UserCtrl.uploadImage);
user.route('/get-avatar-user/:imageFile')
  .get(md_auth.ensureAuth,UserCtrl.getImageFile);
//Artista
artist.route('/artist/:id')
  .get(md_auth.ensureAuth,ArtistCtrl.getArtist)
  .put(md_auth.ensureAuth,ArtistCtrl.updateArtist)
  .delete(md_auth.ensureAuth,ArtistCtrl.deleteArtist);
artist.route('/register')
  .post(md_auth.ensureAuth,ArtistCtrl.saveArtist);
artist.route('/get-allArtists')
  .get(md_auth.ensureAuth,ArtistCtrl.getAllArtists);
artist.route('/upload-avatar-artist/:id')
  .post([md_auth.ensureAuth,md_upload_artist],ArtistCtrl.uploadImage);
artist.route('/get-avatar-artist/:imageFile')
  .get(ArtistCtrl.getImageFile);
//Album
album.route('/register')
  .post(md_auth.ensureAuth,AlbumCtrl.saveAlbum);
album.route('/album/:id')
  .get(md_auth.ensureAuth,AlbumCtrl.getAlbum)
  .put(md_auth.ensureAuth,AlbumCtrl.updateAlbum)
  .delete(md_auth.ensureAuth,AlbumCtrl.deleteAlbum);
album.route('/get-allAlbums/:artist?')
  .get(md_auth.ensureAuth,AlbumCtrl.getAllAlbums);
album.route('/upload-avatar-album/:id')
  .post([md_auth.ensureAuth,md_upload_album],AlbumCtrl.uploadImage);
album.route('/get-avatar-album/:imageFile')
  .get(md_auth.ensureAuth,AlbumCtrl.getImageFile);
//Song
song.route('/register')
  .post(md_auth.ensureAuth,SongCtrl.saveSong);
song.route('/song/:id')
  .get(md_auth.ensureAuth,SongCtrl.getSong)
  .put(md_auth.ensureAuth,SongCtrl.updateSong)
  .delete(md_auth.ensureAuth,SongCtrl.deleteSong);
song.route('/get-allSongs/:album?')
  .get(md_auth.ensureAuth,SongCtrl.getAllSongs);
song.route('/upload-file-song/:id')
  .post([md_auth.ensureAuth,md_upload_song],SongCtrl.uploadFile);
song.route('/get-song-file/:songFile')
  .get(md_auth.ensureAuth,SongCtrl.getSongFile);

app.use('/api/users', user);
app.use('/api/artist', artist);
app.use('/api/album', album);
app.use('/api/song', song);
