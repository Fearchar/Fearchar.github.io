import * as React from 'react'

import Hero from './Hero'
import { Navbar } from './Navbar'

import styles from './Header.css'

export function Header({ isHeroFull, pageRef }) {
  return (
    <header className={styles.header}>
      <Navbar displayNav={!isHeroFull} />
      <Hero isHeroFull={isHeroFull} pageRef={pageRef} />
    </header>
  )
}
