import React from 'react'

export default function Todoitems({todo , OnDelete}) {
  return (
    <div className="my-3">
      <h4>{todo.sno} {todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={ ()=>{ OnDelete(todo)}} >Delete</button>
    </div>
  )
}
