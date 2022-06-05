import React from 'react';
import "./Footer.css";

function Footer() {
  const date = new Date();
  return (
    <div>
        <footer>
            <p>Copyright Ⓒ{date.getFullYear()} Mohamed Ahmed</p>
        </footer>
    </div>
  )
}

export default Footer;