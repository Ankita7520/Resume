import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import RichTextEditor from './ReachTextEditor';

function Table() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [objects, setObjects] = useState([]);

  const createObject = () => {
    const newObject = { id: objects.length + 1, input1: '', input2: '',input3: '' ,input4: '',input5: ''};
    setObjects([...objects, newObject]);
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
       };

  return (
    <div className='emp-div'>
      
      {objects.map((object) => (
        <div key={object.id} style={{display:"flex"}}>
          <div className='emp-main'>
          
          <div style={{display:"flex"}}>
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
          <div style={{display:"flex"}}>
            <div className='wanted'>
            <div>
              {/* <label htmlFor="">Start & End Date</label> <br />
              <input type='date'
              value={object.input4}
              className='work'
              onChange={(e)=>handleInputChange(e,object.id,'input4')}
              /> */}
              <label htmlFor="" placeholder='MM/YYYY'>Start & End Date</label> <br />
              
              
              
                    
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        
        id="monthYearInput"
        customInput={<input type="text"  />}
       
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
          <div>
            <div className='textt'>
              <label htmlFor="">Description</label> <br />
              <div className='paragraph'><RichTextEditor></RichTextEditor></div>
            
            </div>
          </div>
          
          
          </div>
          <div>
          <button onClick={() => deleteObject(object.id)}>Delete</button>
          </div>
    </div>
      ))}

      <button onClick={createObject} className='employment'> + Add Employment</button>
      
     
      <div>
        
        {objects.map((object) => (
          <div key={object.id}>
            <p>{object.input1}</p>
            <p>{object.input2}</p>
            <p>{object.input3}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;