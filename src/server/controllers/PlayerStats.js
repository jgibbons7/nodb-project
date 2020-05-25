import React, {Component} from 'react'

class PlayerStats extends Component {

  constructor() {
    super()
    this.state = {
      nameChange: ''
    }
  }

  changeState(val) {
    this.setState({
      nameChange: val
    })
  }


}


export default PlayerStats