let express = require ("express")
let path = require ("path")
var bodyParser = require('body-parser')
let app = express()
let con = require("./connection")
con()
// let saveDoc = require("./model/model")
// saveDoc()
// let saveMultipleDoc = require("./model/model")
// saveMultipleDoc()

app.use(express.static (path.join(__dirname, "public")))//external css and json and images
app.use(bodyParser.json())

// var jsonParser =  bodyParser.json();

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/HomePage/intro.html"))
    // res.send("Hi")
    
})

app.get("/About",(req,res)=>{
    res.sendFile(path.join(__dirname, "./public/About/About.html"))
    // res.send("Hi")
    
})
app.get("/Events", (req,res)=>{
    res.sendFile(path.join(__dirname, "/Events/index.html"))
    // res.send("Hi")
    
})
app.get("/Login", (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/Login/Login.html"))
    // res.send("Hi")
    
})
app.get("/Registration", (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/Registration/Reg.html"))
    // res.send("Hi")
    
})

app.listen("3000", ()=>{console.log('connected...')});

// var express = require('express');
// //var server = express.createServer();
// // express.createServer()  is deprecated. 
// var server = express(); // better instead
// server.configure(function(){
//   server.use('/HomePage', express.static(__dirname + '/HomePage'));
//   server.use(express.static(__dirname + '/public'));
// });

// server.listen(3000);
// app.get("/About", (req,res)=>{
//     res.sendFile (path.join(__dirname, "/About/About.html"))
// })


// app.get("/Events", (req,res)=>{
//     res.sendFile (path.join(__dirname, "/Events/index.html"))
// })
// app.get("/Join", (req,res)=>{
//     res.sendFile (path.join(__dirname, "Join.html"))
// })
// app.get("/Login", (req,res)=>{
//     res.sendFile (path.join(__dirname, "Login.html"))
// })
// app.get("/Registration", (req,res)=>{
//     res.sendFile (path.join(__dirname, "Reg.html"))
// })
// app.get("*", (req,res)=>{
//     res.sendFile (path.join(__dirname, "school.html"))
// })


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dharmanshu1921:192128sh@cluster0.4x7wqux.mongodb.net/test');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var email =req.body.email;
    var pass = req.body.password;
    var phone =req.body.phone;

    var data = {
        "name": name,
        "email":email,
        "password":pass,
        "phone":phone
    }
db.collection('user').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
    // return res.redirect('signup_success.html');
    res.send("<h1>Signup Successfully</h1>")
})

app.get('/sign_up',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
return res.redirect('index.html');
})
app.get('/index.html',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})
console.log("server listening at port 3000")

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/error/error.html"))
    // res.send("Hi")
    
})