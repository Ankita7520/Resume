import React from "react";
import "./Ui.css";
import img7 from "./images/7.png";

const Ui=()=>{
    return(
        <div>
          <div>
            <nav style={{display:"flex"}}>
              <h4 className="resume-io">resume.io</h4>
             
                <h4 className="res">Resume  </h4>
                
                <h4 className="res"> Cover Letter</h4>
                <h4 className="res">Resume Writting</h4>
                <h4 className="res">Blog</h4>
          <h5 className="myacc">My Account</h5>
              
            </nav>
          </div>
          <div className="div">
            <button className="but">Create Resume</button>
          </div>
          <div>
            <img src="" alt=""/>
            <h3 className="prof">Proffesional</h3>
          </div>
          <div>
            <img src={img7} alt="" className="trust-img"/>
          </div>

        </div>
    )
}
export default Ui