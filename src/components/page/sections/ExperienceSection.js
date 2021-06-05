import * as React from 'react'

import { Banner } from './Banner'
import Carousel from './Carousel'
import ExperienceTemplate from './ExperienceTemplate'
import experiences from 'content/experiences'

export function ExperienceSection() {
  return (
    <>
      <Banner id="experience" heading="Experience" />
      <Carousel
        Template={ExperienceTemplate}
        slides={experiences}
        slideName="experience"
      />
    </>
  )
}
