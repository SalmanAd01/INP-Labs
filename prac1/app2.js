var express = require ('express');
var app = express();
var PORT =  9000;

var router1=express.Router();
var router2=express.Router();
var router3=express.Router();

router1.get('/user',function(req,res,next){
    res.sendFile(__dirname+'/public/user.html')
    
});

router1.get('/admin',function(req,res,next){
    res.sendFile(__dirname+'/public/admin.html')
    
});

router1.get('/student',function(req,res,next){
    res.sendFile(__dirname+'/public/student.html')
    
});
router1.get('/',(req,res)=>{
    res.header('Content-Type', 'text/html');
    res.send(`<ul>
    <li><a href="/user"  target="_blank">User</a></li>
    <li><a href="/admin" target="_blank">Admin</a></li>
    <li><a href="/student" target="_blank">Student</a></li>
    </ul>
    `)
})

app.use(router1);
app.use(router2);
app.use(router3);

app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log(`http://localhost:${PORT}`);
});