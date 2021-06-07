import React from 'react'

import { NewTabAnchor } from 'components/shared/NewTabAnchor'
import Technology from 'components/shared/Technology'
import { aboutImage, aboutText } from 'content/about'
import { knownTechs } from 'content/tech'
import { Banner } from '../shared/Banner'

import styles from './AboutSection.css'

export function AboutSection() {
  return (
    <section className={styles.main}>
      <Banner id="about" heading="About" />

      <div className={styles['content-container']}>
        <div className={styles.content}>
          <div className={styles['top-content']}>
            <div>
              <NewTabAnchor href="https://github.com/fearchar">
                {/* todo: fm - get lower res version of image */}
                <img
                  className={styles['profile-image']}
                  src={aboutImage}
                  alt="Fearchar MacLean"
                />
              </NewTabAnchor>
            </div>

            <div className={styles.bio}>
              {aboutText.map((paragraph, i) => (
                <p className={styles['bio-paragraph']} key={i}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3>Tech</h3>
            <div className={styles['tech-icons']}>
              {knownTechs.map((tech) => (
                <Technology key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
