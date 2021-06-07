import React from 'react'
import classNames from 'classnames'

import { NewTabAnchor } from 'components/shared/NewTabAnchor'

import styles from './Hero.css'
import { Title } from './Title'

export function Hero({ atStartingPosition, pageRef }) {
  /* todo: fm - remove some of the sharpness from text colours in hero*/

  return (
    <div
      id="hero"
      className={classNames(styles.main, {
        [styles['is-reduced']]: !atStartingPosition
      })}
    >
      <div className={styles['content']}>
        <Title atStartingPosition={atStartingPosition} />

        <div className={styles['sub-content']}>
          <h2 className={styles['sub-title']}>A Full Stack Developer</h2>
          {/* todo: fm - change tag line*/}
          <p className={styles['sub-description']}>
            with a passion for tabletop gaming,
          </p>
          <p className={styles['sub-description']}>music and literature</p>
        </div>

        <div className={styles['contact-links']}>
          <NewTabAnchor href="https://github.com/Fearchar">
            <div>
              <i
                className={classNames(
                  'devicon-github-plain',
                  styles['contact-icon']
                )}
              />
              <p className={styles['contact-text']}>/ fearchar</p>
            </div>
          </NewTabAnchor>

          <NewTabAnchor href="https://www.linkedin.com/in/fearchar/">
            <div>
              <i
                className={classNames(
                  'fab fa-linkedin',
                  styles['contact-icon']
                )}
              />
              <p className={styles['contact-text']}>/ fearchar</p>
            </div>
          </NewTabAnchor>

          <NewTabAnchor href="mailto: fearchar.maclean@gmail.com">
            <div>
              <i
                className={classNames(
                  'fas fa-envelope',
                  styles['contact-icon']
                )}
              />
              <p className={styles['contact-text']}>
                fearchar.maclean@gmail.com
              </p>
            </div>
          </NewTabAnchor>
        </div>
        <i
          className={classNames(
            'fas fa-angle-down fa-4x',
            styles['down-arrow'],
            {
              [styles['is-hidden']]: !atStartingPosition
            }
          )}
          /* todo: fm - this should trigger when you click anywhere on the page while the hero is big*/
          onClick={() =>
            pageRef.current.scroll({ top: 400, behavior: 'smooth' })
          }
        />
      </div>
    </div>
  )
}

export default Hero
