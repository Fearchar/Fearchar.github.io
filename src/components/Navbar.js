import React, { useState } from 'react'

const Navbar = ({ displayNav }) => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className={`${displayNav && 'active'} ${ navOpen && 'open'}`}>
      <i
        className="fas fa-bars"
        onClick={() => navOpen ? setNavOpen(false) : setNavOpen(true)}
      ></i>
      <a href="#hero">Fearchar MacLean</a>
      <a href="#bio">Bio</a>
      <a href="#expirience">Expirience</a>
      <a>Projects</a>
      <a>Interests</a>
    </div>
  )
}

export default Navbar

/*    <div className={`${displayNav && 'active'}`}>
      <a
        className={`${asActive && 'active'}`}
        href="#hero"
      >Fearchar MacLean</a>
      <a
        className={`${asActive && 'active'}`}
        href="#bio"
      >Bio</a>
      <a
        className={`${asActive && 'active'}`}
        href="#expirience"
      >Expirience</a>
      <a
        className={`${asActive && 'active'}`}
      >Projects</a>
      <a
        className={`${asActive && 'active'}`}
      >Interests</a>
      <i
        className="fas fa-bars"
        onClick={() => asActive ? setAsActive(false) : setAsActive(true)}
      ></i>
    </div>
*/
