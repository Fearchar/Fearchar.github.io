class Expirience {
  constructor(name, organisation, location, dates, desc, bullets=null) {
    this.name = name
    this.organisation = organisation
    this.location = location
    this.dates = dates
    this.desc = desc
    this.bullets = bullets
  }
}

const expiriences = [
  new Expirience(
    'Software Engineering Immersive',
    'Generl Assembly',
    'London',
    'June 2019 - September 2019',
    'I have really enjoyed my time at GA, and having the opportunity to focus entirely on programming in an intensive environment. I had been casually for a couple of years, but the opportunity to be on campus every day, work through problems and learn best practices has been deeply fulfilling. Intensive projects, which form a fundamental part of the GA experience, have reinforced the work done in the classroom, improved the way I explain and discuss code and changed my approach to problem solving.\nI’m excited to be taking these first steps in to what will hopefully be a long and fruitful career and I’m looking forward to joining an industry which offers continued opportunities for training and development.'
  ),
  new Expirience(
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
  new Expirience(
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

export default expiriences
