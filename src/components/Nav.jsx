import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar p-4 ">
        <Link to="/">
        <a className="btn btn-ghost normal-case text-xl">
          Library of Alexandria
        </a>
        </Link>
      </nav>
  )
}

export default Nav