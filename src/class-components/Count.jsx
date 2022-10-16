import React from 'react'

export class Count extends React.Component {
  state = {
    count: 0,
  }

  hardleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button type="button" onClick={this.hardleClick}>
          {' '}
          click
        </button>
      </>
    )
  }
}
