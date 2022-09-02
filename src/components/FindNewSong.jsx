import { Button } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

function FindNewSong () {

    const [newSong, setNewSong] = useState(null)

    const queryNewSong = () =>{
        fetch('http://localhost:9292/user/find_new_song')
        .then(res => res.json())
        .then(data =>{
            setNewSong(data)
        })
    }

    let newSongToShow

    if (newSong === "No Reviews")
        newSongToShow = <h1>Review some songs to get a suggestion!</h1>
    else if (newMovie === "Not enough reviews")
        newSongToShow = <h1>We couldn't find you a match. Try adding more reviews to get a suggestion!</h1>
    else if (!newSong)
        newSongToShow = null
    else
        newSongToShow = <SongDiv><img src={newSong.song_img} alt={newSong.title}/><h1>{newSong.title}</h1>
        <h2>Director: {newSong.director.first_name} {newSong.director.last_name}</h2>
        <h3>{newSong.genre}  |  {newSong.mpa_rating}</h3>
        <Link to={`/songs/${newSong.id}`}>
            <Button variant="contained" color="warning">Details</Button>
        </Link>
        </SongDiv>

    return(
        <div style={{marginTop: "40px", color: "#e8c495"}}>
        <Button variant="contained" color="success" onClick={() => queryNewSong()}>Find Me a New Song!</Button>
        <br/>
        <br/>
        {newSong ? newSongToShow : null}
        </div>
    )
}

export default FindNewSong

const SongDiv = styled.div`
a{
    color: black;
    text-decoration: none;
}
a:visited{
    color: black;
}
img{
    width: 40%;
}
`