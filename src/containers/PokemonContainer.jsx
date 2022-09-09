import React, { useState, useEffect } from "react";
import ListOfAllPokemonComponent from "../components/ListOfAllPokemonComponent";

const PokemonContainer = () => {
    const [allPokemonState, setAllPokemonState] = useState([]);

    useEffect(() => {
        getPokemonFromApi()
    }, [])

    const getPokemonFromApi = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(pokemonAPIResult => pokemonAPIResult.json())
            .then((listOfPokemonData) => {
                return setAllPokemonState(listOfPokemonData.results)
            }

            )
    }



    return (

        <div>
            <h2>This is the PokemonContainer</h2>
            <hr></hr>
            <ListOfAllPokemonComponent pokemons={allPokemonState} />
        </div>

    )
};

export default PokemonContainer;