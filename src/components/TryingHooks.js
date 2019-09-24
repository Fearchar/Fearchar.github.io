import React, { useState } from 'react'

const TryingHooks = () => {
  const [gurlNum, setGurlNum] = useState(0)
  return (
    <h1
      onClick={() => setGurlNum(gurlNum + 1)}
    >{`Hello ${'World' + 's'.repeat(gurlNum)}!`}</h1>
  )
}

export default TryingHooks
