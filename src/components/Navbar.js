import React from 'react'

const Navbar = ({ displayNav }) => {
  return (
    <div className={`${displayNav && 'full'}`}>
      <a href="#hero">Fearchar MacLean</a>
      <a href="#bio">Bio</a>
      <a href="#expirience">Expirience</a>
      <a>Projects</a>
      <a>Interests</a>
    </div>
  )
}

export default Navbar
