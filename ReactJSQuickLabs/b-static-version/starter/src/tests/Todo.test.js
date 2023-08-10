import React from "react";
import { create } from "react-test-renderer";
import TodoModel from "../Components/utils/Todo.model";
import Todo from "../Components/Todo";

jest.mock('../Components/utils/Todo.model', () => {
    return class TodoModel {
        constructor() {
            this._id = 1;
            this.todoDescription = 'Test Todo';
            this.dateCreated = '2019-05-04T15:30:00.000Z';
            this.completed = true;
        }
    }
});

test('It should render 2 tds with className completed if props.todo.completed is true', () => {
    const testTodo = new TodoModel();
    const testRenderer = create(<Todo todo={testTodo}/>);
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType('td');
    for (let i = 0, j=cells.length; i < j; i++) {
        expect(cells[i].props.className).toBe('completed');
    }
});

test('It should render 2 tds with className empty string if props.todo.completed is false', () => {
    const testTodo = new TodoModel();
    testTodo.completed = false;
    const testRenderer = create(<Todo todo={testTodo}/>);
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType('td');
    for (let i = 0, j=cells.length; i < j; i++) {
        expect(cells[i].props.className).toBeFalsy();
    }
});

test('It should render N/A in the last td of the row if props.todo.completed is true', () => {
    const testTodo = new TodoModel();
    const testRenderer = create(<Todo todo={testTodo}/>);
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType('td');
    expect(cells[cells.length - 1].children[0]).toBe('N/A');
});

test('It should render a link in the last td of the row if props.todo.completed is false', () => {
    const testTodo = new TodoModel();
    testTodo.completed = false;
    const testRenderer = create(<Todo todo={testTodo}/>);
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType('a');
    expect(cells[0].props.href).toBe('/');
});