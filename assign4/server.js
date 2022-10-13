const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json())
const currentUser ={};

app.get('/api/user',(req,res)=>{
    return res.json({
        currentUser
    })
})

app.post('/api/user',(req,res)=>{
    const {name,email,password} = req.body
    currentUser['name']= name;
    currentUser['email'] = email;
    currentUser['password']=password;

    res.status(200).send("Created")
})

app.put('/api/user',(req,res)=>{
    const {toChange,value} = req.body;
    currentUser[toChange] = value

    res.status(200).send(currentUser)
})

app.delete('/api/user',(req,res)=>{
    delete currentUser.name;
    delete currentUser.email;
    delete currentUser.password;
    console.log(currentUser);
    res.status(200).send(currentUser)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})