class Tech {
  constructor(name, iconName) {
    this.name = name
    this.iconName = iconName
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
  sqlalchemy: 'SQLAlchemy',
  redux: 'Redux',
  docker: 'Docker',
  aws: 'AWS',
  bootstrap: 'Bootstrap',
  ts: 'TypeScript',
}

/* todo: fm - change to KNOWN_TECHS*/
/* todo: fm - update all to svg versions - iuse docker as an example?*/
/* todo: fm - not using prioties, should just order them myself*/
export const KNOWN_TECHS = [
  new Tech(TECH_NAMES['js'], 'javascript-plain'),
  new Tech(TECH_NAMES['react'], 'react-original'),
  new Tech(TECH_NAMES['mongodb'], 'mongodb-plain'),
  new Tech(TECH_NAMES['mocha'], 'mocha-plain'),
  new Tech(TECH_NAMES['bable'], 'babel-plain'),
  new Tech(TECH_NAMES['webpack'], 'webpack-plain'),
  new Tech(TECH_NAMES['python'], 'python-plain'),
  new Tech(TECH_NAMES['node'], 'nodejs-plain'),
  new Tech(TECH_NAMES['html'], 'html5-plain'),
  new Tech(TECH_NAMES['css'], 'css3-plain'),
  new Tech(TECH_NAMES['scss'], 'sass-original'),
  new Tech(TECH_NAMES['django'], 'django-plain'),
  new Tech(TECH_NAMES['express'], 'express-original'),
  new Tech(TECH_NAMES['git'], 'git-plain'),
  new Tech(TECH_NAMES['postgres'], 'postgresql-plain'),
  /* todo: fm - sort out priorities*/
  new Tech(TECH_NAMES['heroku'], 'heroku-original'),
  new Tech(TECH_NAMES['sqlalchemy'], 'sqlalchemy-plain'),
  new Tech(TECH_NAMES['redux'], 'redux-original'),
  new Tech(TECH_NAMES['docker'], 'docker-plain'),
  new Tech(TECH_NAMES['aws'], 'amazonwebservices-original'),
  new Tech(TECH_NAMES['bootstrap'], 'bootstrap-plain'),
  new Tech(TECH_NAMES['ts'], 'typescript-plain'),
  new Tech(TECH_NAMES['myPy'], null),
]

/* todo: fm - reorder*/
export const ABOUT_TECHS = [
  TECH_NAMES['js'],
  TECH_NAMES['react'],
  TECH_NAMES['mongodb'],
  TECH_NAMES['webpack'],
  TECH_NAMES['python'],
  TECH_NAMES['node'],
  TECH_NAMES['html'],
  TECH_NAMES['css'],
  TECH_NAMES['django'],
  TECH_NAMES['express'],
  TECH_NAMES['postgres'],
  TECH_NAMES['sqlalchemy'],
  TECH_NAMES['redux'],
  TECH_NAMES['docker'],
  TECH_NAMES['aws'],
  TECH_NAMES['bootstrap'],
  TECH_NAMES['ts'],
  TECH_NAMES['git'],
].map((key) => KNOWN_TECHS.find((tech) => tech.name === key))

/* todo: fm - delete and move into all known techs*/
export const OTHER_TECHS = [new Tech('Bulma', null, null)]
