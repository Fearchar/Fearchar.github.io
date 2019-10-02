import React, { useState } from 'react'

const Hero = () => {
  const [isFull, setIsFull] = useState(true)
  const heroRef = React.createRef()

  function manageFullHeight() {
    // const hero = heroRef.current
    const scrollTop = window.pageYOffset
    console.log(scrollTop)
    if (scrollTop > 0) setIsFull(false)
    else setIsFull(true)
  }

  return (
    <div
      className={`hero banner ${isFull && 'full'}`}
      ref={heroRef}
      onScroll={manageFullHeight}
    >
      <h1>Fearchar MacLean</h1>
      <h2>Full Stack Developer</h2>
      <p>with a passion for tabletop gaming,</p>
      <p>music and literature</p>
      <div>
        <a href="https://github.com/Fearchar">
          <i className="devicon-github-plain"></i>
          <p>/Fearchar</p>
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
