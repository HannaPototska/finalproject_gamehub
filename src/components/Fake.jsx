import Backendless from 'backendless'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



function Fake() {
    const [fakeSelectedGame, setFakeSelectedGame] = useState()
    const {title} = useParams()
    console.log(title);

    useEffect(() => {
        // const title = selectedGame? selectedGame.title: navigate("/community")
        const where = "game = '" + title + "'";
        var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(where);
        Backendless.Data.of("tutorials")
          .find(queryBuilder)
          .then((res) => {
            setFakeSelectedGame(res);
            console.log(res);
            
          })
          .catch((err) => {
        alert("Something went wrong"+err.message)
          
          });
      }, []);
  return (
    <div>Fake</div>
  )
}

export default Fake