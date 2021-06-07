import React from 'react'

import styles from './Banner.css'

export function Banner({ id, heading }) {
  return (
    <div className={styles.main} id={id}>
      <h2>{heading}</h2>
    </div>
  )
}
