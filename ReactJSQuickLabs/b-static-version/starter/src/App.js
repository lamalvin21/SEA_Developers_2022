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
// import sampleTodos from './sampleTodos.json';
import axios from 'axios';
import Modal from './Components/utils/Modal';

const TODOSURL = 'http://localhost:4000/todos';

function App() {
  const [todos, setTodos] = useState({});
  const [getError, setError] = useState("");
  const [postError, setPostError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setTodos(await getTodos());
    }
    setTimeout(() => {
      getData();
    }, 5000)
  }, []);

  const getTodos = async () => {
    try {
      const response = await axios.get(TODOSURL);
      return response.data.length ? { todos: response.data } : { error: "No todos found" };
    } catch (error) {
      setError('Data not available from server: ${error.message}');
      return 'Data not available from server: ${error.message}';
    }
  };

  const submitTodoInApp = async (todo) => {
    setPostError("");
    try {
      await axios.post(TODOSURL, todo);
    } catch (error) {
      setPostError('Error: ${error.message}');
    } finally {
      setTodos(await getTodos());
    }
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
  };

  return (
    <>
      {getError && <Modal handleClose={()=>setError("")} message={getError}/>}
      {postError && <Modal handleClose={()=>setPostError(false)} show={postError}/>}
      <div className="container">
        <Header/>
        <div className='container'>
          <AllTodos data={todos}/>
          <AddEditTodo submitTodo={submitTodoInApp}/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
