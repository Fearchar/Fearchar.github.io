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
      >Fearchar MacLean</a>
      <a
        href="#bio"
        onClick={closeNav}
      >Bio</a>
      <a
        href="#expirience"
        onClick={closeNav}
      >Expirience</a>
      <a
        onClick={closeNav}
      >Projects</a>
      <a
        onClick={closeNav}
      >Interests</a>
    </div>
  )
}

export default Navbar
