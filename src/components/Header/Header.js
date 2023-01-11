import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <a href='/' className='title'><h1>New York News</h1></a>
            <a href='/' className='return'><h2>Go Home</h2></a>
        </header>
    )
}

export default Header