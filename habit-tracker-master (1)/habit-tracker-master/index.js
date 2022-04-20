// import express
// create port 
// import path
// call data base 
// import ejs layout
const express = require('express');
const app = express();
const port= 1110;
const db = require('./config/mongoose');
const path=require('path')
const expressLayout = require('express-ejs-layouts');

// set view engine
app.set('view engine','ejs');
app.set('views','./views');

// data base file path 
app.set('views',path.join(__dirname,'views'));

// for extra style of page layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//make router 
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressLayout);

// make connection router 
app.use('/',require('./routes/index'));

//listen server port 
app.listen(port,(err)=>{
if(err){
console.log(`Error On the server : ${err}`);
return ;
}
console.log(`Server is running on port : ${port}`);
})


