// const express = require('express');
// const fs = require('fs').promises; 
// const path = require('path');
// const app = express();
// app.use(express.json());
// const port = 3000;

// //Route for handling GET requests at the root URL "/"
// app.get('/',(req,res)=>{
//     res.send('Hello, this is home page');
// });

// //Route for handling GET requests at "/readFile"
// app.get('/readFile',(req,res)=>{
//     fs.readFile('./text.txt',(err,data)=>{
//         if(err){
//             res.status(500).send('Error reading File by the Server')
//         }
//         else
//         {
//             res.send(`<hml><body><pre>${data}</pre></body></hml>`);
//         }
//     });
// });

// app.post('/writeFile/:filename', async (req, res) => {
//     const { filename } = req.params;
//     var data = req.body;
  
//     if (!data) {
//       return res.status(400).json({ error: 'No data provided' });
//     }
  
//     const filePath = path.join(__dirname, filename);
  
//     try {
//       await fs.writeFile(filePath, JSON.stringify(data));
//       res.status(200).json({ message: 'Data written to file successfully' });
//     } catch (err) {
//       res.status(500).json({ error: 'Error writing to file' });
//     }
//   });

// //Route for handling PUT requests at "/updateFile"
// app.put('/updateFile',(req,res)=>{
//     res.send('update');
// });

// //start the server
// app.listen(port,()=>{
//     console.log(`server running on http://localhost:${port}`);
// });

// const express = require('express');
// const fs = require('fs').promises;

// const app = express();
// const port = 3000;

// app.use(express.json());

// // GET endpoint to read and retrieve the content of a specified file
// app.get('/readFile', async (req, res) => {
//   try {
//     const filePath = req.query.filePath;
//     if (!filePath) {
//       return res.status(400).send('File path is missing');
//     }

//     const fileContent = await fs.readFile(filePath, 'utf-8');
//     res.send(fileContent);
//   } catch (error) {
//     res.status(500).send('Error reading the file');
//   }
// });

// // POST endpoint to write new content to a specified file
// app.post('/writeFile', async (req, res) => {
//   try {
//     const filePath = req.body.filePath;
//     const content = req.body.content;
//     if (!filePath || !content) {
//       return res.status(400).send('File path or content is missing');
//     }

//     await fs.writeFile(filePath, content);
//     res.send('File written successfully');
//   } catch (error) {
//     res.status(500).send('Error writing to the file');
//   }
// });

// // PUT endpoint to append new data to an existing file
// app.put('/updateFile', async (req, res) => {
//   try {
//     const filePath = req.body.filePath;
//     const content = req.body.content;
//     if (!filePath || !content) {
//       return res.status(400).send('File path or content is missing');
//     }

//     await fs.appendFile(filePath, `${content}\n`);
//     res.send('File updated successfully');
//   } catch (error) {
//     res.status(500).send('Error updating the file');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 3000;

app.use(express.json());

// GET endpoint to read and retrieve the content of a specified file
app.get('/readFile/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = `./${filename}`;

    const fileContent = await fs.readFile(filePath, 'utf-8');
    res.send(fileContent);
  } catch (error) {
    res.status(500).send('Error reading the file');
  }
});

// POST endpoint to write new content to a specified file
app.post('/writeFile/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = `./${filename}`;
    const content = req.body.content;

    if (!content) {
      return res.status(400).send('Content is missing');
    }

    await fs.writeFile(filePath, content);
    res.send('File written successfully');
  } catch (error) {
    res.status(500).send('Error writing to the file');
  }
});

// PUT endpoint to append new data to an existing file
app.put('/updateFile/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = `./${filename}`;
    const content = req.body.content;

    if (!content) {
      return res.status(400).send('Content is missing');
    }

    await fs.appendFile(filePath, `${content}\n`);
    res.send('File updated successfully');
  } catch (error) {
    res.status(500).send('Error updating the file');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
