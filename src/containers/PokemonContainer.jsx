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
        if (selectedPokemonUrl && pokemonTeam) {
            setPokemonTeam([...pokemonTeam, { url: selectedPokemonUrl, nickname: nicknameState, id: Math.random() }])
            setNicknameState("")
        }
    }

    const removePokemonFromTeam = (idOfokemonToRemove) => {
        setPokemonTeam(currentTeamList => {
            const newTeamList = currentTeamList.filter(pokemon => {
                return pokemon.id !== idOfokemonToRemove
            })
            return newTeamList

        })
    }

    const handleNicknameInput = event => {
        return setNicknameState(event.target.value)

    }


    return (
        <div>
            <div className="container">
                <h1>Very Excellent Pokemon App</h1>

                <ListOfAllPokemonComponent pokemons={allPokemonState} onSelectedPokemon={handleSelectedPokemon} selectedPokemon={selectedPokemonUrl} />

                <label>Give nickname?
                    <input onChange={handleNicknameInput} value={nicknameState}></input>
                </label>
                <button onClick={addSelectedPokemonToTeam}>I choose you!</button>
                <PokemonCard pokemonUrl={selectedPokemonUrl} />
                <PokemonTeam currentTeamList={pokemonTeam} removePokemonFromTeam={removePokemonFromTeam} />
            </div>
        </div>
    )
};

export default PokemonContainer;