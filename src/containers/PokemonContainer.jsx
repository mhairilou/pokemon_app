import React, { useState, useEffect } from "react";
import ListOfAllPokemonComponent from "../components/ListOfAllPokemonComponent";
import PokemonCard from "../components/PokemonCardComponent";

const PokemonContainer = () => {
    const [allPokemonState, setAllPokemonState] = useState([]);
    const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null)


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
        
        return setSelectedPokemonUrl(pokemon)
    }




    return (

        <div>
            <h2>This is the PokemonContainer</h2>
            <hr></hr>
            <ListOfAllPokemonComponent pokemons={allPokemonState} onSelectedPokemon={handleSelectedPokemon} selectedPokemon={selectedPokemonUrl} />
            <PokemonCard selectedPokemonUrl={selectedPokemonUrl} />
        </div>

    )
};

export default PokemonContainer;