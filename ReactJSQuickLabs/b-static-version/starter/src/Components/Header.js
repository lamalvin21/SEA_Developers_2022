import React from 'react'
import logoImage from './images/qalogo.svg'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <a href="https://www.qa.com" target="_blank" rel="noopener noreferrer" className="navbar-brand">
                    <img
                        src={logoImage}
                        alt="QA Ltd"
                        width="100"
                        className="d-inline-block align-top"
                    />
                </a>
                <Link to="/" className="navbar-brand">
                    <h1>Todo App</h1>
                </Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <NavLink to="/" exact className="nav-link active">All Todos</NavLink>
                        </li>
                        <li className='navbar-item'>
                            <NavLink to="/add" exact className="nav-link active">Add Todo</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header