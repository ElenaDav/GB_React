import { useState } from 'react'

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addMessage({
      author: 'USER',
      value,
    })
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={!value}>SEND</button>
    </form>
  )
}
