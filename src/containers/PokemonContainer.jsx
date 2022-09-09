import React, { useState, useEffect } from "react";
import ListOfAllPokemonComponent from "../components/ListOfAllPokemonComponent";
import PokemonCard from "../components/PokemonCardComponent";

const PokemonContainer = () => {
    const [allPokemonState, setAllPokemonState] = useState([]);
    const [selectedPokemonState, setSelectedPokemonState] = useState(null)


    useEffect(() => {
        getPokemonFromApi()
    }, []);

    const getPokemonFromApi = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(pokemonAPIResult => pokemonAPIResult.json())
            .then((listOfPokemonData) => setAllPokemonState(listOfPokemonData.results)

            )
    };


    const handleSelectedPokemon = (pokemon) => {
        
        return setSelectedPokemonState(pokemon)
    }




    return (

        <div>
            <h2>This is the PokemonContainer</h2>
            <hr></hr>
            <ListOfAllPokemonComponent pokemons={allPokemonState} onSelectedPokemon={handleSelectedPokemon} selectedPokemon={selectedPokemonState} />
            <PokemonCard selectedPokemonUrl={selectedPokemonState} />
        </div>

    )
};

export default PokemonContainer;