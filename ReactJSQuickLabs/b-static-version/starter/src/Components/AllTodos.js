import React, { useEffect } from 'react'
import './css/AllTodos.css'
import Todo from './Todo'
import TodoModel from './utils/Todo.model'
import propTypes from 'prop-types'
import { useState } from 'react'

const AllTodos = ({data}) => {
    // const todos = data.todos?.map(currentTodo => {
    //     const todo = new TodoModel(currentTodo.todoDescription, currentTodo.todoDateCreated, currentTodo.todoCompleted, currentTodo._id);
    //     return <Todo todo={todo} key={todo._id}  />
    // })

    const [dateStatus, setDateStatus] = useState({name: "loading", message: "Data is loading..."});

    useEffect(() => {
        if (data?.error) {
            setDateStatus({name: "error", message: data.error});
        } else if (data?.error) {
            const ds = data.todos.length > 0 ? {name: "data", messsage: null} : {name: "nodata", message: "There were no todos previously saved"};
            setDateStatus(ds);
        } else {
            setDateStatus({name: "loading", message: "Data is loading..."});
        }
    }, [data]);

    const populateTable = () => {
        if (data?.todos?.length > 0) {
            return data.todos.map(currentTodo => {
                const todo = new TodoModel(currentTodo.todoDescription, currentTodo.todoDateCreated, currentTodo.todoCompleted, currentTodo._id);
                return <Todo todo={todo} key={todo._id}  />
            });
        } else {
            return <tr><td id={dateStatus.name} colSpan="3">{dateStatus.message}</td></tr>
        }
    };

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
                {populateTable()}
            </tbody>
        </table>
    </div>
  )
}

AllTodos.propTypes = {
    data: propTypes.oneOfType([
        propTypes.exact({
        todos: propTypes.arrayOf(
            propTypes.exact({
                todoDescription: propTypes.string,
                todoDateCreated: propTypes.string,
                todoCompleted: propTypes.bool,
                _id: propTypes.string
            })
        ),
        }),
        propTypes.exact({
            error: propTypes.string
        }),
        propTypes.exact({})
        ]),
}


export default AllTodos