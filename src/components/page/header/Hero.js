import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'

import textWhipAnimation from 'lib/textWhipAnimation'
import SpanText from 'components/shared/SpanText'
import { NewTabAnchor } from 'components/shared/NewTabAnchor'

import styles from './Hero.css'

export function Hero({ isHeroFull, pageRef }) {
  const h1Ref = useRef(null)
  useEffect(() => textWhipAnimation(h1Ref.current), [isHeroFull])
  /* todo: fm - remove some of the sharpness from text colours in hero*/

  return (
    <div id="hero" className={styles.main}>
      <div className={styles['content']}>
        <h1
          className={styles.title}
          ref={h1Ref}
          onClick={() => textWhipAnimation(h1Ref.current)}
        >
          <SpanText text="Fearchar MacLean" />
        </h1>

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
              <p className={styles['contact-text']}>/fearchar</p>
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
              <p className={styles['contact-text']}>/fearchar</p>
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
      </div>

      <i
        className={classNames('fas fa-angle-down fa-5x', {
          ['is-hidden']: !isHeroFull
        })}
        /* todo: fm - this should trigger when you click anywhere on the page while the hero is big*/
        onClick={() => pageRef.current.scroll(0, 30)}
      />
      <hr
        className={classNames({
          ['is-hidden']: isHeroFull
        })}
      />
    </div>
  )
}

export default Hero
