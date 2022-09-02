import DropdownForm from "./DropdownForm"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

function Searchbar () {

    const [genreToggle, setGenreToggle] = useState(null)
    const [songArray, setSongArray] = useState([])
    const [searchId, setSearchId] = useState(null)

    useEffect(() => {
        fetch('http://localhost:9292/song_titles')
        .then(res => res.json())
        .then(data =>{
            setSongArray(data)
        })
    }, [])

    const handleGenreToggle = (e) => {
        setGenreToggle(e.target.value)
    }

    const handleSearchSubmit = (title) =>{
        fetch(`http://localhost:9292/search_song/${title}`)
        .then(r => r.json())
        .then(id => {
            setSearchId(id)
        })
    }

    if (searchId){
        return <Navigate to={`/songs/${searchId}`}/>
    }

    return(
        <SearchDiv>
            <h3>Find Song by Genre:</h3>
            <div>
            <ToggleButtonGroup color="success" value={genreToggle} exclusive onChange={(e) => handleGenreToggle(e)}>
                <ToggleButton value="Classical">Classical</ToggleButton>
                <ToggleButton value="Hip-Hop(Rap)">Hip-Hop(Rap)</ToggleButton>
                <ToggleButton value="Gospel">Gospel</ToggleButton>
                <ToggleButton value="Pop">Pop</ToggleButton>
                <ToggleButton value="Jazz">Jazz</ToggleButton>
                <ToggleButton value="Blues">Blues</ToggleButton>
                <ToggleButton value="Reggae">Reggae</ToggleButton>
                <ToggleButton value="Local">Local</ToggleButton>
            </ToggleButtonGroup>
            </div>
            <div>
            <br/>
            {genreToggle ? <Link to={`/genres/${genreToggle}`}><Button variant="contained" color="success">Find</Button></Link> : <Button variant="contained" color="success" disabled>Find</Button>}
            </div>
            <h3>Search by Song:</h3>
            <DropdownForm array={songArray} handleSubmit={handleSearchSubmit}/>
        </SearchDiv>
    )
}

export default Searchbar

const SearchDiv = styled.div`
    a{
        text-decoration: none;
    }
margin: 200px 10px 10px 230px;
background: white;
padding: 1px 0px 10px 0px;
`