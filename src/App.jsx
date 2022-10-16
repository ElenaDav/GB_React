import { Form } from './components/Form/Form'
import { Form as FormClass } from './class-components/Form'
import { Count as CountClass } from './class-components/Count'
import { Count } from './components/Count'
import { Child } from './components/Child'
import { useState } from 'react'
import './index.css'

export const App = () => {
  const [name, setName] = useState('hook')
  const [count, setCount] = useState(0)
  const arr = ['ivanov', 'petrov', 'sidorov']

  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }
  return (
    <div className="App">
      <h5 style={{ backgroundColor: 'blueviolet' }}>Function useState</h5>
      <Count />
      <p>Parent component</p>
      <p>{count}</p>
      <input onChange={handleChangeName} />
      <p>Child component</p>
      <Child name={name} handleChangeCount={setCount} />
      <p>возвращаем массив через map</p>
      {arr.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
      <hr />
      <p>Form</p>
      <Form />
      <hr />
      <h5>Class setState</h5>
      <FormClass />
      <CountClass />
    </div>
  )
}
