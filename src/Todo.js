import React from 'react'

export default function Todo(props) {
  function handleTodoClick(){
    props.checkboxhandler(props.todo.id);
  }
  return (
    <div>
    <input type="checkbox" checked={props.checked} onChange={handleTodoClick}></input>    
    {props.name}
    </div>
  )
}
