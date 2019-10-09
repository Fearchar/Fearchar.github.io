import React, { useState } from 'react'

const Navbar = ({ displayNav }) => {
  const [navOpen, setNavOpen] = useState(false)

  function closeNav() {
    setNavOpen(false)
  }
  return (
    <div className={`${displayNav ? 'active' : ''} ${ navOpen ? 'open' : ''}`}>
      <i
        className="fas fa-bars"
        onClick={() => navOpen ? closeNav() : setNavOpen(true)}
      ></i>
      <a
        href="#hero"
        onClick={closeNav}
      >Home</a>
      <a
        href="#bio"
        onClick={closeNav}
      >Bio</a>
      <a
        href="#experience"
        onClick={closeNav}
      >Expirience</a>
      <a
        href="#projects"
        onClick={closeNav}
      >Projects</a>
      <a
        href="#interests"
        onClick={closeNav}
      >Interests</a>
    </div>
  )
}

export default Navbar
