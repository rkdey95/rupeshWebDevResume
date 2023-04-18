import React from "react";

function Header() {
    return (
    <header>
      <div style={{width : "100%"}}>
        <div style={{width:"50%", height: "25%", textAlign: "left", float:"left"}}>
          <p><h3>Rupesh Kumar Dey</h3></p>
        </div>
        <div style={{marginLeft:"50%", height: "25%", textAlign:"right"}}> 
          <ul>
            <a href="https://drive.google.com/file/d/1tZNX1XpfGZ7kqlj1H8Oj_lxTAbI4r81-/view?usp=sharing" target="_blank"><img style={{height: "15px"}} src="../../images/resume.png" alt="Resume"/>Resume</a>
            <a> | </a>
            <a><img style={{height: "15px"}} src="../../images/project.png" alt="project"/>Projects</a>
            <a> | </a>
            <a><img style={{height: "15px"}} src="../../images/phone.png" alt="contact"/>Contact Me</a>
          </ul>
        </div>
      </div>
    </header>
    );
}
export default Header;