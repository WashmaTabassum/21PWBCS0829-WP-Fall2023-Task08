const express = require('express');
const fs = require('fs').promises; 
const path = require('path');
const app = express();
app.use(express.json());
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

app.post('/writeFile/:filename', async (req, res) => {
    const { filename } = req.params;
    var data = req.body;
  
    if (!data) {
      return res.status(400).json({ error: 'No data provided' });
    }
  
    const filePath = path.join(__dirname, filename);
  
    try {
      await fs.writeFile(filePath, JSON.stringify(data));
      res.status(200).json({ message: 'Data written to file successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Error writing to file' });
    }
  });

//Route for handling PUT requests at "/updateFile"
app.put('/updateFile',(req,res)=>{
    res.send('update');
});

//start the server
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
});
