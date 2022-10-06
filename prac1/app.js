const express = require('express');
const app = express();
const PORT = 5000;

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/test',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})