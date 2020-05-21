#MTG Rage Tracker
##Application concept
  - This app tracks MTG stats amongst "friends."
  - This is will have full CRUD so all can use it.
    - GET: retrieve player names and stats
    - POST: Add new players to the group
    - PUT: Update names and stats
    - DELETE: Remove players from group
  
###Functionality
  - We'll have a header to display the name of our app.
  - The app will load with player names and stats.
    - Wins: Number of wins, incremented.
    - Rage Level: scale of 1-10 of a players rage, averaged.
    - Fun at Parties: Will be true if the rage level is below 5.
  - We will have a button to add and remove players.
    - Secondary goal: Ability to add custom stats.
  
###Endpoints
  - GET - Retrieves players from default data. *componentDidMount(getPlayers())*
  - POST - Adds players to the table (as in kitchen table). *app.post(addPlayer())*
  - PUT - Update a players name and stats.  *app.put(updatePlayer())*
  - DELETE - Remove players from table. *app.delete(removePlayer())*

###Components
  - App.js - Holds state of players.
    - Header.js - Functional, it's a header.
    - PlayerStats.js - Holds state of wins and rage.
      - PlayerUpdater - Update methods for our players.

###Wireframe

![Backend]('./screenshots/nodb-project')
