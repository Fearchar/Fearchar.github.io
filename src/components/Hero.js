import React, { createRef } from 'react'

const Hero = ({ isHeroFull }) => {
  const h1Ref = createRef()

  function mexicanWave() {
    const charSpans = h1Ref.current.children

    function cycleTimeout(length, repetitions, i=0) {
      setTimeout(() => {
        const charSpan = charSpans[i % length]
        if (i === length * repetitions * 2) return
        if (!charSpan.classList.contains('raise')) charSpan.classList.add('raise')
        else (charSpan.classList.remove('raise'))
        cycleTimeout(length, repetitions, i+1)
      }, 20)
    }
    cycleTimeout(charSpans.length, 2)
  }

  return (
    <div
      className={`hero banner ${isHeroFull && 'full'}`}
      onClick={mexicanWave}
    >
      <h1 ref={h1Ref}>
        <span>F</span>
        <span>e</span>
        <span>a</span>
        <span>r</span>
        <span>c</span>
        <span>h</span>
        <span>a</span>
        <span>r</span>
        <span> </span>
        <span>M</span>
        <span>a</span>
        <span>c</span>
        <span>L</span>
        <span>e</span>
        <span>a</span>
        <span>n</span>
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
