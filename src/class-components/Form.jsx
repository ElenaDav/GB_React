import React from 'react'

export class Form extends React.Component {
  state = {
    name: 'This is our text',
    arr: ['ivanov', 'petrov', 'sidorov'],
  }

  hardleChangeName = (ev) => {
    this.setState({ name: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>возвращаем массив через map</p>
        {this.state.arr.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
        <hr />
        <input
          type="text"
          onChange={this.hardleChangeName}
          name="login"
        ></input>
        <input type="text" name="password"></input>
        <button>send form</button>
      </form>
    )
  }
}
