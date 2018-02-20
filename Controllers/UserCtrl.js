const fs= require('fs');
const path= require('path');
const bcrypt = require ('bcrypt-nodejs');
const User = require('../Models/user');
const jwt = require('../services/jwt');

exports.pruebas = function(req,res){
  res.status(200).send({
    'message':'"Hola Mundo"',
  });
};
exports.saveUser=function(req,res){
  const user = new User();
  const params = req.body;
  user.name=params.name;
  user.surname=params.surname;
  user.email=params.email;
  user.role='ROLE_USER';
  user.image='null';

  if(params.password){
    bcrypt.hash(params.password,null,null,function(err,hash){
      user.password=hash;
      if(user.name != null && user.surname != null && user.email != null){
        user.save((err, userStored) =>{
          if (err){
            res.status(500).send({message:'Error al guardar el usuario'});
          }else{
            if(!userStored){
              res.status(404).send({message:'No se ha registrado el usuario'});
            }else{
              res.status(200).send({user:userStored});
            }
          }
        });
      }else{
        res.status(200).send({message:'Ingresa Todos los campos'});
      }
    });
  }else{
    res.status(200).send({message:'Introduce la Contrasena'});
  }
};
exports.loginUser= function(req,res){
  var params = req.body;
  var email = params.email;
  var password = params.password;

  User.findOne({email:email.toLowerCase()}, (err, user) => {
    if(err){
      res.status(500).send({message:'Error en la solicitud'});
    }else{
      if(!user){
        res.status(404).send({message:'No existe el usuario'});
      }else{
        bcrypt.compare(password,user.password, function(req,check) {
          if(check){
            if(params.gethash){
              res.status(200).send({
                token:jwt.createToken(user)
              });
            }else{
              res.status(200).send({user});
            }
          }else{
            res.status(404).send({message:'El usuario no puede ingresar'});
          }
        });
      }
    }
  });
}
exports.saveAdmin=function(req,res){
  const user = new User();
  const params = req.body;

  console.log(params);

  user.name=params.name;
  user.surname=params.surname;
  user.email=params.email;
  user.role='ROLE_ADMIN';
  user.image='null';

  if(params.password){
    bcrypt.hash(params.password,null,null,function(err,hash){
      user.password=hash;
      if(user.name != null && user.surname != null && user.email != null){
        user.save((err, userStored) =>{
          if (err){
            res.status(500).send({message:'Error al guardar el usuario'});
          }else{
            if(!userStored){
              res.status(404).send({message:'No se ha registrado el usuario'});
            }else{
              res.status(200).send({user:userStored});
            }
          }
        });
      }else{
        res.status(200).send({message:'Ingresa Todos los campos'});
      }
    });
  }else{
    res.status(200).send({message:'Introduce la Contrasena'});
  }
};
exports.updateUser=function(req,res){
  var userId=req.params.id;
  var update = req.body;
  User.findByIdAndUpdate(userId, update, (err, userUpdated)=>{
    if(err){
      res.status(500).send({message:'Error al actualizar el usuario'});
    }else{
      if(!userUpdated){
        res.status(400).send({message:'No se ha podido actualizar el usuario'})
      }else{
        res.status(200).send({user:userUpdated});
      }
    }
  });
};
exports.uploadImage=function(req,res){
  var userId = req.params.id;
  var file_name = 'Sin Imagen';

  if(req.files){
    var file_path = req.files.image.path;
    var file_split= file_path.split('/');
    var file_name = file_split[2];
    var ext_split= file_name.split('.');
    var file_ext = ext_split[1];

    if(file_ext=='png'|| file_ext=='jpg'||file_ext=='gif'){
     User.findByIdAndUpdate(userId,{image:file_name},(err, userUpdated)=>{
       if(err){
         res.status(500).send({message:'Error al actualizar la imagen'});
       }else{
         if(!userUpdated){
           res.status(400).send({message:'No se ha podido actualizar la imagen'})
         }else{
           res.status(200).send({image: file_name, user:userUpdated});
         }
       }
     });
    }else{
     res.status(200).send({message:'Tipo de archivo no valido'});
    }

  }else{
    res.status(200).send({message:'No ha subido ninguna imagen'});
  }
};
exports.getImageFile=function(req,res){
  var imageFile= req.params.imageFile;
  var path_file= './uploads/users/'+imageFile;
  fs.exists(path_file, (exists)=>{
    if(exists){
      res.sendFile(path.resolve(path_file));
    }else {
      res.status(200).send({message:'No Existe la imagen'});
    }
  });
}
