import React, { useState } from 'react'

const TryingHooks = () => {
  const [worldNum, setWorldNum] = useState(0)
  return (
    <h1
      onClick={() => setWorldNum(worldNum + 1)}
    >{`Hello ${'World' + 's'.repeat(worldNum)}!`}</h1>
  )
}

export default TryingHooks
