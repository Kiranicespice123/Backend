var Express =require("express");
var mongoClient =require("mongodb").mongoClient;
const mongoose= require("mongoose")
var cors=require("cors");
const multer=require("multer");
const { MongoClient } = require("mongodb");
const UserModel =require("./Models/userModel");
const userControl = require("./Controllers/userControl");

var app=Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://kiimmm978:CIDHU8F7Vv6rPmP9@cluster0.hmxpjpk.mongodb.net/diary";
app.use(Express.json());
// userModel.create(
//     { name: "kiran", email: "kiimmm978@gmail.com", password:"Kiran123" }
// );
var DATABASENAME= "journal";
var database;
mongoose.connect(CONNECTION_STRING).then(()=>console.log("mongo connected")).catch((err)=> console.log(err))

app.post("/register",userControl.createUser)
app.post("/login",userControl.login)

app.listen(3002,()=>{
    console.log("running");
})  
