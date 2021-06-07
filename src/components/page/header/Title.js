import React from 'react'
import classNames from 'classnames'

import styles from './Title.css'

function whip(
  charactersLength,
  isWhipping,
  setAreCharactersRaised,
  setIsWhiping,
  repetitions = 2
) {
  if (isWhipping) {
    return
  }
  setIsWhiping(true)

  const sequenceLength = repetitions * charactersLength * 2

  for (let sequenceIndex = 0; sequenceIndex < sequenceLength; sequenceIndex++) {
    const characterIndex = sequenceIndex % charactersLength

    setTimeout(() => {
      setAreCharactersRaised((current) => {
        current[characterIndex] = !current[characterIndex]

        return [...current]
      })

      if (sequenceIndex + 1 === sequenceLength) {
        setIsWhiping(false)
      }
    }, (320 * sequenceIndex) / charactersLength)
  }
}

export function Title() {
  const characters = 'Fearchar MacLean'.split('')

  const [areCharactersRaised, setAreCharactersRaised] = React.useState(
    characters.map(() => false)
  )
  const [isWhipping, setIsWhipping] = React.useState(false)

  function whipTitle() {
    whip(characters.length, isWhipping, setAreCharactersRaised, setIsWhipping)
  }

  React.useEffect(whipTitle, [characters.length])

  return (
    <h1 className={styles.main} onClick={whipTitle} onMouseEnter={whipTitle}>
      {characters.map((character, i) => (
        <span
          className={classNames(styles.character, {
            [styles['is-raised']]: areCharactersRaised[i]
          })}
          key={i}
        >{`${character}`}</span>
      ))}
    </h1>
  )
}
