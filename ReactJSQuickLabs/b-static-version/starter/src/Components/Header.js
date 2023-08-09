import React from 'react'
import logoImage from './images/qalogo.svg'

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
                <a href="/" className="navbar-brand">
                    <h1>Todo App</h1>
                </a>
            </nav>
        </header>
    )
}

export default Header