import React,{useState,useEffect} from "react";
import "./App.css"
import Header from "./HeaderComponent/Header.js"
import CreateNote from "./CreateNoteComponent/CreateNote"
import Note from "./NoteComponent/Note"
import Footer from "./FooterComponent/Footer"

import axios from "axios"


import Grid from '@mui/material/Grid';

function App() {
  const [notes,setNotes]=useState([]);
 

  //fetching data from the api
  useEffect(()=>{
    axios.get("https://kp-note.herokuapp.com/notes")
      .then((res)=>{
        setNotes(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  })
  //adds notes to our notes array
  function AddNewNote(note){
     

    setNotes((prevNotes)=>{
      return([
        ...prevNotes,
        note
      ])
    });

    //sending post request to the api to add data
    axios.post("https://kp-note.herokuapp.com/notes",note)
    .then((res)=>{
      console.log("posting data",res)
    })
    .catch((err)=>{
      console.log(err)
    })

   
    
  }
  

  //deletes notes from our note array
  function deleteNote(client_id,backend_id){
  
    setNotes(()=>{
      return(
        notes.filter((note,index)=>{
          return client_id !== index;
        })
      )
    })
    
    //sending post request to delete note
    axios.post("https://kp-note.herokuapp.com/notes/delete",{"id":backend_id})
    .then((res)=>{
      console.log("posted id",res)
    })
    .catch((err)=>{
      console.log(err)
    })

    

  }

  return (
    <div className="App">
     <Header />
     <CreateNote addNote={AddNewNote} />
     <Grid container spacing={2}>
        {notes.map((note,index)=>{
          return(<Note key={index} backendID={note._id} clientID={index} title={note.title} note={note.note} noteDelete={deleteNote}/>)
        })}
     </Grid>
    <Footer />
    </div>
  );
}

export default App;
