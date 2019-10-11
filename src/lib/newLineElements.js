function newLineElements(text, elmCallback) {
  return text.split('\n').map(elmCallback)
}

export default newLineElements
