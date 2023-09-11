import React, { useState } from 'react';

function Websites() {
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
          
          <div style={{display:"flex"}} id='lbl'>
            <div className='wanted'>
            <div>
                <label htmlFor="">label</label> <br />
                <input
            type="text"
            value={object.input1}
            className='work'
            onChange={(e) => handleInputChange(e, object.id, 'input1')}
          />
            </div>
            </div>
            <div>
              <label htmlFor="">Link</label> <br />
              <input
            type="text"
            value={object.input2}
            className='work'
            onChange={(e) => handleInputChange(e, object.id, 'input2')}
          />
            </div>
          </div>
          </div>
          <div>
          <button onClick={() => deleteObject(object.id)}>Delete</button>
          </div>
    </div>
      ))}
      <button onClick={createObject} className='employment'> + Add Link</button>
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

export default Websites;