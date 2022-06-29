import React from 'react'
import Todoitems from './Todoitems'

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length == 0 ? "NO todos remaining here" :
          props.todos.map((todo) => {
            return <Todoitems todo={todo} key={todo.sno} OnDelete={props.OnDelete} />
          }
          )
        }

    </div>
  )
}

export default Todos
