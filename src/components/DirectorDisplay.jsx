import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

function DirectorDisplay () {

  const directorId = useParams()

  const [director, setDirector] = useState({
      first_name: '',
      last_name: '',
      songs: [],
      awards: 0
  })
  useEffect(() => {
      fetch(`http://localhost:9292/directors/${directorId.id}`)
      .then(r => r.json())
      .then(data => {
          setDirector(data)
      })
  }, [])
  let movies
  if (director.songs.length > 0){
      songs = director.songs.map(m => <Link to={`/songs/${m.id}`}><h3>{m.title}</h3></Link>)
  } else {
      songs = <li>No Songs To Show</li>
  }
  return(
      <DirectorDiv>
      <h1>{director.first_name} {director.last_name}</h1>
      <h2>Awards: {director.awards}</h2>
      <h1>Songs:</h1>
      {songs}
      </DirectorDiv>
  )
}

export default DirectorDisplay

const DirectorDiv = styled.div`
color: #e8c495;
background-color: #632626;
margin: 20px 200px 0px 400px;
padding: 3px 0px 3px 0px;
border-bottom: outset;
border-right: outset;
border-color: #632626;
a{
    color: #e8c495;
    text-decoration: none;
}
a:visited{
    color: #e8c495;
}
a:hover{
    color: black;
}
img{
    width: 40%;
}
`

