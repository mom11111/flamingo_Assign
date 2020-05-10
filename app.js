const express = require('express');

const app = express();

const ejs = require('ejs');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const multer = require('multer');

const allRoutes = require('./routes/allRoutes');

app.set('view engine', 'ejs');

app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://Nishant:Ok123456@@cluster0-vzhrm.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err,res)=>{
    if(err){
        console.log('cant connect to database');
    }
    else{
        console.log('connected to the database');
    }
})


app.use(allRoutes);

const port = process.env.port || 3000;

app.listen(port, (err,res)=>{
    if(err){
        console.log('cant connect to the server');
    }
    else{
        console.log('successfully connected');
    }

    
})