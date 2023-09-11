import React,{useState , useRef,useEffect} from "react";
//import PhoneNumberInput from './PhoneNumberInput';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { IoIosArrowUp } from 'react-icons/io'
//import  './React.css';
import Dropzone from 'react-dropzone';
import { GoPerson } from 'react-icons/go';
import { format } from 'date-fns';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from "react-router-dom";
import 'react-phone-number-input/style.css'; // Import the CSS

import PhoneInput from 'react-phone-number-input';




// const ddData = [
//   { text: "A4", value: "size-a4" },
//   { text: "Letter", value: "size-letter" },
//   { text: "Executive", value: "size-executive" },
// ];

// const [layoutSelection, setLayoutSelection] = useState({
//   text: "A4",
//   value: "size-a4",
// });

// const updatePageLayout = (event) => {
//   setLayoutSelection(event.target.value);
// };

// const pdfExportComponent = useRef(null);

// const downloadPDF = (event) => {
//   pdfExportComponent.current.save();
// };

const Kendo =()=>{

  const ddData = [
    { text: "A4", value: "size-a4" },
    { text: "Letter", value: "size-letter" },
    { text: "Executive", value: "size-executive" },
  ];
  
  const [layoutSelection, setLayoutSelection] = useState({
    text: "A4",
    value: "size-a4",
  });
  
  const updatePageLayout = (event) => {
    setLayoutSelection(event.target.value);
  };
  
  const pdfExportComponent = useRef(null);
  
  const downloadPDF = (event) => {
    pdfExportComponent.current.save();
  };

  //my code
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const [firstname, setfirstname] = useState('')
  const [name, setname] = useState('')
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [country, setcountry] = useState("")
  const [city, setcity] = useState("")
  const [address, setaddress] = useState('')
  const [post, setpost] = useState('')
  const [editorHtml, setEditorHtml] = useState('')
  const [editorEmp , seteditorEmp] = useState("")
  const [editorEdu,seteditorEdu]=useState("")
  const [drive, setdrive] = useState('')
  const [national, setnational] = useState('')
  const [birth, setbirth] = useState('')
  const [date, setdate] = useState('')
  const [display, setdisplay] = useState(true)
  const [specific, setspecific] = useState(true)
  const [coursee, setcoursee] = useState(true)
  const [reference, setreference] = useState(true);
  const [langu, setlangu] = useState(true)
  const [curricular, setcurricular] = useState(true)
  const [ship, setship] = useState(true)
  const [hobbie, sethobbie] = useState(true)

  let tension = () => {
    setspecific(false)

  }

  const certi = () => {
    setcoursee(false)

  }

  const refer = () => {
    setreference(false)

  }

  const lang = () => {
    setlangu(false)

  }

  const extra = () => {
    setcurricular(false)

  }

  const intern = () => {
    setship(false)

  }

  const delete1 = () => {
    setspecific(true)
  }

  const delete2 = () => {
    setcoursee(true)
  }

  const delete3 = () => {
    setreference(true)
  }

  const delete4 = () => {
    setship(true)
  }

  const delete5 = () => {
    setlangu(true)
  }

  const delete6 = () => {
    sethobbie(true)
  }

  const delete7 = () => {
    setcurricular(true)
  }

  const hobbi = () => {
    sethobbie(false)

  }

  const handlechange = (e) => {
    setfirstname(e.target.value)


  }

  const handlechange1 = (e) => {

    setname(e.target.value)


  }

  const handlechange2 = (e) => {

    setlastname(e.target.value)

  }

  const handlechange3 = (e) => {

    setemail(e.target.value)

  }

  const handlechange4 = (value) => {

    setphone(value)

  }
  const handlechange5 = (e) => {

    setcountry(e.target.value)

  }
  const handlechange6 = (e) => {

    setcity(e.target.value)

  }
  const handlechange7 = (e) => {

    setaddress(e.target.value)

  }
  const handlechange8 = (e) => {

    setpost(e.target.value)

  }
  const handlechange9 = (e) => {

    setdrive(e.target.value)

  }
  const handlechange10 = (e) => {

    setnational(e.target.value)

  }
  const handlechange11 = (e) => {

    setbirth(e.target.value)

  }
  const handlechange12 = (e) => {

    setdate(e.target.value)

  }
  const handleChange = (html) => {
    setEditorHtml(html);
    
  };

  const handleChange21 = (html) =>{
    seteditorEmp(html)
  }
  const handleChange22 = (html) =>{
    seteditorEdu(html)
  } 

  




  const changeedit = () => {
    setdisplay("visible")
  }

  //Code for Employment 

  const [objects, setObjects] = useState([]);
  const [emp,setemp] =useState("")



  const createObject = () => {
    const newObject = { id: objects.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:'' };
    setObjects([...objects, newObject]);
    setemp("hii")
  };

  const handleInputChange = (e, objectId, inputName) => {
    const updatedObjects = objects.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setObjects(updatedObjects);


  };

  const deleteObject = (objectId) => {
    const updatedObjects = objects.filter((object) => object.id !== objectId);
    setObjects(updatedObjects);
    setemp("")

  };
  // Code for Education    
  const [education, seteducation] = useState([]);
  const [edu,setedu] =useState("")


  const createeducation = () => {
    const newObject = { id: education.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '',input6:'' };
    seteducation([...education, newObject]);
  };

  const handleInputedu = (e, objectId, inputName) => {
    const updatedObjects = education.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    seteducation(updatedObjects);
  };

  const deleteedu = (objectId) => {
    const updatedObjects = education.filter((object) => object.id !== objectId);
    seteducation(updatedObjects);
    setedu("")
  };

  //code for website

  const [website, setwebsite] = useState([]);
  const [site,setsite] = useState("")

  const createweb = () => {
    const newObject = { id: website.length + 1, input1: '', input2: '' };
    setwebsite([...website, newObject]);
    setsite("h")
  };

  const handleInputweb = (e, objectId, inputName) => {
    const updatedObjects = website.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setwebsite(updatedObjects);
  };

  const deleteweb = (objectId) => {
    const updatedObjects = website.filter((object) => object.id !== objectId);
    setwebsite(updatedObjects);
    setsite("")
  };

  //code for skill

  const [skill, setskill] = useState([]);
  const [ill,setill] = useState("")

  const createskill = () => {
    const newObject = { id: skill.length + 1, input1: '', input2: '' };
    setskill([...skill, newObject]);
    setill("hi")
  };

  const handleInputskill = (e, objectId, inputName) => {
    const updatedObjects = skill.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setskill(updatedObjects);
  };

  const deleteskill = (objectId) => {
    const updatedObjects = skill.filter((object) => object.id !== objectId);
    setskill(updatedObjects);
    setill("")
  };

  //code for custom

  const [cust, setcust] = useState([]);

  const createcust = () => {
    const newObject = { id: cust.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setcust([...cust, newObject]);
  };

  const handleInputcust = (e, objectId, inputName) => {
    const updatedObjects = cust.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setcust(updatedObjects);
  };

  const deletecust = (objectId) => {
    const updatedObjects = cust.filter((object) => object.id !== objectId);
    setcust(updatedObjects);
  };

  //code for course

  const [course, setcourse] = useState([]);
  const[orse,setorse]=useState("")

  const createcourse = () => {
    const newObject = { id: course.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setcourse([...course, newObject]);
    setorse("hii")
  };

  const handleInputcourse = (e, objectId, inputName) => {
    const updatedObjects = course.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setcourse(updatedObjects);
  };

  const deletecourse = (objectId) => {
    const updatedObjects = course.filter((object) => object.id !== objectId);
    setcourse(updatedObjects);
    setorse("")
  };

  //code for reference

  const [three, setthree] = useState([]);
  const [referr,setreferr] = useState("")

  const createthree = () => {
    const newObject = { id: three.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setthree([...three, newObject]);
    setreferr("hii")
  };

  const handleInputthree = (e, objectId, inputName) => {
    const updatedObjects = three.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setthree(updatedObjects);
  };

  const deletethree = (objectId) => {
    const updatedObjects = three.filter((object) => object.id !== objectId);
    setthree(updatedObjects);
    setreferr("")
  };

  //code for Extra-curricular

  const [four, setfour] = useState([]);

  const createfour = () => {
    const newObject = { id: four.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setfour([...four, newObject]);
  };

  const handleInputfour = (e, objectId, inputName) => {
    const updatedObjects = four.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setfour(updatedObjects);
  };

  const deletefour = (objectId) => {
    const updatedObjects = four.filter((object) => object.id !== objectId);
    setfour(updatedObjects);
  };

  //code for Intern

  const [five, setfive] = useState([]);

  const createfive = () => {
    const newObject = { id: five.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setfive([...five, newObject]);
  };

  const handleInputfive = (e, objectId, inputName) => {
    const updatedObjects = five.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setfive(updatedObjects);
  };

  const deletefive = (objectId) => {
    const updatedObjects = five.filter((object) => object.id !== objectId);
    setfive(updatedObjects);
  };

  //code for Hobbies

  const [six, setsix] = useState([]);
  const [hoby,sethoby] = useState("")

  const createsix = () => {
    const newObject = { id: six.length + 1, input1: '', input2: '' };
    setsix([...six, newObject]);
    sethoby("hii")
  };

  const handleInputsix = (e, objectId, inputName) => {
    const updatedObjects = six.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setsix(updatedObjects);
  };

  const deletesix = (objectId) => {
    const updatedObjects = six.filter((object) => object.id !== objectId);
    setsix(updatedObjects);
    sethoby("")
  };

  //code for language

  const [seven, setseven] = useState([]);
  const [langua,setlangua] = useState("");

  const createseven = () => {
    const newObject = { id: seven.length + 1, input1: '', input2: '', input3: '', input4: '', input5: '' };
    setseven([...seven, newObject]);
    setlangua("hii")
  };

  const handleInputseven = (e, objectId, inputName) => {
    const updatedObjects = seven.map((object) => {
      if (object.id === objectId) {
        return { ...object, [inputName]: e.target.value };
      }
      return object;
    });
    setseven(updatedObjects);
  };

  const deleteseven = (objectId) => {
    const updatedObjects = seven.filter((object) => object.id !== objectId);
    setseven(updatedObjects);
    setlangua("")
  };

  //code for PDf Coverter

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('', 10, 10);

    const content = document.getElementById('pdf-content');

    html2canvas(content)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 17, 20);
        doc.save('sample.pdf');
      });
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [showFullView, setShowFullView] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
    setShowFullView(false);
  };

  const handleDelete = () => {
    setSelectedFile(null);
  };

  const handleView = () => {
    if (!showFullView) {
      setShowFullView(true)
    }
    else {
      setShowFullView(true)
    }

  };
  
  const uniqueSkills = new Set();
  // Filter the skill array to keep only unique items
  const uniqueSkillArray = skill.filter((object) => {
    if (!uniqueSkills.has(object.input1)) {
      uniqueSkills.add(object.input1);
      return true;
    }
    return false;
  });

  return(
    <div>
      <div style={{ display: "flex" }}>
      <div className="one">
      <div ><h3 className="uni">Untitled</h3></div>
        <div>
          
          <div><button className="p-but">100%</button></div>
          <div className="progresss">
      
          </div>

          <h2 className="div-head">Personal Details</h2>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor=""> Role</label> <br />
                <input type="text" value={firstname} onChange={handlechange} className="work" />
              </div>
            </div>
            <div className="photo">
              <div style={{ display: "flex" }}>

                <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
                  {({ getRootProps, getInputProps }) => (
                    <div className="dropzone" {...getRootProps()}>
                      <input {...getInputProps()} />
                      {selectedFile ?
                        (
                          <div className='image'>
                            <div className="image-container">
                              <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Uploaded"
                                className="rounded-image"
                                onClick={handleView}
                              />

                            </div>

                          </div>



                        ) : (
                          <div style={{ display: 'flex' }}>

                            <GoPerson className='icon'></GoPerson>


                          </div>
                        )}
                    </div>
                  )}
                </Dropzone>
                <div className='text'>
                  {
                    selectedFile ?
                      (
                        <div style={{ display: "block" }}>
                          <button onClick={handleDelete}>Delete</button>
                          <button onClick={handleView}>Edit Photo</button>
                        </div>
                      ) : (
                        <div>
                          <h4>Upload photo</h4>
                        </div>
                      )
                  }
                </div>
              </div>

            </div>
          </div>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">First Name</label> <br />
                <input type="text" className="work" value={name} onChange={handlechange1} />
              </div>
            </div>
            <div className="photo">
              <label htmlFor="">Last Name</label> <br />
              <input type="text" className="work" value={lastname} onChange={handlechange2} />
            </div>

          </div>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Email</label> <br />
                <input type="email" className="work" value={email} onChange={handlechange3} />
              </div>
            </div>
            <div className="photo">

           <label htmlFor="">Phone</label> <br />
           <div >
            {/* <input type="number"  className="work" value={phone} onChange={handlechange4} /> */}
           {/* <PhoneNumberInput  className="work"  value={phone} onChange={handlechange4}/> */}
           <PhoneInput 
        className="work"
        id="phone-id"
        value={phone}
        onChange={handlechange4}
      />
           </div>
           
           </div>

          </div>
          <div className="job-title">
            <div className="wanted">
              <div className="job">
                <label htmlFor="">Country</label> <br />
                <input type="text" className="work" value={country} onChange={handlechange5} />
              </div>
            </div>
            <div className="photo">
              <label htmlFor="">city</label> <br />
              <input type="text" className="work" value={city} onChange={handlechange6} />
            </div>

          </div>
          <div className={display ? "visble" : "hidden"}>
            <div className="job-title">
              <div className="wanted">
                <div className="job">
                  <label htmlFor="">Address</label> <br />
                  <input type="text" className="work" value={address} onChange={handlechange7} />
                </div>
              </div>
              <div className="photo">
                <label htmlFor="">Postal Code</label> <br />
                <input type="text" className="work" value={post} onChange={handlechange8} />
              </div>

            </div>
            <div className={display ? "visble" : "hidden"}>
              <div className="job-title">
                <div className="wanted">
                  <div className="job">
                    <label htmlFor="">Driving License</label> <br />
                    <input type="text" className="work" value={drive} onChange={handlechange9} />
                  </div>
                </div>
                <div className="photo">
                  <label htmlFor="">Nationality</label> <br />
                  <input type="text" className="work" value={national} onChange={handlechange10} />
                </div>

              </div>
            </div>
            <div className={display ? "visble" : "hidden"}>
              <div className="job-title">
                <div className="wanted">
                  <div className="job">
                    <label htmlFor="">Place Of Birth</label> <br />
                    <input type="text" className="work" value={birth} onChange={handlechange11} />
                  </div>
                </div>
                <div className="photo">
                  <label htmlFor="">Date of Birth</label> <br />
                  <input type="text" className="work" value={date} onChange={handlechange12} />
                </div>

              </div>
            </div>

          </div>
          <div >
            <h5 className="edit" onClick={() => setdisplay(!display)}>Edit additional details  </h5>
          </div>

        </div>
        <div>
          <div>
            <div>
              <h2 className="div-head">Professional Summary</h2>
            </div>
            <div>
              <p className="content-color">Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</p>
            </div>
            <div>
              <div>
                <ReactQuill
                  theme="snow"
                  value={editorHtml}
                  onChange={handleChange}
                  className='paragh'
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],

                      ['link']
                    ]
                  }}
                />
                <div>
                  {/* <h3>Editor Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: editorHtml }} /> */}
                </div>
              </div>

            </div>
            <div>
              <p className="p-content">Recruiter tip: write 50-200 characters to increase interview chances</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="div-head">Employment History</h2>
          </div>
          <div>
            <p className="content-color"> Show your relevent experince (last 10 years). use bullet points to note your achievements, if possible- <br /> use numbers/facts(Achieved X, measured by Y, by doing Z)</p>
          </div>
          <div>

            <div className='emp-div'>

              {objects.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>


                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Job title</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputChange(e, object.id, 'input1')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">Employer</label> <br />
                        <input
                          type="text"
                          value={object.input2}
                          className='work'
                          onChange={(e) => handleInputChange(e, object.id, 'input2')}
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className='wanted' id="format2">
                        
                        <div className="date-input-container">
  <label htmlFor="startDate">Start Date</label> <br />
  <input
    type="date"
    value={object.startDate} 
    className="work"
    id="work-id"
    
 
    onChange={(e) => handleInputChange(e, object.id, 'input4')}
  />
</div>
<div className="date-input-container" >
  <label htmlFor="endDate">End Date</label> <br />
  <input
    type="date"
    value={object.endDate}
    className="work"
    id="work-id4"
    onChange={(e) => handleInputChange(e, object.id, 'input6')}
  />
</div>
  


                      </div>
                      <div>
                        <label htmlFor="">City</label> <br />
                        <input
                          type="text"
                          value={object.input3}
                          className='work'
                          onChange={(e) => handleInputChange(e, object.id, 'input3')}
                        />
                      </div>
                    </div>
                    <div className="paradiv-main">
                      <div >
                        <label htmlFor="">Description</label> <br />
                        <textarea name="" id="" cols="85" rows="10" value={object.input5} onChange={(e) => handleInputChange(e, object.id, 'input5')}
                              className="paradiv"/>
               
                      </div>
                    </div>


                  </div>
                  <div>
                  <AiFillDelete className="delete2" onClick={() => deleteObject(object.id)}></AiFillDelete>
                    {/* <button className="delete" onClick={() => deleteObject(object.id)}>Delete</button> */}
                  </div>

                </div>
              ))}
              <button className="btn-bg" onClick={createObject}> + Add Employment</button>



            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="div-head">Education</h2>
          </div>
          <div>
            <p className="content-color">A varied education on your resume sums up the value that
              your learnings and background will bring to job
            </p>
          </div>
          <div>
            {/* <Regi2></Regi2> */}
            <div className='emp-div'>

              {education.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>

                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">School</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputedu(e, object.id, 'input1')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">Degree</label> <br />
                        <input
                          type="text"
                          value={object.input2}
                          className='work'
                          onChange={(e) => handleInputedu(e, object.id, 'input2')}
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className='wanted' id="format">
                        <div className="date1">
                          <label htmlFor="">Start Date</label> <br />
                          <input type='date'
                            value={object.input4}
                            className='work'
                            id="work-id3"
                            onChange={(e) => handleInputedu(e, object.id, 'input4')}
                          />
                        </div>
                        <div className="date2" >
  <label htmlFor="endDate">End Date</label> <br />
  <input type='date'
                            value={object.input6}
                            className='work'
                            id="work-id3"
                            onChange={(e) => handleInputedu(e, object.id, 'input6')}
                            />
</div>

                      </div>
                      <div>
                        <label htmlFor="">City</label> <br />
                        <input
                          type="text"
                          value={object.input3}
                          className='work'
                          onChange={(e) => handleInputedu(e, object.id, 'input3')}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Description</label> <br />
                        <textarea name="" id="" cols="85" rows="10" value={object.input5} onChange={(e) => handleInputedu(e, object.id, 'input5')}
                           />
                      </div>
                    </div>


                  </div>
                  <div>
                     <AiFillDelete className="delete1" onClick={() => deleteedu(object.id)} ></AiFillDelete>
                    {/* <button className="delete1" onClick={() => deleteedu(object.id)}>Delete</button> */}
                  </div>
                </div>
              ))}
              <button className="btn-bg" onClick={createeducation}> + Add education</button>

            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="div-head"> Websites & Social Links</h2>
          </div>
          <div>
            <p className="content-color">You can add links to websites you want hiring managers to see! Perhaps it will be
              a link to your portfolio,LinkedIn profile or personal website</p>
          </div>
          <div>
            {/* <Websites></Websites> */}
            <div className='emp-div'>

              {website.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>

                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Label</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputweb(e, object.id, 'input1')}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">Link</label> <br />
                        <input
                          type="text"
                          value={object.input2}
                          className='work'
                          onChange={(e) => handleInputweb(e, object.id, 'input2')}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <AiFillDelete className="delete2" onClick={() => deleteweb(object.id)}></AiFillDelete>
                    {/* <button onClick={() => deleteweb(object.id)}>Delete</button> */}
                  </div>
                </div>
              ))}
              <button className="btn-bg" onClick={createweb}> + Add Link</button>

            </div>

          </div>
        </div>
        <div>
          <div>
            <h2 className="div-head"> Skills</h2>
          </div>
          <div>
            <p className="content-color">
              Choose 5 important skills that show you fit the position. Make sure they match
              the key skills mentioned in the job listing(especially when applying via an online system)
            </p>
          </div>
          <div>
            {/* <Skills></Skills> */}
            <div className='emp-div'>

              {skill.map((object) => (
                <div key={object.id} style={{ display: "flex" }}>
                  <div className='emp-main'>

                    <div style={{ display: "flex" }}>
                      <div className='wanted'>
                        <div>
                          <label htmlFor="">Label</label> <br />
                          <input
                            type="text"
                            value={object.input1}
                            className='work'
                            onChange={(e) => handleInputskill(e, object.id, 'input1')}
                          />
                          <label htmlFor=""></label>
                          <select name="" id="" onChange={(e) => handleInputskill(e, object.id, 'input2')} value={object.input2}>
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            <option value="4">Level 4</option>
                            <option value="5">Level 5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <AiFillDelete className="delete-btn4" onClick={() => deleteskill(object.id)}></AiFillDelete>
                    {/* <button onClick={() => deleteskill(object.id)}>Delete</button> */}
                  </div>
                </div>
              ))}
              <button className="btn-bg" onClick={createskill}> + Add more skill</button>

            </div>
          </div>
        </div>
        <div>
          <div>
            {
              specific ? <span></span> : <div>
                <div className='emp-div'>

                  {cust.map((object) => (
                    <div key={object.id} style={{ display: "flex" }}>
                      <div className='emp-main'>

                        <div style={{ display: "flex" }}>
                          <div className='wanted'>
                            <div>
                              <label htmlFor="">Job title</label> <br />
                              <input
                                type="text"
                                value={object.input1}
                                className='work'
                                onChange={(e) => handleInputcust(e, object.id, 'input1')}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="">Employer</label> <br />
                            <input
                              type="text"
                              value={object.input2}
                              className='work'
                              onChange={(e) => handleInputcust(e, object.id, 'input2')}
                            />
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className='wanted'>
                            <div>
                            <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        placeholderText="MM/yyyy"
        id="monthYearInput"
        customInput={<input type="text" />}
      />
                            </div>
                            {/* <div>
                              <label htmlFor="">Start & End Date</label> <br />
                              <input type='date'
                                value={object.input4}
                                className='work'
                                onChange={(e) => handleInputcust(e, object.id, 'input4')}
                              />
                            </div> */}
                          </div>
                        </div>
                        <div>
                          <div>
                            <label htmlFor="">Description</label> <br />
                            <textarea name="" id="" cols="90" rows="15" value={object.input5} onChange={(e) => handleInputcust(e, object.id, 'input5')}
                              placeholder='e.g. Created and implemented lesson plans based on child-led
               interests and curiosities'/>
                          </div>
                        </div>


                      </div>
                      <div>
                        <AiFillDelete  onClick={() => deletecust(object.id)}></AiFillDelete>
                        {/* <button onClick={() => deletecust(object.id)}>Delete</button> */}
                      </div>
                    </div>
                  ))}
                  <button className="btn-bg" onClick={createcust}> + Add one more item</button>

                </div>
                
                <button onClick={delete1}>Delete</button></div>
            }
          </div>
          <div>
            {
              coursee ? <span></span> : <div>
                <div className='emp-div'>

                  {course.map((object) => (
                    <div key={object.id} style={{ display: "flex" }}>
                      <div className='emp-main'>

                        <div style={{ display: "flex"}}>
                          <div className='wanted'>
                            <div>
                              <label htmlFor="">Training</label> <br />
                              <input
                                type="text"
                                value={object.input1}
                                className='work'
                                onChange={(e) => handleInputcourse(e, object.id, 'input1')}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="">Institution</label> <br />
                            <input
                              type="text"
                              value={object.input2}
                              className='work'
                              onChange={(e) => handleInputcourse(e, object.id, 'input2')}
                            />
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className='wanted'>
                            <div>
                              <label htmlFor="">Start & End Date</label> <br />
                              <input type='date'
                                value={object.input4}
                                className='work'
                                onChange={(e) => handleInputcourse(e, object.id, 'input4')}
                              />
                            </div>
                          </div>

                        </div>



                      </div>
                      <div>
                        <AiFillDelete  className="delete2"  onClick={() => deletecourse(object.id)}></AiFillDelete>
                        {/* <button onClick={() => deletecourse(object.id)}>Delete</button> */}
                      </div>
                    </div>
                  ))}
                  <button className="btn-bg" onClick={createcourse}> + Add one more Training</button>

                </div>
                <button onClick={delete2}>Delete</button></div>
            }
          </div>
          <div>
            {
              reference ? <span></span> : <div>
                <div className='emp-div'>

                  {three.map((object) => (
                    <div key={object.id} style={{ display: "flex" }}>
                      <div className='emp-main'>

                        <div style={{ display: "flex" }}>
                          <div className='wanted'>
                            <div>
                              <label htmlFor="">name</label> <br />
                              <input
                                type="text"
                                value={object.input1}
                                className='work'
                                onChange={(e) => handleInputthree(e, object.id, 'input1')}
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="">company</label> <br />
                            <input
                              type="text"
                              value={object.input2}
                              className='work'
                              onChange={(e) => handleInputthree(e, object.id, 'input2')}
                            />
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className='wanted'>
                          </div>

</div>



</div>
<div>
  <AiFillDelete className="delete2"  onClick={() => deletethree(object.id)}></AiFillDelete>
{/* <button onClick={() => deletethree(object.id)}>Delete</button> */}
</div>
</div>
))}
<button className="btn-bg" onClick={createthree}> + Add one more Reference</button>

</div>
<button onClick={delete3}>Delete</button></div>
}
</div>
<div>
{
ship ? <span></span> : <div>
<div className='emp-div'>

{five.map((object) => (
<div key={object.id} style={{ display: "flex" }}>
<div className='emp-main'>

<div style={{ display: "flex" }}>
  <div className='wanted'>
    <div>
      <label htmlFor="">Job title</label> <br />
      <input
        type="text"
        value={object.input1}
        className='work'
        onChange={(e) => handleInputfive(e, object.id, 'input1')}
      />
    </div>
  </div>
  <div>
    <label htmlFor="">Employer</label> <br />
    <input
      type="text"
      value={object.input2}
      className='work'
      onChange={(e) => handleInputfive(e, object.id, 'input2')}
    />
  </div>
</div>
<div style={{ display: "flex" }}>
  <div className='wanted'>
    <div>
      <label htmlFor="">Start & End Date</label> <br />
      <input type='date'
        value={object.input4}
        className='work'
        onChange={(e) => handleInputfive(e, object.id, 'input4')}
      />
    </div>
  </div>
  <div>
    <label htmlFor="">City</label> <br />
    <input
      type="text"
      value={object.input3}
      className='work'
      onChange={(e) => handleInputfive(e, object.id, 'input3')}
    />
  </div>
</div>
<div>
  <div>
    <label htmlFor="">Description</label> <br />
    <textarea name="" id="des1" cols="90" rows="15" value={object.input5} onChange={(e) => handleInputfive(e, object.id, 'input5')}
      placeholder='e.g. Created and implemented lesson plans based on child-led
interests and curiosities'/>
  </div>
</div>


</div>
<div>
  <AiFillDelete className="delete-btn3"  onClick={() => deletefive(object.id)} ></AiFillDelete>
{/* <button onClick={() => deletefive(object.id)}>Delete</button> */}
</div>
</div>
))}
<button className="btn-bg" onClick={createfive}> + Add one more internship</button>

</div>
<button onClick={delete4}>Delete</button></div>
}
</div>
<div>
{
langu ? <span></span> : <div>
<div className='emp-div'>

{seven.map((object) => (
<div key={object.id} style={{ display: "flex" }}>
<div className='emp-main'>

<div style={{ display: "flex" }}>
  <div className='wanted'>
    <div>
      <label htmlFor="">Language</label> <br />
      <input
        type="text"
        value={object.input1}
        className='work'
        onChange={(e) => handleInputseven(e, object.id, 'input1')}
      />
    </div>
  </div>
  <div>
    <label htmlFor="">Level</label> <br />
    <input
      type="text"
      value={object.input2}
      className='work'
      onChange={(e) => handleInputseven(e, object.id, 'input2')}
    />
  </div>
</div>


</div>
<div>
  <AiFillDelete className="delete2" onClick={() => deleteseven(object.id)} ></AiFillDelete>
{/* <button onClick={() => deleteseven(object.id)}>Delete</button> */}
</div>
</div>
))}
<button className="btn-bg" onClick={createseven}> + Add one more languages</button>

</div>
<button onClick={delete5}>Delete</button></div>
}
</div>
<div>
{
hobbie ? <span></span> : <div>
<div className='emp-div'>

{six.map((object) => (
<div key={object.id} style={{ display: "flex" }}>
<div className='emp-main'>

<div style={{ display: "flex" }}>
  <div className='wanted'>
    <div>
      <label htmlFor="">Hobbies</label> <br />
      <input
        type="text"
        value={object.input1}
        className='work'
        onChange={(e) => handleInputsix(e, object.id, 'input1')}
      />
    </div>
  </div>
</div>
</div>
<div>
  <AiFillDelete className="delete-btn4" onClick={() => deletesix(object.id)}></AiFillDelete>
{/* <button onClick={() => deletesix(object.id)}>Delete</button> */}
</div>
</div>
))}
<button className="btn-bg" onClick={createsix}> + Add more Hobbie</button>

</div>
<button onClick={delete6}>Delete</button></div>
}
</div>
<div>
{
curricular ? <span></span> : <div>
<div className='emp-div'>

{four.map((object) => (
<div key={object.id} style={{ display: "flex" }}>
<div className='emp-main'>

<div style={{ display: "flex" }}>
  <div className='wanted'>
    <div>
      <label htmlFor="">Job title</label> <br />
      <input
        type="text"
        value={object.input1}
        className='work'
        onChange={(e) => handleInputfour(e, object.id, 'input1')}
      />
    </div>
  </div>
  <div>
    <label htmlFor="">Employer</label> <br />
    <input
      type="text"
      value={object.input2}
      className='work'
      onChange={(e) => handleInputfour(e, object.id, 'input2')}
    />
  </div>
</div>
<div style={{ display: "flex" }}>
  <div className='wanted'>
    <div>
      <label htmlFor="">Start & End Date</label> <br />
      <input type='date'
        value={object.input4}
        className='work'
        onChange={(e) => handleInputfour(e, object.id, 'input4')}
      />
    </div>
  </div>
  <div>
    <label htmlFor="">City</label> <br />
    <input
      type="text"
      value={object.input3}
      className='work'
      onChange={(e) => handleInputfour(e, object.id, 'input3')}
    />
  </div>
</div>
<div>
  <div>
    <label htmlFor="">Description</label> <br />
    <textarea name="" id="" cols="90" rows="15" value={object.input5} onChange={(e) => handleInputfour(e, object.id, 'input5')}
      placeholder='e.g. Created and implemented lesson plans based on child-led
interests and curiosities'/>
  </div>
</div>


</div>
<div>
  <AiFillDelete className="delete-btn3" onClick={() => deletefour(object.id)}></AiFillDelete>
{/* <button onClick={() => deletefour(object.id)}>Delete</button> */}
</div>
</div>
))}
<button className="btn-bg" onClick={createfour}> + Add Employment</button>

</div>
<button onClick={delete7}>Delete</button></div>
}
</div>

</div>
<div>
<div>
<h2>Add Section</h2>
</div>
<div>
{/* <button onClick={tension}> <img src="https://icons-for-free.com/iconfiles/png/512/customize+levels+settings+icon-1320085880730884001.png" alt="" className="icons" /> Extra curricular activities</button> */}
<button className="icon-btn"  onClick={certi}> <img src="https://p7.hiclipart.com/preview/522/461/307/computer-icons-academic-certificate-certification-diploma-training-course.jpg" alt="" className="icons" /> Training</button>
</div>
<div>

<button className="icon-btn" onClick={extra}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkWdMzuZ9a2FgYPotBkT9ELxs_Y1EUQMZXg&usqp=CAU" alt="" className="icons" /> Custom Section</button>
<button className="icon-btn" id="intern-btn" onClick={intern}> <img src="https://cdn-icons-png.flaticon.com/512/1945/1945648.png" alt="" className="icons" /> Internships</button>
</div>
<div>
<button className="icon-btn" onClick={hobbi}> <img src="https://static.thenounproject.com/png/3654397-200.png" alt="" className="icons" /> Hobbies</button>
<button className="icon-btn" id="intern-btn2" onClick={lang}> <img src="https://cdn-icons-png.flaticon.com/512/484/484633.png" alt="" className="icons" /> Languages</button>
</div>
<div>
<button className="icon-btn" onClick={refer}> <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX41086475.jpg" alt="" className="icons" /> References</button>
</div>
</div>
</div>
<div className="two">
<button onClick={downloadPDF}>Download PDF</button>
<div id="pdf-content">
<PDFExport
                scale={1.1}
                paperSize="A4"
                margin="2cm"
                ref={pdfExportComponent}
                keepTogether="p"
                margin={{ top: 20, left: 10, right: 5, bottom: 10 }}
              >
<div className="resume">
<div className="two-one">

<div style={{ display: "flex" }} className="two-one1">
<div>
<div id="photo-border">
<Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
{({ getRootProps, getInputProps }) => (
<div className="dropzone" {...getRootProps()}>
  <input {...getInputProps()} />
  {selectedFile ?
    (
      <div className='image'>
        <div className="image-container">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded"
            className="rounded-image"
            onClick={handleView}
          />

        </div>

      </div>



    ) : (
     
      <span></span>
    )}
</div>
)}
</Dropzone>
</div>
<div>
<h3 className="font" id="name-id">{firstname}</h3>
</div>
{
(email || phone) === "" ? <span></span> : <h6 className="tact">Contact</h6>
}

<div>
<p className="font">{email}</p>
</div>
<div>
<p className="font">{phone}</p>
</div>
{
   address === "" ? <span></span> : <div>
   <h5 className="add">Address</h5>

<div>
<div className="font">
  {`${address},${city},${country}`}
</div>
<div style={{ display: "flex" }}>
<div >
<p className="font" >{national}</p>
</div>
<div  >
<p className="font">{post}</p>
</div>
</div>
</div>
</div>
}
<div>

</div>
<div>
{
                      drive ===""? <span></span> : <div>
                        <h5 className="drive">Driving License</h5>
                    <p className="font" id="drive-id">{drive}</p>
                  </div>
                    }
</div>


<div >

{
date === "" ? <span></span> : <div>
<h5 className="dob2">Date / Place of Birth</h5>
{/* <p className="font" id="place">{date}</p> */}
<div className="font">
  {`${date} / ${birth}`}
</div>
</div>
}

</div>
<div>
                      {
                        birth === "" ? <span></span> : <div>
                          {/* <h5 className="dob2">Place of birth</h5> */}
                          {/* <p className="font">{birth}</p> */}
                        </div>
                      }
                    </div>
</div>

<div className="Name">
<div className="Ankita">
<h5 className="bold" id="bold1">{name}{lastname}</h5>
</div>

<div className="summary">
{
editorHtml === "" ? <span></span> : <h3 className="prof">Profile</h3>
}
<div className="mess" dangerouslySetInnerHTML={{ __html: editorHtml }} />
</div>
</div>
</div>
<div style={{display:"flex"}}>
<div className="two2-one">
<div className="obj">
{
emp === "" ? <span></span> : <h3 id="emp-history">Employment History</h3>
}

{objects.map((object) => (
<div key={object.id}>

<h5 className="inps">{`${object.input1} at ${object.input2}, ${object.input3}`}</h5>
{/* { <h5 className="inpss">{`${object.input4}  ${object.input6}`}</h5> } */}
{/* {
  object.input4 && object.input5  !== "" ? <div>
     <span className="dd">{object.input4}</span>
<span className="dd1">{object.input6}</span>
  </div> : <span></span>
} */}


{/* {
  object.input4 === "" ? <span></span> : object.input5 === "" ? <span></span> : <div>
  <span className="dd">{object.input4}</span>
<span className="dd1">{object.input6}</span>
</div>
} */}
{
  object.input4 === "" ? <span></span> : object.input6 === "" ? <span></span> : <div>
    <span className="dd">{object.input4}</span>
<span className="dd1">{object.input6}</span>
  </div>
}



<h6 className="inpsss">{object.input5}</h6>

</div>
))}
</div>
<div className="obj">
{
education   === "" ? <span></span> : <h3 className="emp-history">Education</h3>
}

{education.map((object) => (
<div key={object.id}>

<h5 className="inps">{`${object.input2} , ${object.input1} , ${object.input3}`}</h5>
{
  object.input4 === "" ? <span></span> : object.input6 === "" ? <span></span> : <div>
    <span className="dd">{object.input4}</span>
<span className="dd1">{object.input6}</span>
  </div>
}


{/* <span className="dd">{object.input4}</span>
<span className="dd1">{object.input6}</span> */}


<h6 className="inpsss">{object.input5}</h6>

<div className="messs" dangerouslySetInnerHTML={{ __html: editorEdu }} />
</div>
))}
</div>
<div className="obj">

{four.map((object) => (
<div key={object.id}>
<h5 className="inps">{`${object.input1} at ${object.input2} , ${object.input3}`}</h5>
<h5 className="inpss">{object.input4}</h5>
<h6 className="inpsss">{object.input5}</h6>
</div>
))}
</div>
<div className="obj">

{five.map((object) => (
<div key={object.id}>
<h5 className="inps">{`${object.input1} at ${object.input2} , ${object.input3}`}</h5>
<h5 className="inpss">{object.input4}</h5>
<h6 className="inpsss">{object.input5}</h6>

</div>
))}
</div>

</div>
<div className="two22-one">
{
site === "" ? <span></span> :   <div>

<div className="inputt">

 <h2 className="link"> Links</h2>

{website.map((object) => (
<div key={object.id} style={{display:"flex"}} className="in">

{/* <p className="inpo">{object.input1}</p> */}
<Link to={object.input2} className="inpo">{object.input1}</Link>


</div>
))}
</div>
</div>
}
{/* {
ill === "" ? <span></span> :
<div className="inputt">
 <h2 className="skil">Skill</h2>
{skill.map((object) => (  
<div key={object.id}>
 
  <div style={{display:"flex"}}>
    <p className="inpo">{object.input1}</p>
    {
      object.input2 === "" ? <span></span> : <p className="inpo">---{`${object.input2}/5`}</p>
    }

  </div>
  
   
  

</div>
))}
</div>
} */}
 {
  ill === "" ? <span></span> :
  <div className="inputt">
      <h2 className="skil">Skill</h2>
      {uniqueSkillArray.map((object) => (
        <div key={object.id}>
          <div style={{ display: "flex" }}>
            <p className="inpo">{object.input1}</p>
            {object.input2 === "" ? <span></span> : <p className="inpo">---{`${object.input2}/5`}</p>}
          </div>
        </div>
      ))}
    </div>
    }
{
orse === ""? <span></span> : <div>

<div className="inputt">
<h2 className="study">Course</h2>

{course.map((object) => (
<div key={object.id}>
<p className="cour">{`${object.input1} at ${object.input2}`}</p>
<p className="cou">{object.input4}</p>
</div>
))}
</div>
</div>
}
{
hoby ===""? <span></span> : <div>
<div className="inputt">
<h2 className="hobyy">Hobbies</h2>
{six.map((object) => (
<div key={object.id}>
<p className="courr">{object.input1}</p>
</div>
))}
</div>
</div>
}
{
langua ===""? <span></span> : <div>
<div className="inputt">
<h2 className="lang">Language</h2>
{seven.map((object) => (
<div key={object.id}>
<p className="the">{object.input1}</p>
<p className="thee">{object.input2}</p>

</div>
))}
</div>
</div>
}
{
referr ===""? <span></span> : <div>
<div className="inputt">
<h2 className="refr">Referrence</h2>
{three.map((object) => (
<div key={object.id}>
<p className="the">{`${object.input1} from ${object.input2}`}</p>
<p className="thee">{object.input4}</p>

</div>
))}
</div>
</div>
}


</div>

</div>






<div className="input">

{cust.map((object) => (
<div key={object.id}>
<p className="project9">{object.input1}</p>
<p>{object.input2}</p>
<p>{object.input3}</p>
<p  >{object.input5}</p>
</div>
))}
</div>






</div>




</div>
</PDFExport>
</div>
</div>

</div>
      {/* <button onClick={downloadPDF}>Download</button> */}
      
                
                
              
    </div>
  )
}

export default Kendo
    
                