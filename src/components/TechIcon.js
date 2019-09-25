import React from 'react'

const TechIcon = ({ name, iconName }) => {
  return (
    <div>
      <i className={`fab fa-${iconName} fa-6x`} />
      <h4>{name}</h4>
    </div>
  )
}

export default TechIcon
