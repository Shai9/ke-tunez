import CardDisplay from "./CardDisplay";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function GenreDisplay () {

    const sortGenre = useParams()

    const [userSongs, setUserSongs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/genres/${sortGenre.genre}`)
        .then(res => res.json())
        .then(data =>{
            setUserSongs(data)
        })
      }, [])


    const handleAddToWatchlist = (song) => {
        fetch('http://localhost:9292/watchlist', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(song.song)
        })
        .then(res => res.json())
        .then((data) =>{
            const newSong = userSongs.map(song => song.song.id === data.watchlist.song_id ? {song: song.song, review: song.review, director: song.director, watchlist: data.watchlist} : song)
            setUserSongs(newSong)
        })
    }

    const handleRemoveFromWatchlist = (song) => {
        fetch(`http://localhost:9292/watchlist/${song.watchlist.id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) =>{
            const newSong = userSongs.map(song.song.id === data.watchlist.song_id ? {song: song.song, review: song.review, director: song.director, wathclist: null} : song)
            setUserSongs(newSong)
        })
    }
    
    const showSongs = userSongs.map(item => <CardDisplay key={item.song.id} song={item} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>)

    return(
        <>
        <h1 style={{color: '#e8c495'}}>{sortGenre.genre}</h1>
        <DisplayDiv>
            {showSongs}
        </DisplayDiv>
        </>
    )
}

export default GenreDisplay

const DisplayDiv = styled.div `
  margin: 0px 10px 10px 230px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-wrap: wrap;
  /* width: 800px; */
  background-color: #632626;
  /* border-radius: 5px;    */
  border: outset;
  border-width: 4px;
  border-color: #632626;
`