const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
require('dotenv').config()

const app = express();


//middlewares
app.use(express.json());
app.use(Cors());


//connecting to db
mongoose.connect(process.env.DATABASE_URI);

const noteSchema = mongoose.Schema({
    title:String,
    note:String
});

const noteModel = mongoose.model('notes', noteSchema);


//sending all notes to client
app.get("/",(req,res)=>{
    res.send("hello developer");
});
app.get("/notes",(req,res)=>{
    noteModel.find({},(err,data)=>{
        res.status(200).send(data);
    });
   
});


//getting new note from client
app.post("/notes",(req,res)=>{
    const newNote = req.body;
    noteModel.create(newNote,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
})


//deleting note
app.post("/notes/delete",(req,res)=>{
    noteID =req.body.id
    console.log(noteID)
    noteModel.findByIdAndDelete(noteID,(err,deletedData)=>{
        if(err){
            console.log(err)
        }else{
            console.log(deletedData)
        }
    })
});




const port = process.env.PORT || 8001;

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
});