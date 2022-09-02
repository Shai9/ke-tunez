import Button from '@mui/material/Button';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function CardDisplay ({song, handleAddToWatchlist, handleRemoveFromWatchlist}) {

    return(
    <CardDiv>
        <img src={song.song_img} alt={song.song.title}/>
        <Link to={`/songs/${song.song.id}`}>
            <h3>{song.song.title}</h3>
        </Link>
        {song.review ? <h4 style={{color: 'gold'}}>{"★".repeat(song.review.star_rating)}</h4> : <h5>*Yet To Be Reviewed*</h5>}
        <h6>Directed By:</h6>
        <Link to={`/directors/${song.director.id}`}>
        <DirectorH4 onClick={() => console.log("director")}>{song.director.first_name} {song.director.last_name}</DirectorH4>
        </Link>
        <h5>{song.song.genre} | Rated {song.song.mpa_rating}</h5>
        {song.watchlist ? <Button size="small" variant="contained" color="secondary" onClick={() => handleRemoveFromWatchlist(song)}>Remove from Watchlist</Button> : <Button size="small" variant="contained" color="success" onClick={() => handleAddToWatchlist(song)}>Add to Watchlist</Button>}
    </CardDiv>
    )
}

export default CardDisplay

const CardDiv = styled.div`
margin: 10px 2.5% 10px 2.5%;
padding: 5px 5px 5px 5px;
width: calc(20% - 10px);
min-height: 250px;
border-color: black;
background-color: hsl(0, 0%, 98%);
box-shadow: 3px 3px 4px black;
position: relative;
button{
    margin: 5px 2px 5px 2px;
}
img{
  max-width: 180px;
  height: 100px;
  animation: rotation 2s infinite linear;
}
a{
    color: black;
    text-decoration: none;
}
a:visited{
    color: black;
}
h3:hover{
    color: #fcba03;
    cursor: pointer;
    font-style: italic;
}
`
const DirectorH4 = styled.h4`
    :hover{
        color: #754c9e;
        cursor: pointer;
        font-style: italic;
    }
`