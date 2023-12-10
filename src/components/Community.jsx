import axios from 'axios'
import React, { useState } from 'react'


function Community() {
  const [games, setgames] = useState([])
  function getGames() {
    axios("https://www.freetogame.com/api/games").then(res => 
    {console.log(res.data)
    setgames(i => res.data)
    })
  .catch(err => console.log(err))
  }
  return (
    <div>
      <button className='btn' onClick={getGames}>games</button>
      {games && games.map(i => <div>
        {i.title}
      </div>)}
    </div>
  )
}

export default Community