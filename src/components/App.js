import '../App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Alerts from "./Alerts";
import Header from './Header';
import Searchbar from './Searchbar';
import FindNewSong from './FindNewSong';
import WatchlistDisplay from './WatchlistDisplay';
import ReviewsDisplay from './ReviewsDisplay';
import DetailsContainer from './DetailsContainer';
import GenreDisplay from './GenreDisplay';
import DirectorDisplay from './DirectorDisplay';


function App() {

  const baseUrl = 'http://localhost:9292'

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`${baseUrl}/users`)
    .then(res => res.json())
    .then(data =>{
        setUser(data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Alerts />
      <Routes>
        <Route path="/" element={<h1 style={{color: "#e8c495", marginTop: "300px"}}>Welcome Ke-Tunez</h1>}/>

        <Route path="/search" element={<Searchbar />}/>

        <Route path="/watchlist" element={<WatchlistDisplay />}/>

        <Route path="/reviews" element={<ReviewsDisplay />}/>

        <Route path="/songs/:id" element={<DetailsContainer user={user}/>}/>

        <Route path='/findsong' element={<FindNewSong user={user}/>}/>

        <Route path='/genres/:genre' element={<GenreDisplay />}/>

        <Route path="directors/:id" element={<DirectorDisplay />}/>
      </Routes>
    </div>
  );
}

export default App;
