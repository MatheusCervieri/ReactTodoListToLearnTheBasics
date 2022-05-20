import { useState } from "react";
import { useRef } from "react";
import Todos from "./Todos";
import { v4 as uuidv4 } from 'uuid'; //npm i uuid

function App() {
  const [arraytodos, setArraytodos] = useState([{name: "Todo 1", id: 1 , checked:true}, {name: "Todo 2", id: 2 , checked:false}]);
  const form1 = useRef();
  function addtodo(){
    const name = form1.current.value;
    setArraytodos(prevtodos => {
      return [...prevtodos, {name: name, id: uuidv4(), checked: false}]
    });
    form1.current.value = "";

 }
 function checkHandle(id){
  const newtodos = [...arraytodos];
  const todo = newtodos.find(todo => todo.id === id);
  todo.checked = !todo.checked;
  setArraytodos(newtodos);
 }
 function clearComplete(){
  const newtodos = arraytodos.filter(todo => todo.checked === false);
  setArraytodos(newtodos);
 }
  return (
    <div>
      <Todos array={arraytodos} checkboxhandler={checkHandle}/>
      <input type="text" ref={form1}></input>
      <button onClick={addtodo}>Add Todo</button>
      <button onClick={clearComplete}>Clear Complete Todos</button>
    </div>
  );
}

export default App;
