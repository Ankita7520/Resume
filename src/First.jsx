import React from "react";
import {useNavigate} from "react-router-dom"

const First=()=>{
    let navigate=useNavigate();
    let temp=()=>{
        navigate("/Resume")
    }
    return(
        <div>
            <div className="flex">
                <div className="standard">
                    <h3>Stand out with <br /> professional <br />custom resumes</h3>
                </div>
            <div className="background">
                <img src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/fc015e33-1f60-4437-8238-f0f8d7cd85a9/header_resumes2.jpg" alt="" className="div-one"/>
            </div>
              
            
            </div>
            <div>
                <button className="button">CREATE MY RESUME</button>
                <h4 id="button2" >Professional</h4>
             </div>
             <div className="temp-cover" onClick={temp}>
                <img src="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg" alt="" className="temp-img" />
             </div>
        </div>
    )
}
export default First