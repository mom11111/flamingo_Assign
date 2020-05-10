const express = require('express');


const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const Image = require('../models/images');

const multer = require('multer');

const router = express.Router();


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });


  const upload = multer({
    storage: storage
  });


  router.get('/',(req,res)=>{
      res.render('form.ejs');
  })

router.post('/uploadfile',upload.single('file'),(req,res)=>{
    var file=req.file;
     if(!file){
         return res.send('please upload a file');
     }
     else{
         const image = new Image({
             imageName : req.body.name,
             file:req.file.path
         });
         image.save().then(data=>{
             res.json(data);
         }).catch(err=>{
             console.log("cannt save");
         })
     }
})

router.get('/getListOfImages',(req,res)=>{
    Image.find({}).then(data=>{
        res.render('listOfImages',{res:data});
    })
})

router.get('/getImageById/:id',(req,res)=>{
    var id=req.params.id;
    //console.log(id);
    Image.findById({_id:id}).then(image=>{
        console.log(image);
        res.render('showImage', {res:image});
    })
})

module.exports = router;