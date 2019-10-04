import React, { createRef } from 'react'

const Hero = ({ isHeroFull }) => {
  const h1Ref = createRef()

  function textWhipAnimation(ref, repetitions=2) {
    const charSpans = ref.current.children
    for (let i = 0; i < repetitions * charSpans.length * 2; i++) {
      setTimeout(() => {
        const charSpan = charSpans[i % charSpans.length]
        console.log(!charSpan.classList.contains('raise'))
        if (!charSpan.classList.contains('raise')) charSpan.classList.add('raise')
        else (charSpan.classList.remove('raise'))
      }, 20 * i)
    }
  }

  return (
    <div
      className={`hero banner ${isHeroFull && 'full'}`}
      onClick={() => textWhipAnimation(h1Ref)}
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
