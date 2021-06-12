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
  heroku: 'Heroku'
}

/* todo: fm - change to KNOWN_TECHS*/
export const ALL_KNOWN_TECHS = {
  [TECH_NAMES['js']]: new Tech(TECH_NAMES['js'], 'javascript-plain', 10),
  [TECH_NAMES['react']]: new Tech(TECH_NAMES['react'], 'react-original', 8),
  [TECH_NAMES['mongodb']]: new Tech(TECH_NAMES['mongodb'], 'mongodb-plain', 6),
  [TECH_NAMES['mocha']]: new Tech(TECH_NAMES['mocha'], 'mocha-plain', 5),
  [TECH_NAMES['bable']]: new Tech(TECH_NAMES['bable'], 'babel-plain', 7),
  [TECH_NAMES['webpack']]: new Tech(
    TECH_NAMES['webpack'],
    'webpack-plain',
    7.3
  ),
  [TECH_NAMES['python']]: new Tech(TECH_NAMES['python'], 'python-plain', 3),
  [TECH_NAMES['node']]: new Tech(TECH_NAMES['node'], 'nodejs-plain', 7),
  [TECH_NAMES['html']]: new Tech(TECH_NAMES['html'], 'html5-plain', 9),
  [TECH_NAMES['css']]: new Tech(TECH_NAMES['css'], 'css3-plain', 9),
  [TECH_NAMES['scss']]: new Tech(TECH_NAMES['scss'], 'sass-original', 8),
  [TECH_NAMES['django']]: new Tech(TECH_NAMES['django'], 'django-plain', 3),
  [TECH_NAMES['express']]: new Tech(
    TECH_NAMES['express'],
    'express-original',
    6
  ),
  [TECH_NAMES['git']]: new Tech(TECH_NAMES['git'], 'git-plain', 8),
  [TECH_NAMES['postgres']]: new Tech(
    TECH_NAMES['postgres'],
    'postgresql-plain',
    3
  ),
  [TECH_NAMES['heroku']]: new Tech(TECH_NAMES['heroku'], 'heroku-original', 5)
}

export const KNOWN_TECHS = Object.keys(ALL_KNOWN_TECHS).map(
  (key) => ALL_KNOWN_TECHS[key]
)

/* todo: fm - reorder*/
export const ABOUT_TECHS = [
  ALL_KNOWN_TECHS[TECH_NAMES['js']],
  ALL_KNOWN_TECHS[TECH_NAMES['react']],
  ALL_KNOWN_TECHS[TECH_NAMES['mongodb']],
  ALL_KNOWN_TECHS[TECH_NAMES['bable']],
  ALL_KNOWN_TECHS[TECH_NAMES['webpack']],
  ALL_KNOWN_TECHS[TECH_NAMES['python']],
  ALL_KNOWN_TECHS[TECH_NAMES['node']],
  ALL_KNOWN_TECHS[TECH_NAMES['html']],
  ALL_KNOWN_TECHS[TECH_NAMES['css']],
  ALL_KNOWN_TECHS[TECH_NAMES['django']],
  ALL_KNOWN_TECHS[TECH_NAMES['express']],
  ALL_KNOWN_TECHS[TECH_NAMES['git']],
  ALL_KNOWN_TECHS[TECH_NAMES['postgres']]
]

/* todo: fm - delete*/
export const OTHER_TECHS = [new Tech('Bulma', null, null)]
