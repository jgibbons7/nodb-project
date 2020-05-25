import React, {Component} from 'react'

class PlayerUpdater extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }
  
  updateInput(name) {
    this.setState({
      input: name
    })
  }

  render() {

  
  return (
    <div>
      <input className='crud' onChange={(e) => this.updateInput(e.target.value)}></input>
      <button className='crud' 
        onClick={() => this.props.addPlayer(this.state.input)}>Add Player</button>
    </div>
    )
  }
}

export default PlayerUpdater