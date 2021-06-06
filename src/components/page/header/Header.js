import * as React from 'react'
import classNames from 'classnames'

import Hero from './Hero'
import { Navbar } from './Navbar'

import styles from './Header.css'

export function Header({ isHeroFull, pageRef }) {
  return (
    <header className={classNames(styles.header)}>
      {!isHeroFull && <Navbar />}
      <Hero isHeroFull={isHeroFull} pageRef={pageRef} />
    </header>
  )
}
