const express = require('express');
const fs= require('fs');
const path= require('path');
const app = express();
const port = 3000;

//Route for handling GET requests at the root URL "/"
app.get('/',(req,res)=>{
    res.send('Hello, this is home page');
});

//Route for handling GET requests at "/readFile"
app.get('/readFile',(req,res)=>{
    fs.readFile('./text.txt',(err,data)=>{
        if(err){
            res.status(500).send('Error reading File by the Server')
        }
        else
        {
            res.send(`<hml><body><pre>${data}</pre></body></hml>`);
        }
    });
});

//Route for handling POST requests at "/writeFile"
app.post('/writeFile',(req,res)=>{
    fs.writeFile('./text.txt', 'utf8',(err)=>{
        if(err){
           console.error('Error writing to File: ',err);
        }
        else
        {

        }
    });
});

//Route for handling PUT requests at "/updateFile"
app.put('/updateFile',(req,res)=>{
    res.send('update');
});

//start the server
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
});
