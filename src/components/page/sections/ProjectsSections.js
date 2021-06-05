import * as React from 'react'

import { Banner } from '../Banner'
import Carousel from '../Carousel'
import ProjectTemplate from '../ProjectTemplate'
import projects from 'content/projects'

export function ProjectsSection() {
  return (
    <>
      <Banner id="projects" heading="Projects" />
      <Carousel
        Template={ProjectTemplate}
        slides={projects}
        slideName="project"
      />
    </>
  )
}
