import React from 'react'

import Technology from './Technology'
import projects from '../content/projects'
import TabAnchor from './TabAnchor'

const Projects = () => {
  return (
    <section className="carousel">
      {projects.map(project =>
        <div
          key={project.name}
          className="container"
        >
          <div className="section-two-thirds subsection">
            <img src={project.imageUrl}/>
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
        </div>
      )}
    </section>
  )
}

export default Projects
