import { knownTechs, otherTechs } from './techContent'

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
  ),
  new Project(
    'D&D Spellbook',
    'https://i.imgur.com/F1g5yw4.png',
    'http://bit.ly/Ga-dnd-spellbook',
    'http://bit.ly/Ghp-dnd-spellbook',
    [
      knownTechs.find(tech => tech.name === 'JavaScript'),
      knownTechs.find(tech => tech.name === 'React'),
      knownTechs.find(tech => tech.name === 'SCSS'),
      otherTechs.find(tech => tech.name === 'Bulma')
    ],
    'A two day, two person, pair coded project with the specification to build a simple frontend using React and an existing API. We built a reference site for the tabletop game Dungeons and Dragons, using the Open 5E API to pull the reference data and the Google Image API to draw related images.'
  ),
  new Project(
    'Happening',
    'https://i.imgur.com/IokCYZP.png',
    'http://bit.ly/Gh-happening',
    'http://bit.ly/Ha-happening',
    [
      knownTechs.find(tech => tech.name === 'JavaScript'),
      knownTechs.find(tech => tech.name === 'React'),
      knownTechs.find(tech => tech.name === 'Node.js'),
      otherTechs.find(tech => tech.name === 'Bulma')
    ],
    'A week-long, 4 person project in which we built a full stack events website, using React on the frontend and Node.js on the backend. The site allows to browse events by category, view them as markers on a map, create and attend events, and view and follow other users. I had a hand in several parts of the site, but my main contributions were to the events, both backend and frontend.'
  ),
  new Project(
    'Mana Curve',
    'https://i.imgur.com/kf38JKC.png',
    'http://bit.ly/Gh-mana-curve',
    'http://bit.ly/Ha-manacurve',
    [
      knownTechs.find(tech => tech.name === 'JavaScript'),
      knownTechs.find(tech => tech.name === 'React'),
      knownTechs.find(tech => tech.name === 'SCSS'),
      otherTechs.find(tech => tech.name === 'Bulma')
    ],
    'A weeklong solo project using Django and React to create a full stack website. For this project I created an online deck builder for the strategic card game Magic: The Gathering (MTG), using card data gathered from the MTG API. The site enables users to create decks and see which decks have been the most successful.'
  )
]

export default projects
