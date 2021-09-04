import React, { useState } from "react"
import { NavLink, Route } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]

  const handleToggle = () => {
    setNavbarOpen(pre => !pre)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <React.Fragment>
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )}
      </button>
      <nav className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
        <ul>
          {links.map(link => {
            return <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName="active-link"
                exact
                onClick={closeMenu}>{link.text}</NavLink>
            </li>
          })}
        </ul>
      </nav>
    </React.Fragment>
  )
}
export default Navbar
