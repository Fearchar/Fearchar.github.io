import React from 'react'

import styles from './NewTabAnchor.css'

export function NewTabAnchor({ href, children }) {
  return (
    <a
      className={styles.main}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
