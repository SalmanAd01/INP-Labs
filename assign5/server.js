const express = require('express');
const app = express();
const PORT = 5000;
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { minAge: oneDay },
    resave: false 
}));
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/login', (req, res) => {
    res.render('login')
})


const currentUser = {};
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(12));
    currentUser['name'] = name
    currentUser['email'] = email
    currentUser['password'] = hashPassword
    console.log(currentUser);
    res.send("Signup Successfully")
})
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const checkUser = currentUser['email'].toString() === email.toString()
    if (checkUser) {
        const checkPassword = bcrypt.compareSync(password, currentUser['password']);
        if (checkPassword) {
            req.session.name=currentUser.name;
            res.status(200).json({
                userName: currentUser['name']
            })
        }
        else {
            res.status(401).send("Password is Incorrect")
        }
    }
    else {
        res.status(500).send("User Not Found")
    }
})
app.get("/session", function(req, res){
   
    var name = req.session.name
    return res.send(name)

})
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})