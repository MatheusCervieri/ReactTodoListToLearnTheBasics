import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
  return (
    props.array.map(todo => {
        return <Todo name={todo.name} todo={todo} checked={todo.checked} key={todo.id} checkboxhandler={props.checkboxhandler}/>
    })
  )
}
