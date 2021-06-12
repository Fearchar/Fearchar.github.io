import React from 'react'

import styles from './Technology.css'

export function Technology({ name, iconName }) {
  return (
    <div className={styles.main}>
      {iconName ? (
        <>
          <i className={`devicon-${iconName}`} />
          <h5>{name}</h5>
        </>
      ) : (
        <h5>
          <strong>{name}</strong>
        </h5>
      )}
    </div>
  )
}
