import './App.css';
import React, { useEffect, useState } from "react";

function App() {

    const [pokeData, setPokeData] = useState({})
  
  
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((data) => {
      setPokeData (data)
      console.log(data);
    });
    };

    useEffect(() => {
      fetchPokemon();
      }, []);


  return (

    <div className="App">
      <header className="App-header">
        <img src= "./pokeball.png" className="App-logo" alt="logo" />
            
           <ul className="horizontal">
            <li><a href="1">Home </a></li>
            <li><a href="1">About</a></li>
          </ul>

          <p>{pokeData.name}</p>
          < img src={pokeData.sprites.front_default} alt={pokeData.name}/>
    
      </header>
    </div>
  );
}

export default App;
