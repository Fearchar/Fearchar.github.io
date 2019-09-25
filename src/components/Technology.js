import React from 'react'

const Technology = ({ name, iconName }) => {
  return (
    <div>
      <i className={`devicon-${iconName}`}></i>
      <h4>{name}</h4>
    </div>
  )
}

export default Technology
