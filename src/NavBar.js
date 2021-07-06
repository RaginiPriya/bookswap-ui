import React, { Component } from 'react'
import "./NavBar.css"

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="./Home">Home</a></li>
                <li><a href="./Login">Login</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="./Library">Library</a></li>
              </ul>
            </div>
        );
    }
}

export default Navbar