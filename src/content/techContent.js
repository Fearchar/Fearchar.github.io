class Tech {
  constructor(name, iconName, priority, bioExclude=false) {
    this.name = name,
    this.iconName = iconName
    this.priority = priority
    this.bioExclude = bioExclude
  }
}

let knownTechs = [
  new Tech('JavaScript', 'javascript-plain', 10),
  new Tech('React', 'react-original', 8),
  new Tech('MongoDB', 'mongodb-plain', 6),
  new Tech('Mocha', 'mocha-plain', 5),
  new Tech('Babel', 'babel-plain', 7),
  new Tech('Webpack', 'webpack-plain', 7.3),
  new Tech('Python', 'python-plain', 3),
  new Tech('Node.js', 'nodejs-plain', 7),
  new Tech('HTML5', 'html5-plain', 9),
  new Tech('CSS3', 'css3-plain', 9),
  new Tech('SCSS', 'sass-original', 8),
  new Tech('Django', 'django-plain', 3),
  new Tech('Express', 'express-original', 6),
  new Tech('Git', 'git-plain', 8),
  new Tech('PostgreSQL', 'postgresql-plain', 3),
  new Tech('Heroku', 'heroku-original', 5)
]

const otherTechs = [
  new Tech('Bulma', null, null)
]

knownTechs = knownTechs.sort((techA, techB) => techB.priority - techA.priority)

export { Tech , knownTechs, otherTechs }
