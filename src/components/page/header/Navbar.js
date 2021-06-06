import React from 'react'
import classNames from 'classnames'

import styles from './Navbar.css'

export function Navbar({ displayNav }) {
  const [isNavOpen, setIsNavOpen] = React.useState(false)

  return (
    <nav className={classNames({ [styles['is-hidden']]: displayNav })}>
      <i
        className="fas fa-bars"
        onClick={() => (isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true))}
      ></i>

      <a href="#hero" onClick={() => setIsNavOpen(false)}>
        Home
      </a>

      <a href="#about" onClick={() => setIsNavOpen(false)}>
        About
      </a>

      <a href="#experience" onClick={() => setIsNavOpen(false)}>
        Experience
      </a>

      <a href="#projects" onClick={() => setIsNavOpen(false)}>
        Projects
      </a>
    </nav>
  )
}
