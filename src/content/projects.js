import techs from './techs'

class Project {
  constructor(name, imageUrl, gitLink, deployLink, techUsed, desc) {
    this.name = name
    this.imageUrl = imageUrl
    this.gitLink = gitLink
    this.deployLink = deployLink
    this.techUsed = techUsed
    this.desc = desc
  }
}

const projects = [
  new Project(
    'Tetris: GA Project 1',
    'https://i.imgur.com/D1uotOJ.jpg',
    'http://bit.ly/Gh-tetris',
    'http://bit.ly/Ghp-tetris',
    [
      techs.find(tech => tech.name === 'JavaScript'),
      techs.find(tech => tech.name === 'SCSS'),
      techs.find(tech => tech.name === 'CSS3'),
      techs.find(tech => tech.name === 'HTML5'),
      techs.find(tech => tech.name === 'React')
    ],
    'Tetris is a classic arcade puzzle game created by Alexey Leonidovich Pajitnov 1984, in which the player tessellates tiled blocks to score points, clear horizontal lines and stop the game board from overflowing with blocks.    My Tetris project is the first solo project that I have completed as part of a General Assembly Software Engineering Immersive course. It was built over the course of one week using a combination of JavaScript, HTML and CSS.'
  )
]

export default projects
