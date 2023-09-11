import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Ui from "./Ui"
import Table from "./Table";
import Resume from "./Resume"
import PhotoUpload from "./Second";
import Regi2 from "./Regi2";
import Websites from "./Websites";
import Custom from "./Custom";
import Course from "./Course";
import Internships from "./Internship";

import Hobbies from "./Hobbies";
import Languages from "./Languages";
import References from "./Reference";
import Extracurricular from "./Extra-curricular";
import Ttgig from "./Ttgig";
import RichTextEditor from "./ReachTextEditor";
import First from "./First";
import Hobbiess from "./Hobbiess";
import Dataa from "./Dataa";
import Skill from "./skill";
import Kendo from "./kendo";


const App=()=>{
    return(
        <div>
            
            <BrowserRouter>

            <Routes>
            <Route path="/Ui" element ={<Ui></Ui>}></Route>
            <Route path="/Table" element ={<Table></Table>}></Route>
            <Route path="/resume" element={<Resume></Resume>}></Route>
            <Route path="/PhotoUpload" element={<PhotoUpload></PhotoUpload>}></Route>
            <Route path="/Regi2" element={<Regi2></Regi2>}></Route>
            <Route path="/website" element={<Websites></Websites>}></Route>
            <Route path="/Custom" element={<Custom></Custom>}></Route>
            <Route path="/course" element={<Course></Course>}></Route>
            <Route path="/internship" element={<Internships></Internships>}></Route>
            <Route path="/rich" element={<RichTextEditor/>}></Route>
            <Route path="/" element={<First></First>}></Route>
            <Route path="/data" element={<Dataa></Dataa>}></Route>
            <Route path="/skill" element={<Skill></Skill>}></Route>
            <Route path="/kento" element={<Kendo></Kendo>}></Route>
           
            <Route path="/hobbie" element={<Hobbiess></Hobbiess>}></Route>
            <Route path="/language" element={<Languages></Languages>}></Route>
            <Route path="/reference" element={<References></References>}></Route>
            <Route path="/extra" element={<Extracurricular></Extracurricular>}></Route>
            <Route path="/profile" element={<PhotoUpload></PhotoUpload>}></Route>
            <Route path="/Ttgig" element={<Ttgig></Ttgig>}></Route>


             











             
            </Routes>
            </BrowserRouter>
        </div>
    )

}
export default App