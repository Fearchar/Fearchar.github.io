const bioText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

class Tech {
  constructor(name, iconName, confidence) {
    this.name = name,
    this.iconName = iconName
    this.confidence = confidence
  }
}

let techs = [
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

techs = techs.sort((techA, techB) => techB.confidence - techA.confidence)

export { bioText, techs }
