import React from "react"
import { Link } from "react-router-dom"

//setting link back home and returns  as functional
function Header() {
    return (
        <header>
            <div className = "headerLink">
            <Link exact="true" activeclassname="active" to="/">
                Home
            </Link>
            <h1>MARVELBOOK</h1>
            </div>
        </header>
    )
}
export default Header