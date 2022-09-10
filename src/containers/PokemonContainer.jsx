import React, { useState, useEffect } from "react";
import ListOfAllPokemonComponent from "../components/ListOfAllPokemonComponent";
import PokemonCard from "../components/PokemonCardComponent";
import PokemonTeam from "../components/PokemonTeam";

const PokemonContainer = () => {
    const [allPokemonState, setAllPokemonState] = useState([]);
    const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null)
    const [pokemonTeam, setPokemonTeam] = useState([])
    const [nickname, setNickname] = useState("")

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

    const addSelectedPokemonToTeam = (pokemon) => {
        if (pokemon)
            {setPokemonTeam([...pokemonTeam, pokemon])
            setNickname("")}
    }

    const handleNicknameInput = event => {
        
        return setNickname(event.target.value)

    }


    return (

        <div>
            <h1>Very Excellent Pokemon App</h1>
            <ListOfAllPokemonComponent pokemons={allPokemonState} onSelectedPokemon={handleSelectedPokemon} selectedPokemon={selectedPokemonUrl} />
            <h2>Selected Pokemon's Card</h2>
            <PokemonCard selectedPokemonUrl={selectedPokemonUrl} nickname={nickname} />

            <input onChange={handleNicknameInput} value={nickname}></input>
            <button onClick={() => addSelectedPokemonToTeam(selectedPokemonUrl)}>I choose you!</button>

            <PokemonTeam currentTeamList={pokemonTeam} />
        </div>

    )
};

export default PokemonContainer;