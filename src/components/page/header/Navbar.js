import React, { useState } from 'react'

const Navbar = ({ displayNav }) => {
  const [navOpen, setNavOpen] = useState(false)

  function closeNav() {
    setNavOpen(false)
  }
  return (
    <nav className={`${displayNav ? 'active' : ''} ${navOpen ? 'open' : ''}`}>
      <i
        className="fas fa-bars"
        onClick={() => (navOpen ? closeNav() : setNavOpen(true))}
      ></i>
      <a href="#hero" onClick={closeNav}>
        Home
      </a>
      <a href="#about" onClick={closeNav}>
        About
      </a>
      <a href="#experience" onClick={closeNav}>
        Experience
      </a>
      <a href="#projects" onClick={closeNav}>
        Projects
      </a>
    </nav>
  )
}

export default Navbar
