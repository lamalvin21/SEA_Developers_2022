import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AllTodos from './Components/AllTodos';
import AddEditTodo from './Components/AddEditTodo';
import { useState, useEffect } from 'react';
import sampleTodos from './sampleTodos.json';

function App() {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    setTodos({todos: sampleTodos});
  });

  const submitTodoInApp = todo => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
        <Header/>
        <div className='container'>
          <AllTodos data={{todos}}/>
          <AddEditTodo submitTodo={submitTodoInApp}/>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
