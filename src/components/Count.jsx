import React, { useState } from 'react'

export const Count = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={handleClick}>
        click
      </button>
    </div>
  )
}
