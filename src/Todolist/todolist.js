
import React, { useState } from 'react';
import Valuess from './Valuess';

import './Todo.css';
export default function TodoList() {
  
  const [item , addItem] = useState("");
  const [itm,setItm] = useState([]);
  
  const itemNames = (event) => {
      addItem(event.target.value);
  };
  const addItm = () => {
    setItm((oldItems) => {
      return [...oldItems, item];
    });
     addItem("");
  };
  const deletItm = (id) => {
       setItm((oldItems) => {
         return oldItems.filter((arr,index) => {
               return index !==id;
         })
       })
  }
  
    return (
     
      <div  >
          
        <h1 className="title"> TodoList</h1>
        <br />
        <div class="input">
        <input type="text" placeholder="Add the items"
          value = {item}
           onChange={itemNames} 
           className="inputs"/>
         <button onClick={addItm} className="btn"> Add</button>
        </div>
       
         <br />
        
         <ol className="itm">
           
             {itm.map((itemval, index) => {
                      return <Valuess 
                      key={index}
                      id={index} 
                      text = {itemval} 
                      onSelect={deletItm}
                      />;
                      
                     })}
            
          
         </ol>
        
          
         </div>
     
    )
}
