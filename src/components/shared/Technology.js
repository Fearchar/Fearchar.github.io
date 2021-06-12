import React from 'react'
import classNames from 'classnames'

import styles from './Technology.css'

export function Technology({ name, iconName }) {
  return (
    <div className={styles.main}>
      {iconName ? (
        <>
          <i className={classNames(styles.icon, `devicon-${iconName}`)} />
          <p className={styles.name}>{name}</p>
        </>
      ) : (
        <p className={styles.name}>
          <strong>{name}</strong>
        </p>
      )}
    </div>
  )
}
