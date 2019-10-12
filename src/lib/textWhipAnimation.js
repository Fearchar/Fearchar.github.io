function textWhipAnimation(node, repetitions=2) {
  const charSpans = node.children
  for (let i = 0; i < repetitions * charSpans.length * 2; i++) {
    setTimeout(() => {
      const charSpan = charSpans[i % charSpans.length]
      if (!charSpan.classList.contains('raise')) charSpan.classList.add('raise')
      else (charSpan.classList.remove('raise'))
    }, (320 * i) / charSpans.length)
  }
}

export default textWhipAnimation
