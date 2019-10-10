import React, { useState } from 'react'

import Technology from './Technology'
import projects from '../content/projects'
import TabAnchor from './TabAnchor'

const Projects = () => {
  const [projectsIndex, setProjectsIndex] = useState(0)

  return (
    <section className="carousel">
      {projects.map((project, i) =>
        <div
          key={project.name}
          className={`container ${i === projectsIndex ? 'active' : ''}`}
        >
          <i
            className="fas fa-chevron-left fa-5x"
            onClick={() => projectsIndex && setProjectsIndex(projectsIndex - 1)}
          />
          <div className="section-two-thirds subsection">
            <TabAnchor href={project.gitLink}>
              <img src={project.imageUrl} />
            </TabAnchor>
          </div>
          <div className="section-third subsection">
            <h3>{project.name}</h3>
            <div>
              <TabAnchor href={project.gitLink}>
                <i className="devicon-github-plain" />
              </TabAnchor>
              <TabAnchor href={project.deployLink}>
                <i className="fas fa-link" />
              </TabAnchor>
            </div>
            <div className="techs">
              {project.techUsed.map(tech =>
                <Technology
                  key={tech.name}
                  {...tech}
                />
              )}
            </div>
            <p>{project.desc}</p>
          </div>
          <i
            className="fas fa-chevron-right fa-5x"
            onClick={() => projectsIndex < projects.length - 1 && setProjectsIndex(projectsIndex + 1)}
          />
        </div>
      )}
    </section>
  )
}

export default Projects
