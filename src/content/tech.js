class Tech {
  constructor(name, iconName, priority, aboutExclude = false) {
    this.name = name
    this.iconName = iconName
    this.priority = priority
    this.aboutExclude = aboutExclude
  }
}
/* todo: fm - labele all constants as constants?*/
const TECH_NAMES = {
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
  heroku: 'Heroku',
  sqlalchemy: 'SQLAlchemy'
}

/* todo: fm - change to KNOWN_TECHS*/
export const KNOWN_TECHS = [
  new Tech(TECH_NAMES['js'], 'javascript-plain', 10),
  new Tech(TECH_NAMES['react'], 'react-original', 8),
  new Tech(TECH_NAMES['mongodb'], 'mongodb-plain', 6),
  new Tech(TECH_NAMES['mocha'], 'mocha-plain', 5),
  new Tech(TECH_NAMES['bable'], 'babel-plain', 7),
  new Tech(TECH_NAMES['webpack'], 'webpack-plain', 7.3),
  new Tech(TECH_NAMES['python'], 'python-plain', 3),
  new Tech(TECH_NAMES['node'], 'nodejs-plain', 7),
  new Tech(TECH_NAMES['html'], 'html5-plain', 9),
  new Tech(TECH_NAMES['css'], 'css3-plain', 9),
  new Tech(TECH_NAMES['scss'], 'sass-original', 8),
  new Tech(TECH_NAMES['django'], 'django-plain', 3),
  new Tech(TECH_NAMES['express'], 'express-original', 6),
  new Tech(TECH_NAMES['git'], 'git-plain', 8),
  new Tech(TECH_NAMES['postgres'], 'postgresql-plain', 3),
  new Tech(TECH_NAMES['heroku'], 'heroku-original', 5),
  new Tech(
    TECH_NAMES['sqlalchemy'],
    'devicon-sqlalchemy-original-wordmark colored',
    5
  )
]

/* todo: fm - reorder*/
export const ABOUT_TECHS = [
  TECH_NAMES['js'],
  TECH_NAMES['react'],
  TECH_NAMES['mongodb'],
  TECH_NAMES['bable'],
  TECH_NAMES['webpack'],
  TECH_NAMES['python'],
  TECH_NAMES['node'],
  TECH_NAMES['html'],
  TECH_NAMES['css'],
  TECH_NAMES['django'],
  TECH_NAMES['express'],
  TECH_NAMES['git'],
  TECH_NAMES['postgres']
].map((key) => KNOWN_TECHS.find((tech) => tech.name === key))

/* todo: fm - delete and move into all known techs*/
export const OTHER_TECHS = [new Tech('Bulma', null, null)]
