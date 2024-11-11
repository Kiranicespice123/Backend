var Express =require("express");
var mongoClient =require("mongodb").mongoClient;
const mongoose= require("mongoose")
var cors=require("cors");
const multer=require("multer");
const { MongoClient } = require("mongodb");
const UserModel =require("./Models/userModel");
const BackgroundStoreModel = require("./Models/backgroundStoreModel");
const userControl = require("./Controllers/userControl");
const JournalControl = require("./Controllers/JournalControl");
const JournalStoreModel = require("./Models/JournalStoreModel");

var app=Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://kiimmm978:CIDHU8F7Vv6rPmP9@cluster0.hmxpjpk.mongodb.net/diary";
app.use(Express.json());
JournalStoreModel.create(
    { title: "Journal title", accessMode: "private", isBookemarked:true ,StageContent:"", moodEmoji:'😃' }
);
var DATABASENAME= "journal";
var database;
mongoose.connect(CONNECTION_STRING).then(()=>console.log("mongo connected")).catch((err)=> console.log(err))

app.post("/register",userControl.createUser)
app.post("/login",userControl.login)

// Journal Canvas
app.get("/get_widget",JournalControl.getWidget)
app.get("/get_Backgrounds",JournalControl.getBackgroundsStore)

app.listen(3006,()=>{
    console.log("running");
})  