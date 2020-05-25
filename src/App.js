import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import PlayerUpdater from './components/PlayerUpdater'

let body = {}

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
    
    this.plusWin = this.plusWin.bind(this)
    this.minusWin = this.minusWin.bind(this)
    this.updateRage = this.updateRage.bind(this)
    this.updateInputState = this.updateInputState.bind(this)
    this.addPlayer = this.addPlayer.bind(this)

    
  }


  plusWin(id) {
    let stateCopy = this.state.players
    const index = stateCopy.findIndex((element) => element.id === +id)
    stateCopy[index].wins += 1
    this.setState({
      players: stateCopy
    })
  }

  minusWin(id) {
    let stateCopy = this.state.players
    const index = stateCopy.findIndex((element) => element.id === +id)
    stateCopy[index].wins -= 1
    this.setState({
      players: stateCopy
    })
  }

  
  
  updateInputState(id, num) {
    let stateCopyInput = this.state.players
    const index = stateCopyInput.findIndex((element) => element.id === +id)
    stateCopyInput[index].input = +num.target.value
    this.setState({
      players: stateCopyInput
    })
    console.log(this.state)
  }

  updateRage(id) {
    let stateCopy = this.state.players
    const index = stateCopy.findIndex((element) => element.id === +id)
    console.log(id)
    stateCopy[index].rage.push(stateCopy[index].input)
    stateCopy[index].avg = Math.floor((this.state.players[index].rage.reduce((x, y) => x + y, 0) / this.state.players[index].rage.length))
console.log(stateCopy)
    this.setState({
     players: stateCopy
    })
  }

  addPlayer(name) {
    const body = {name}
    axios.post('/api/mtgtracker', body).then(res => {
      this.setState({
        players: res.data
      })
    })
  }

  deletePlayer(id){
    console.log(this.state)
    axios.delete(`/api/mtgtracker/${id}`).then(res => {
      this.setState({
        players: res.data
      })
    })
  }
  
  updatePlayer(id, newName) {
    const body = newName
    axios.put(`/api/mtgtracker/${id}`, body).then(res => {
      this.setState({
        players: res.data
      })
    })
  }

  componentDidMount() {
    axios.get('/api/mtgtracker').then(res => {
      this.setState({
        players: res.data
      })
      console.log(this.state)
    })
}



  render() {
  const player = this.state.players.map(element => (
     <div id='main' key={element.id}>
        
        <h3 className='name'>{element.name}</h3>
        <div className='winRage'>Wins:  {element.wins}</div>
        <button className='winButton' onClick={() => this.plusWin(element.id)}>↑</button>
        <button className='winButton' onClick={() => this.minusWin(element.id)}>↓</button>
        <div className='winRage'>Rage:  {element.avg}</div>
        <input className='rageInput' placeholder='Rage input, number only' type="number" onChange={(num) => this.updateInputState(element.id, num)}></input>
        <button className='rageInput btn' onClick={() => this.updateRage(element.id)}>Submit</button>
        <div >
          <button className='upDel btn' onClick={() => this.deletePlayer(element.id)}>Delete Player</button>
          
          <button className='upDel btn' onClick={() => {
            this.updatePlayer(element.id, body)
            console.log('id: ' + element.id, "body: " + body.name)
          }
  }
          >Update Player Name:
          </button>
            
            <input className='upDel update' placeholder=' New Name' onChange={(e) => {
              body = {
                newName: e.target.value
              }
              console.log("body: " + body.newName)
            }
          }
            >
            </input>
          
        </div>
      </div>))
      
      
    return (
    <div>
      <Header className='header' />
      <PlayerUpdater addPlayer={this.addPlayer} />
      <div>
        {player}
      </div>
    </div>
    )
  }
}
export default App;
