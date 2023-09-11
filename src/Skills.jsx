import React, { useState } from 'react';

function Skills() {
  const [objects, setObjects] = useState([]);

  const createObject = () => {
    const newObject = { id: objects.length + 1, input1: '', input2: ''};
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
                <label htmlFor="">Label</label> <br />
                <input
            type="text"
            value={object.input1}
            className='work'
            onChange={(e) => handleInputChange(e, object.id, 'input1')}
          />
            </div>
            </div>
          </div>
          </div>
          <div>
          <button onClick={() => deleteObject(object.id)}>Delete</button>
          </div>
    </div>
      ))}
      <button onClick={createObject} style={{color:"blue" ,backgroundColor:"white" , border:"none"}} className='employment'> + Add more skill</button>
      {/* <div>
        <h2>Input Values:</h2>
        {objects.map((object) => (
          <div key={object.id}>
            <p>{object.input1}</p>
            <p>{object.input2}</p>
            <p>{object.input3}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Skills;