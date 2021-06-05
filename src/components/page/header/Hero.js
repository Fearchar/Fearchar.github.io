import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'

import textWhipAnimation from 'lib/textWhipAnimation'
import SpanText from 'components/shared/SpanText'
import { NewTabAnchor } from 'components/shared/NewTabAnchor'

export function Hero({ isHeroFull, pageRef }) {
  const h1Ref = useRef(null)
  useEffect(() => textWhipAnimation(h1Ref.current), [isHeroFull])
  /* todo: fm - remove some of the sharpness from text colours in hero*/
  return (
    <div id="hero" className={`hero banner ${isHeroFull ? 'full' : ''}`}>
      <h1 ref={h1Ref} onClick={() => textWhipAnimation(h1Ref.current)}>
        <SpanText text="Fearchar MacLean" />
      </h1>

      <h2>A Full Stack Developer</h2>
      {/* todo: fm - change tag line*/}
      <p>with a passion for tabletop gaming,</p>
      <p>music and literature</p>

      <div>
        <NewTabAnchor href="https://github.com/Fearchar">
          <i className="devicon-github-plain" />
          <p>/fearchar</p>
        </NewTabAnchor>
        <NewTabAnchor href="https://www.linkedin.com/in/fearchar/">
          <i className="fab fa-linkedin" />
          <p>/fearchar</p>
        </NewTabAnchor>
        <NewTabAnchor href="mailto: fearchar.maclean@gmail.com">
          <i className="fas fa-envelope" />
          <p>fearchar.maclean@gmail.com</p>
        </NewTabAnchor>
      </div>

      <i
        className={classNames('fas fa-angle-down fa-5x', 'down-arrow', {
          ['is-hidden']: !isHeroFull
        })}
        /* todo: fm - this should trigger when you click anywhere on the page while the hero is big*/
        onClick={() => pageRef.current.scroll(0, 30)}
      />
      <hr
        className={classNames('hero-bottom-divder', {
          ['is-hidden']: isHeroFull
        })}
      />
    </div>
  )
}

export default Hero
