import React from 'react'
import HighlightIcon from '@mui/icons-material/Highlight';
import './Header.css'; 

function Header() {
  return (
    <div className="header">
     <HighlightIcon fontSize='large'/>
     <h1 className="header__text">Keep Notes</h1>
    </div>
  )
}

export default Header;