const bioText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

class Tech {
  constructor(name, iconName, confidence) {
    this.name = name,
    this.iconName = iconName
    this.confidence = confidence
  }
}

const techs = [
  new Tech('JavaScript', 'javascript-plain', 10),
  new Tech('React', 'react-original', 8),
  new Tech('MongoDB', 'mongodb-plain', 7),
  new Tech('Mocha', 'mocha-plain', 4)
]

techs.sort((techA, techB) => techB.confidence - techA.confidence)

export { bioText, techs }
