import {useState, useEffect} from "react"
import TODOinputs from "./components/TODOinputs"
import TODOlist from "./components/TODOlist"

function App() 
{
  const [todos, setToDos] = useState([]);
  const [toDoValue, setToDoValue] = useState('');

    function persistData(newList)
    {
      localStorage.setItem('todos', JSON.stringify({todos:newList}));
    }

    function handleAddToDos(newToDo)
    {
      const newToDoList = [...todos, newToDo];
      persistData(newToDoList);
      setToDos(newToDoList);
    }

    function handleDeleteToDo(index)
    {
      const newToDoList = todos.filter((todo, TODOindex) => {return TODOindex !== index});
      persistData(newToDoList);
      setToDos(newToDoList);
    }

    function handleEditToDo(index)
    {
      const valueToBeEdited = todos[index];
      setToDoValue(valueToBeEdited);
      handleDeleteToDo(index);
    }

    useEffect(() => {
      if (!localStorage) return;
       
      let localToDos = localStorage.getItem('todos');

      if (!localToDos) return;
          
      localToDos = JSON.parse(localToDos).todos;
      setToDos(localToDos);
    }, [])

    function handleKeyDown(e)
    {
      if(e.key === 'Enter')
      {
        if (toDoValue.trim() === '') return;
        handleAddToDos(toDoValue.trim());
        setToDoValue('');
      }
    }

  return (
    <>
      <TODOinputs 
        toDoValue={toDoValue} 
        setToDoValue={setToDoValue} 
        handleAddToDos={handleAddToDos} 
        handleKeyDown={handleKeyDown}
      />
      <TODOlist 
        handleEditToDo={handleEditToDo} 
        handleDeleteToDo={handleDeleteToDo} 
        todos={todos}
      />
    </>
  )
}

export default App
