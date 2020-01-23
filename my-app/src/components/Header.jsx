import React from "react"
import { Link } from "react-router-dom"

//setting up as functional
function Header() {
    return (
        <header>
            <div className = "headerLink">
            <Link exact="true" activeclassname="active" to="/">
                Home
            </Link>
            <h1>X-BOOK</h1>
            </div>
        </header>
    )
}
export default Header