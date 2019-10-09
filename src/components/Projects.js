import React from 'react'

import Technology from './Technology'
import projects from '../content/projects'

const Projects = () => {
  return (
    <section className="carousel">
      {projects.map(project =>
        <div
          key={project.name}
          className="map-container"
        >
          <div className="section-two-thirds subsection">
            <img src={project.imageUrl}/>
          </div>
          <div className="section-third subsection">
            <h3>{project.name}</h3>
            <div>
              <a>{project.gitLink}</a>
              <a>{project.deployLink}</a>
            </div>
            <h4>Tech Used</h4>
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
