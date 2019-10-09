import { knownTechs } from './techContent'

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
    'Tetris',
    'https://i.imgur.com/D1uotOJ.jpg',
    'http://bit.ly/Gh-tetris',
    'http://bit.ly/Ghp-tetris',
    [
      knownTechs.find(tech => tech.name === 'JavaScript'),
      knownTechs.find(tech => tech.name === 'SCSS'),
      knownTechs.find(tech => tech.name === 'CSS3'),
      knownTechs.find(tech => tech.name === 'HTML5')
    ],
    'A week long solo project in which I built a website for playing the classic computer game Tetris, using vanilla JavaScript, HTML and SCSS.'
  )
]

export default projects
