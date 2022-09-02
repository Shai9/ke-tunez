import styled from "styled-components";
import { Button } from "@mui/material";
import Review from "./Review";
import ReviewForm from "./ReviewForm";


function TrueDetails ({song, formBool, user, handleRemove, handleAdd, reviews, handleFormBool, handleEditReview, handleCreateReview}) {
    
    const watchId = song.watchlists.find(w => w.user_id === user.id)
    const revId = reviews.find(r => r.song.id === song.id)

    return(
        <DetailsDiv>
        <img src={song.song_img} alt={song.title}/>
        <h1>{song.title}</h1>
        <h2>Director: {song.director.first_name} {song.director.last_name}</h2>
        <h3>{song.genre}  |  {song.mpa_rating}</h3>
        {watchId ? <Button size="small" variant="contained" color="secondary" onClick={() => handleRemove(watchId)}>Remove From Watchlist</Button> : <Button size="small" variant="contained" color="success" onClick={() => handleAdd(song)}>Add To Watchlist</Button>}
        {revId ? <Button size="small" variant="contained" color="warning" onClick={() => handleFormBool()}>Edit Review</Button> : <Button size="small" variant="contained" color="primary" onClick={() => handleFormBool()}>Create Review</Button>}
        {formBool ? null : <Review review={revId}/>}
        {formBool ? <ReviewForm handleFormBool={handleFormBool} review={revId} handleEditReview={handleEditReview} handleCreateReview={handleCreateReview} song={song}/> : null}
        </DetailsDiv>
    )
}

export default TrueDetails

const DetailsDiv = styled.div`
color: #e8c495;
img{
    width: 40%;
}

`