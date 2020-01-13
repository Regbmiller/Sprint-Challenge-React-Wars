import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

import PersonList from './components/PersonList'; 
import styled from 'styled-components';

const StyledDiv = styled.div 
`color: white; 
text-shadow: 2px 2px 5px yellow;
border-style: double;
border-width: 15px;
border-color: black;`  

const StyledHeader = styled.h1 
`font-size: 60px;
text-decoration: underline;
text-shadow: 2px 2px 5px yellow;`

function App() {
  const [ people, setPeople ] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then((res) => {
        console.log(res);
        setPeople(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  
  return (
    <StyledDiv className="App">
      <StyledHeader className="Header">React Wars</StyledHeader>
      <PersonList people={people} />
      
    </StyledDiv>
  );  
}

export default App

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

