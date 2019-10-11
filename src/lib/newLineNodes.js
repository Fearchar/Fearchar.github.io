function newLineNodes(text, elmCallback) {
  return text.split('\n').map(elmCallback)
}

export default newLineNodes
