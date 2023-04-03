const express = require("express");
const fs = require('fs');
const path = require('path');
const app = express();
let port = 80;

app.use('/static', express.static('static'));//for serving static file
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.engine('pug',require('pug').__express);//initaize pug as a render engine
app.set('views',path.join(__dirname,'views'));//setting pug file (views or templates) directory
app.set('view engine','pug');//setting pug as render engine

//ENDPOINT
app.get('/', (req, res) => {
    let content = 'Piyal is a good boy';
    const param = {'title':'pubg is the best game','content':content};
    res.status(200).render('index.pug',param);
  });
app.post('/', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let address = req.body.address;
    let more = req.body.more;
    let outputText = `The name of our clint is ${name}, He/she is ${age} years old, ${gender}, His/her adress is ${address}, and also He/said "${more}"`;
    fs.writeFileSync('new.txt',outputText);
    const param = {'massage':'your form has been submited'};
    res.status(200).render('index.pug',param);
  });

app.listen(port,()=>{
    console.log(`The application started at localhost port ${port}`)
});