import React, { useState, useEffect } from "react";
import ListOfAllPokemonComponent from "../components/ListOfAllPokemonComponent";
import PokemonCard from "../components/PokemonCardComponent";
import PokemonTeam from "../components/PokemonTeam";

const PokemonContainer = () => {
    const [allPokemonState, setAllPokemonState] = useState([]);
    const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null)
    const [pokemonTeam, setPokemonTeam] = useState([])
    const [nicknameState, setNicknameState] = useState("")

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



    const addSelectedPokemonToTeam = () => {
        if (selectedPokemonUrl) {
            setPokemonTeam([...pokemonTeam, { url: selectedPokemonUrl, nickname: nicknameState, id:Math.random()}])
            setNicknameState("")
        }
    }

    const handleNicknameInput = event => {

        return setNicknameState(event.target.value)

    }


    return (

        <div>
            <h1>Very Excellent Pokemon App</h1>
            <ListOfAllPokemonComponent pokemons={allPokemonState} onSelectedPokemon={handleSelectedPokemon} selectedPokemon={selectedPokemonUrl} />
            <PokemonCard pokemonUrl={selectedPokemonUrl} />
            <label>Give nickname?
                <input onChange={handleNicknameInput} value={nicknameState}></input>
            </label>
            <br></br>
            <button onClick={addSelectedPokemonToTeam}>I choose you!</button>

            <PokemonTeam currentTeamList={pokemonTeam} />
        </div>

    )
};

export default PokemonContainer;