import React from 'react'
import "./Note.css"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';


function Note(props) {
  return (
    
      <Grid xs={12} sm={4} md={4} lg={3} xl={3}>
        <div className="notecard__container">
          <div className="note_card">
              <div className="note_container">
                  <h3 className="notetitle">{props.title}</h3>
                  <p className="notetext">{props.note}</p>
              </div>
              <IconButton onClick={(event)=>{
                props.noteDelete(props.clientID,props.backendID);
                event.preventDefault()
              }}><DeleteIcon style={{color:"red"}} /></IconButton>
        </div>
        </div>
      </Grid>
    
    
  )
}

export default Note;