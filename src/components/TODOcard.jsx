import React from 'react'

export default function TODOCcard(props) 
{
  const { children, handleDeleteToDo, index, handleEditToDo } = props;
  return (
    <li className='TODOitem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={() => {handleEditToDo(index)}}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button onClick={() => {handleDeleteToDo(index)}}>  
          <i className="fa-solid fa-trash-can"></i> 
        </button>    
      </div>
    </li>
  );

}
