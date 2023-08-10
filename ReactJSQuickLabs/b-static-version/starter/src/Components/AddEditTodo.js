import React from 'react'
import TodoForm from './TodoForm'
import  './css/AddEditTodo.css'

const AddEditTodo = () => {
  return (
    <>
        <div className='addEditTodo row'>
            <h3>Add/Edit Todo</h3>
        </div>
        <TodoForm />
    </>
  )
}

export default AddEditTodo