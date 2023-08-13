const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const mongoose = require('mongoose');//mongoDB modules
const bodyParser = require('body-parser');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
}

//Defining Schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

const Contact = mongoose.model('contact', contactSchema); 

// app.use(express.static('static',options));
app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.engine('pug',require('pug').__express);//initaize pug as a render engine
app.set('views',path.join(__dirname,'views'));//setting pug file (views or templates) directory
app.set('view engine','pug');//setting pug as render engine

app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
});
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
});
app.post('/contact',(req,res)=>{
    var Data = new Contact(req.body);
    Data.save().then(()=>{
        res.send("Form has been saved to the database");
    }).catch(()=>{
        res.statusCode(400).send("Error!!Form has not been saved.");
    });
});

app.listen(port);