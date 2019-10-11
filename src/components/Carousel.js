import React, { useState } from 'react'

const Carousel = ({ Template, slides, slideName }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="carousel">
      {slides.map((slide, i) => {
        const templateProp = {[slideName]: slide}
        return (
          <div
            key={slide.name}
            className={`container ${i === currentSlide ? 'active' : ''}`}
          >
            <i
              className="fas fa-chevron-left fa-5x"
              onClick={() => currentSlide && setCurrentSlide(currentSlide - 1)}
            />
            <Template {...templateProp} />
            <i
              className="fas fa-chevron-right fa-5x"
              onClick={() => currentSlide < slides.length - 1 && setCurrentSlide(currentSlide + 1)}
            />
          </ div>
        )
      })}
    </section>
  )
}

export default Carousel
