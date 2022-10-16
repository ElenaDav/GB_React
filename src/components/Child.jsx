import React from 'react'

export const Child = ({ name, handleChangeCount }) => {
  const handleClick = () => {
    handleChangeCount((prevCount) => prevCount + 1)
  }
  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>кликаю здесь, а меняется родитель</button>
    </div>
  )
}
