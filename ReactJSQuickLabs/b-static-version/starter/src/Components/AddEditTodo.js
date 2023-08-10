import React from 'react'
import TodoForm from './TodoForm'
import  './css/AddEditTodo.css'
import propTypes from 'prop-types'
import generateTodoId from './utils/generateId'
import TodoModel from './utils/Todo.model'

const AddEditTodo = props => {

  const addEditSubmitTodo = (todoDescription, todoDateCreated, todoCompleted) => {
    const _id = generateTodoId();
    const newTodo = new TodoModel(todoDescription, todoDateCreated?.toISOString(), todoCompleted, _id);
    props.submitTodo(newTodo);
  };

  return (
    <>
        <div className='addEditTodo row'>
            <h3>Add/Edit Todo</h3>
        </div>
        <TodoForm submitTodo={addEditSubmitTodo}/>
    </>
  )
}

AddEditTodo.propTypes = {
    submitTodo: propTypes.func.isRequired
}

export default AddEditTodo