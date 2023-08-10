import React from 'react'
import propTypes from 'prop-types'
import TodoModel from './utils/Todo.model'

const Todo = ({todo}) => {
    const dateCreated = new Date(Date.parse(todo.todoDateCreated)).toUTCString();
    const completedClassName = todo.todoCompleted ? 'completed' : '';
    let completed;

    if (todo.todoCompleted) {
        completed = 'N/A'
    } else {
        completed = <a href="/">Edit</a>
    }

    return (
        <tr>
            <td className={completedClassName}>{todo.todoDescription}</td>
            <td className={completedClassName}>{dateCreated}</td>
            <td className={completedClassName}>{completed}</td>
        </tr>
    )
};

Todo.propTypes = {
    todo: propTypes.instanceOf(TodoModel)
}

export default Todo
