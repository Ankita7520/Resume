import React, { useState } from "react";
import { DragDropContext , Droppable , Draggable } from "react-beautiful-dnd"

const Data = [
  {
    id: "01",
    name:"Education",
    items:[{
      id:"001",name:"maths",
    },{
      id:"002",name:"science"
    }],
    tint: 1,
  },
  {
    id: "02",
    name:"Employment",
    items:[{
      id:"001",name:"Java",
    },{
      id:"002",name:"Python"
    }],
    tint: 2,
  }
]
function Hobbiess (){

  const [stores, setStores] = useState(Data)

  const handleDragDrop = (results)=>{
    const {source, destination, type} = results

    if(!destination) return
    if(source.droppableId === destination.droppableId && source.index === destination.index) return

    if(type === "group"){
      const reorderedStores = [...stores];

      const sourceindex = source.index
      const destinationindex = destination.index

      const [removedStore] = reorderedStores.splice(sourceindex, 1)
      reorderedStores.splice(destinationindex, 0 , removedStore)

      return setStores(reorderedStores)
    }
  }
  return(
    <div>
      <DragDropContext onDragEnd={handleDragDrop}>
      <div>
        <Droppable droppableId="Root" type="group">
        {(provided)=>(
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {stores.map((store,index)=>(
          <Draggable draggableId={store.id} key={store.id} index={index}>
            {(provided)=>(
              <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className="list">
              <h3>{store.name}</h3>
              <Storelist {...store}/>
            </div>
            )}
            
          </Draggable>
        ))}
          </div>
        )}
        </Droppable>
      </div>
      </DragDropContext>
    </div>
  )
}

function Storelist({name, items, id}){
  return(
    <div>
      <div>
      {/* <h3>{name}</h3> */}
      </div>
      <div>
        {items.map((item,index) => (
          <div className="store">
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hobbiess