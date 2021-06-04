import React from 'react'

import Technology from '../shared/Technology'
import TabAnchor from '../shared/TabAnchor'

const ProjectTemplate = ({ project }) => {
  return (
    <div>
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
