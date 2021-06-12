class Tech {
  constructor(name, iconName, priority, aboutExclude = false) {
    this.name = name
    this.iconName = iconName
    this.priority = priority
    this.aboutExclude = aboutExclude
  }
}

const techNames = {
  js: 'JavaScript',
  react: 'React',
  mongodb: 'MongoDB',
  mocha: 'Mocha',
  bable: 'Bable',
  webpack: 'Webpack',
  python: 'Python',
  node: 'Node.js',
  html: 'HTML5',
  css: 'CSS3',
  scss: 'SCSS',
  django: 'Django',
  express: 'Express',
  git: 'Git',
  postgres: 'PostgreSQL',
  heroku: 'Heroku'
}

/* todo: fm - change to knownTechs*/
export const allKnownTechs = {
  [techNames['js']]: new Tech(techNames['js'], 'javascript-plain', 10),
  [techNames['react']]: new Tech(techNames['react'], 'react-original', 8),
  [techNames['mongodb']]: new Tech(techNames['mongodb'], 'mongodb-plain', 6),
  [techNames['mocha']]: new Tech(techNames['mocha'], 'mocha-plain', 5),
  [techNames['bable']]: new Tech(techNames['bable'], 'babel-plain', 7),
  [techNames['webpack']]: new Tech(techNames['webpack'], 'webpack-plain', 7.3),
  [techNames['python']]: new Tech(techNames['python'], 'python-plain', 3),
  [techNames['node']]: new Tech(techNames['node'], 'nodejs-plain', 7),
  [techNames['html']]: new Tech(techNames['html'], 'html5-plain', 9),
  [techNames['css']]: new Tech(techNames['css'], 'css3-plain', 9),
  [techNames['scss']]: new Tech(techNames['scss'], 'sass-original', 8),
  [techNames['django']]: new Tech(techNames['django'], 'django-plain', 3),
  [techNames['express']]: new Tech(techNames['express'], 'express-original', 6),
  [techNames['git']]: new Tech(techNames['git'], 'git-plain', 8),
  [techNames['postgres']]: new Tech(
    techNames['postgres'],
    'postgresql-plain',
    3
  ),
  [techNames['heroku']]: new Tech(techNames['heroku'], 'heroku-original', 5)
}

export const knownTechs = Object.keys(allKnownTechs).map(
  (key) => allKnownTechs[key]
)

export const aboutTechs = [knownTechs['JavaScript']]

/* todo: fm - delete*/
export const otherTechs = [new Tech('Bulma', null, null)]
