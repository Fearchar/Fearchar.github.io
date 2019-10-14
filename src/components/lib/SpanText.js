import React from 'react'

const SpanText = ({ text }) => text.split('').map((char, i) => <span key={i}>{`${char}`}</span>)

export default SpanText
