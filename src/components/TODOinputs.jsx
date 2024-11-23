import {useState} from "react"

export default function TODOinputs(props)
{
    const {handleAddToDos, toDoValue, setToDoValue, handleKeyDown} = props

    return (
        <header>
            <input 
                value = {toDoValue} 
                onChange={(e)=> setToDoValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter todo..." 
            />
            <button onClick={() => {
                if(toDoValue.trim() === '') return; 
                handleAddToDos(toDoValue);
                setToDoValue('');
                }}>Add
            </button>
        </header>
    );

}