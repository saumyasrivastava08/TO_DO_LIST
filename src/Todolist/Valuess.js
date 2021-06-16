import React  from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './Todo.css';

export default function Valuess(props) {

  return (
    <>
    <div className="tex">
      <button className="btnn">
    <DeleteIcon 
         onClick ={() => {
          props.onSelect(props.id);

         }}
         className="icon"
       />  
      </button>

        {props.text}   <br />     
  
    
        </div>
    
    </>
  
  )
};

