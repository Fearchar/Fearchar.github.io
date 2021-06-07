import * as React from 'react'
import classNames from 'classnames'

import Hero from './Hero'
import { Navbar } from './Navbar'

import styles from './Header.css'

export function Header({ atStartingPosition, pageRef }) {
  return (
    <header className={classNames(styles.header)}>
      {/* debug: fm - */}
      {/* {!atStartingPosition && <Navbar />} */}
      <Hero atStartingPosition={atStartingPosition} pageRef={pageRef} />
      <hr
        className={classNames(styles.divider, {
          [styles['is-hidden']]: atStartingPosition
        })}
      />
    </header>
  )
}
