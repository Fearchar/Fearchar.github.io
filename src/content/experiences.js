class Experience {
  constructor(name, organisation, location, dates, desc, bullets = null) {
    this.name = name
    this.organisation = organisation
    this.location = location
    this.dates = dates
    this.desc = desc
    this.bullets = bullets
  }
}

const experiences = [
  new Experience(
    'Associate Software Engineer - Full Stack',
    'Wegotpop',
    'London',
    'January 2020 - Present',
    'The Wegotpop platform enables the film and TV industry to hire supporting artists and manage crew. Clients include the likes of Pinewood Studios, Sky and AMC.',
    [
      'Build modern frontend components using React hooks and maintain existing pages built with classical components, JQuery and vanilla JS.',
      'Build backend services in Python using primarily object oriented patterns, employing SQLAlchemy to build and query models and TurboGears to manage and process requests.',
      'Work with a Postgres database, managing migrations with Alembic and SQLAlchemy. Write expressively typed code on both the frontend and backend using Typescript and Mypy.',
      'Write test first code, employing libraries such as Jest and Pytest. Manage and estimate tasks across bi-weekly sprints using a mixed scrum / kanban approach.',
      'Perform the technical planning for mid sized projects with the support of technical leads'
    ]
  ),
  new Experience(
    'Software Engineering Immersive',
    'General Assembly',
    'London',
    'June 2019 - September 2019',
    'I have really enjoyed my time at GA, and having the opportunity to focus entirely on programming in an intensive environment. I had been coding casually for a couple of years, but the opportunity to be on campus every day, work through problems and learn best practices has been deeply fulfilling. Intensive projects, which form a fundamental part of the GA experience, have reinforced the work done in the classroom, improved the way I explain and discuss code and changed my approach to problem solving.\nI’m excited to be taking these first steps into what will hopefully be a long and fruitful career and I’m looking forward to joining an industry which offers continued opportunities for training and development.'
  ),
  new Experience(
    'Programme Delivery Officer',
    'Youth Business International',
    'London',
    'January 2016 - May 2019',
    null,
    [
      'Project management and events support',
      'Writing and editing reports for major donors, trustees and external audiences',
      'Managing grant finance for members and youth projects',
      'Data collection and data analysis of member outcomes',
      'Liaising with internal teams to agree CRM project requirements and maintaining oversight of those projects with developers'
    ]
  ),
  new Experience(
    'Streets Investigation Customer\n Service Advisor',
    'Transport For London (TFL)',
    'London',
    'July 2013 - May 2015',
    null,
    [
      'Managing a team caseload and highlighting key issues facing the team to management and the department',
      'Processing customer queries, liaising with teams responsible for investigation and responding to customers through emails, phone calls and letters'
    ]
  )
]

export default experiences
