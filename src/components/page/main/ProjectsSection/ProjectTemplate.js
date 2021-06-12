import React from 'react'

import { Technology } from 'components/shared/Technology'
import { NewTabAnchor } from 'components/shared/NewTabAnchor'

const ProjectTemplate = ({ project }) => {
  return (
    <div>
      <div className="section-two-thirds subsection">
        <NewTabAnchor href={project.gitLink}>
          <img src={project.imageUrl} />
        </NewTabAnchor>
      </div>
      <div className="section-third subsection">
        <h3>{project.name}</h3>
        <div>
          <NewTabAnchor href={project.gitLink}>
            <i className="devicon-github-plain" />
          </NewTabAnchor>
          <NewTabAnchor href={project.deployLink}>
            <i className="fas fa-link" />
          </NewTabAnchor>
        </div>
        <div className="techs">
          {project.techUsed.map((tech) => (
            <Technology key={tech.name} {...tech} />
          ))}
        </div>
        <p>{project.desc}</p>
      </div>
    </div>
  )
}

export default ProjectTemplate
