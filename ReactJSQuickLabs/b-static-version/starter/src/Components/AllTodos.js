import React from 'react'
import './css/AllTodos.css'
import Todo from './Todo'
import TodoModel from './utils/Todo.model'
import propTypes from 'prop-types'

const AllTodos = ({data}) => {
    const todos = data.todos.map((currentTodo) => {
        const todo = new TodoModel(currentTodo.todoDescription, currentTodo.todoDateCreated, currentTodo.todoCompleted, currentTodo._id);
        return <Todo todo={todo} key={todo._id}  />
    })
  return (
    <div className='row'>
        <h3>Todo List</h3>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Date Created</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos}
            </tbody>
        </table>
    </div>
  )
}

AllTodos.propTypes = {
    data: propTypes.exact({
        todos: propTypes.arrayOf(propTypes.exact({
            todoDescription: propTypes.string.isRequired,
            todoDateCreated: propTypes.string.isRequired,
            todoCompleted: propTypes.bool.isRequired,
            _id: propTypes.string
        }))
        }
    )
}


export default AllTodos