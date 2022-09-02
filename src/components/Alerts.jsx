import styled from "styled-components";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Alerts () {
return(
  <AlertsDiv>
      <h1>Alerts</h1>
      <List>
          <ListItem>Alerts Will Show Here.</ListItem>
      </List>
  </AlertsDiv>)
}

export default Alerts

const AlertsDiv = styled.div`
    position: sticky;
    top: 2.5vh;
    margin: 0px 20px 0px 10px;
    float: left;
    width: 200px;
    background: #785a55;
    border: outset;
    border-width: 3px;
    border-color: #785a55;
    height: 95vh;
`