import React, { useRef, useEffect } from 'react'

import textWhipAnimation from 'lib/textWhipAnimation'
import SpanText from 'components/shared/SpanText'
import { NewTabAnchor } from 'components/shared/NewTabAnchor'

export function Hero({ isHeroFull, pageRef }) {
  const h1Ref = useRef(null)
  useEffect(() => textWhipAnimation(h1Ref.current), [isHeroFull])

  return (
    <div id="hero" className={`hero banner ${isHeroFull ? 'full' : ''}`}>
      <h1 ref={h1Ref} onClick={() => textWhipAnimation(h1Ref.current)}>
        <SpanText text="Fearchar MacLean" />
      </h1>
      <h2>A Full Stack Developer</h2>
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
      {isHeroFull && (
        <i
          className="fas fa-angle-down fa-5x"
          onClick={() => pageRef.current.scroll(0, 30)}
        />
      )}
    </div>
  )
}

export default Hero
