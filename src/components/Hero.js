import React, { useRef, useEffect } from 'react'

import textWhipAnimation from '../lib/textWhipAnimation'
import SpanText from './SpanText'

const Hero = ({ isHeroFull }) => {

  const h1Ref = useRef(null)
  useEffect(() => textWhipAnimation(h1Ref), [h1Ref])

  return (
    <div
      id="hero"
      className={`hero banner ${isHeroFull ? 'full' : ''}`}
    >
      <h1 ref={h1Ref}>
        <SpanText text="Fearchar MacLean" />
      </h1>
      <h2>Full Stack Developer</h2>
      <p>with a passion for tabletop gaming,</p>
      <p>music and literature</p>
      <div>
        <a href="https://github.com/Fearchar">
          <i className="devicon-github-plain"></i>
          <p>/fearchar</p>
        </a>
        <a href="https://www.linkedin.com/in/fearchar/">
          <i className="fab fa-linkedin"></i>
          <p>/fearchar</p>
        </a>
        <a href="mailto: fearchar.maclean@gmail.com">
          <i className="fas fa-envelope"></i>
          <p>fearchar.maclean@gmail.com</p>
        </a>
      </div>
    </div>
  )
}

export default Hero
