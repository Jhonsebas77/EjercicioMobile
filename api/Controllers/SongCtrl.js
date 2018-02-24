const fs= require('fs');
const path= require('path');
const mongoosePaginate=require('mongoose-pagination')
const Artist = require('../Models/artist');
const Album = require('../Models/album');
const Song = require('../Models/song');

exports.getSong = function(req,res){
  var songId=req.params.id;
  Song.findById(songId).populate({path:'album'}).exec((err,song)=>{
    if(err){
      res.status(500).send({message:'Error  en la peticion'});
    }else{
      if(!song){
        res.status(404).send({message:'la cancion no existe'});
      }else{
        res.status(200).send({song});
      }
    }
  });
};
exports.saveSong=function(req,res){
  const song = new Song();
  const params = req.body;
  song.number=params.number;
  song.name=params.name;
  song.duration=params.duration;
  song.file=null;
  song.album=params.album;

  song.save((err, songStored) =>{
    if (err){
      res.status(500).send({message:'Error al guardar la cancion'});
    }else{
      if(!songStored){
        res.status(404).send({message:'No se ha registrado la cancion'});
      }else{
        res.status(200).send({song:songStored});
      }
    }
  });
};
exports.getAllSongs=function(req,res){
  var albumId=req.params.album;

  if(!albumId){
    var find= Song.find({}).sort('number');
  }else{
    var find= Song.find({album:albumId}).sort('number');
  }

  find.populate({
    path:'album',
    populate:{
      path:'artist',
      model:'artist'
    }
  }).exec(function(err,songs){
    if(err){
      res.status(500).send({message:'Error  en la peticion'});
    }else{
      if(!songs){
        res.status(404).send({message:'No hay canciones'});
      }else{
        res.status(200).send({songs});
      }
    }
  });
};
exports.updateSong=function(req,res){
  var songId=req.params.id;
  var update = req.body;

  Song.findByIdAndUpdate(songId, update,(err,songUpdated)=>{
    if(err){
      res.status(500).send({message:'Error  en la peticion'});
    }else{
      if(!songUpdated){
        res.status(404).send({message:'No existe'});
      }else{
        res.status(200).send({song:songUpdated});
      }
    }
  });
};

exports.deleteSong= function(req,res){
  var songId=req.params.id;
  Song.findByIdAndRemove(songId,(err,songRemoved)=>{
    if(err){
      res.status(500).send({message:'Error al eliminar la cancion'});
    }else{
      if(!songRemoved){
        res.status(404).send({message:'La cancion no ha sido eliminada'});
      }else{
        res.status(200).send({song:songRemoved});
      }
    }
  });
};

exports.uploadFile=function(req,res){
  var songId = req.params.id;
  var file_name = 'Sin Fichero';

  if(req.files){
    var file_path = req.files.file.path;
    var file_split= file_path.split('/');
    var file_name = file_split[2];
    var ext_split= file_name.split('.');
    var file_ext = ext_split[1];

    if(file_ext=='mp3'|| file_ext=='ogg'){
     Song.findByIdAndUpdate(songId,{file:file_name},(err, songUpdated)=>{
       if(err){
         res.status(500).send({message:'Error al actualizar la imagen'});
       }else{
         if(!songUpdated){
           res.status(400).send({message:'No se ha podido actualizar la imagen'})
         }else{
           res.status(200).send({song:songUpdated});
         }
       }
     });
    }else{
     res.status(200).send({message:'Tipo de archivo no valido'});
    }

  }else{
    res.status(200).send({message:'No ha subido ningun fichero'});
  }
};
exports.getSongFile=function(req,res){
  var imageFile= req.params.songFile;
  var path_file= './uploads/songs/'+imageFile;
  fs.exists(path_file, (exists)=>{
    if(exists){
      res.sendFile(path.resolve(path_file));
    }else {
      res.status(200).send({message:'No Existe el Fichero'});
    }
  });
}
