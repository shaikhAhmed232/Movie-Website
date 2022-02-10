import React from 'react'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilm, faTv} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <div className="navbar bg-light nav-dark py-0">
        <div className="nav bg-dark my-0">
            <div className='nav-item'>
                <NavLink className="nav-link text-center" to="/">
                    <FontAwesomeIcon icon={faFilm} />Movies
                </NavLink>
            </div>
            <div className='nav-item'>
                <NavLink className="nav-link text-center" to="tvseries">
                    <FontAwesomeIcon icon={faTv} />Tv
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar