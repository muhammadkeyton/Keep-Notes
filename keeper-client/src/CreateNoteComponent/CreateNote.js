import React,{useState} from 'react';
import "./CreateNote.css";

import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateNote(props) {
  const [note,setNote] = useState({
    title:"",
    note:""
  });

  const [createClicked,setCreateClicked] = useState(false)

  function handleText(event){
    const {name,value}=event.target;
    setNote((prevItem)=>{
      return({
        ...prevItem,
        [name]:value
      })
    });
  }

  return (
    <div className="Card__container">
      <div className="card" onClick={(event)=>{
        setCreateClicked(true);
        event.preventDefault();
      }}>
            <div className="container">
                {createClicked && <input onChange={handleText} name="title" placeholder="Title" value={note.title}/>}
                <textarea rows={createClicked?"3":"1"} onChange={handleText} name="note" placeholder="Take a note..." value={note.note}/>
            </div>

            {createClicked &&

            <Zoom  in={createClicked}> 
            <Fab onClick={(event)=>{
              props.addNote(note);
              setNote({title:"",note:""});
              event.preventDefault();
            }} className="noteButton" style={{padding:20}}><NoteAddIcon fontSize="large" />
            </Fab></Zoom>}
            
       </div>
    
    </div>  
  )
}

export default CreateNote;