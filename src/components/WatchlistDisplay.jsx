import CardDisplay from "./CardDisplay";
import styled from "styled-components";
import { useEffect, useState } from "react";

function WatchlistDisplay () {

    const [userSongs, setUserSongs] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/watchlist')
        .then(res => res.json())
        .then(data =>{
            setUserSongs(data)
        })
      }, [])


  const handleRemoveFromWatchlist = (song) => {
      fetch(`http://localhost:9292/watchlist/${song.watchlist.id}`, {
          method: 'DELETE',
          headers: {
          'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(() =>{
          const newArray = userSongs.filter(film => film.watchlist.id !== song.watchlist.id)
          setUserSongs(newArray)
      })
  }

    const showSongs = userSongs.map(item => <CardDisplay key={item.song.id} song={item} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>)

    return(
        <>
        <h1 style={{color: '#e8c495'}}>My Watchlist</h1>
        <DisplayDiv>
            {showSongs}
        </DisplayDiv>
        </>
    )
}

export default WatchlistDisplay

const DisplayDiv = styled.div `
  margin: 0px 10px 10px 230px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: #632626;
  border: outset;
  border-width: 4px;
  border-color: #632626;
`