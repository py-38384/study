const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// app.use(express.static('static',options));
app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.engine('pug',require('pug').__express);//initaize pug as a render engine
app.set('views',path.join(__dirname,'views'));//setting pug file (views or templates) directory
app.set('view engine','pug');//setting pug as render engine

app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
});

app.listen(port);