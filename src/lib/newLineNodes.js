/* todo: fm - remove and replace with mapping through arrays*/
function newLineNodes(text, nodeCallback) {
  return text.split('\n').map(nodeCallback)
}

export default newLineNodes
