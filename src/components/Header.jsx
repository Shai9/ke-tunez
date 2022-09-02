import styled from "styled-components"
import { NavLink, Link } from "react-router-dom"

function Header () {


    return(
        <HeaderDiv >
            <h1>
                <Link to='/'>Ke-Tunez</Link>
            </h1>
            <NavLink to="/search">Search(Tafuta)    |</NavLink>
            <NavLink to="/playlist">    Playlist(Orodha ya Kucheza)    |</NavLink>
            <NavLink to="/reviews">    Reviews(Uchambuzi)    |</NavLink>
            <NavLink to="/suggestions"> Suggests(Maoni)  |</NavLink>
            <NavLink to="/findsong"> Find Something New(Tafuta)</NavLink>
        </HeaderDiv>
    )
}

export default Header

const HeaderDiv = styled.div`
    background-color: black ;
    margin-bottom: 3px;
    padding-bottom: 20px;
    border-bottom: outset;
    border-right: outset;
    border-color: #632655;
    a {
        color: #e8c502;
        text-decoration: none;
    }
    a:hover{
        color: #e8c502;
    }
    a:visited {
        color: #e8c502;
    }
    h1{
        margin: 0px;
        padding: 10px 0px 10px 0px;
        color: white;
    }
`