import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";

function Footer() {
  return (
    <footer>
      <div className="flxfoot">
        <p className="foot">
          LearnHub
        </p>
        <p className="cpy">© 2022 Tailwind Labs Inc. All rights reserved.</p>
        <div>
          
          <Link to="/form" onClick={()=>{window.scrollTo(0,0)}}>form</Link>
          <span>|</span>
          <Link to="/" onClick={()=>{window.scrollTo(0,0)}} >Notes</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
