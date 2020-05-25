const playerData = [{
  id: 0,
  name: 'Josh',
  wins: 0,
  rage: [],
  input: 0,
  avg: 0
},
{
  id: 1,
  name: 'Ken',
  wins: 0,
  rage: [],
  input: 0,
  avg: 0
},
{
  id: 2,
  name: 'Jeff',
  wins: 0,
  rage: [],
  input: 0,
  avg: 0
}]

let pid = 3

module.exports = {
  fillInFriends: (req, res) => {
    res.status(200).send(playerData)
  },

  addPlayer: (req, res) => {
    const {name} = req.body
    const newPlayer = {
    id: pid,
    name: name,
    wins: 0,
    rage: [],
    input: 0,
    avg: 0
  }
    playerData.push(newPlayer)
    pid++
    res.status(200).send(playerData)
  },

  deletePlayer: (req, res) => {
    const {id} = req.params
    const index = playerData.findIndex(element => element.id === +id)
    playerData.splice(index, 1)
    res.status(200).send(playerData)
  },

  updatePlayer: (req, res) => {
    const {id} = req.params
    console.log("req body: " + req.body)
    const newName = req.body.newName
console.log("id " + id)
console.log("newName " + newName)
    const index = playerData.findIndex((element) => element.id === +id)
console.log("Index " + index)
    if (index === -1) {
      return res.status(404).send('Player not found')
    }

    playerData[index].name = newName

    res.status(200).send(playerData)
    console.log(playerData)

  //   const {newName} = req.body
  // console.log('newName: '+ newName)
  //   const id = req.params.id
  // console.log('id: ' + id)
  //   const index = playerData.findIndex(element => element.id === +id)
  // console.log(index)
  //   playerData[index].name = newName
  //   res.status(200).send(playerData)
  // }

  }
}