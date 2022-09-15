import React, { useState, useEffect } from "react";
import ListOfAllPokemonComponent from "./TeamBuilder/ListOfAllPokemon";
import PokemonCard from "./TeamBuilder/PokemonCard";
import PokemonTeam from "./TeamBuilder/PokemonTeam";
import "./TeamBuilderContainer.css"

const TeamBuilderContainer = () => {
    const [allPokemonState, setAllPokemonState] = useState([]);
    const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null)
    const [pokemonTeam, setPokemonTeam] = useState([])
    const [nicknameState, setNicknameState] = useState("")

    useEffect(() => {
        getPokemonFromApi()
    }, []);

    const getPokemonFromApi = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=300")
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
        <div className="team-page">

            <div>

                <div className="add-new-pokemon-container">
                    {(pokemonTeam.length >= 6) && <><h2> Dream Team Complete! </h2>
                    <img className="pika-image" src={require("../images/happypika.gif")} alt="pikachu" />

                    </>}
                    {(pokemonTeam.length < 6) && <>
                        <ListOfAllPokemonComponent pokemons={allPokemonState} onSelectedPokemon={handleSelectedPokemon} selectedPokemon={selectedPokemonUrl} />
                        <PokemonCard pokemonUrl={selectedPokemonUrl} />

                        <div className="nickname-controls">
                            <label>Give nickname?</label>
                            <input className="nickname-input" onChange={handleNicknameInput} value={nicknameState}></input>
                            <button className="rounded" onClick={addSelectedPokemonToTeam}>I choose you!</button>
                        </div>
                    </>}
                </div>
            </div>
            <div className="team-display">
                <PokemonTeam currentTeamList={pokemonTeam} removePokemonFromTeam={removePokemonFromTeam} />
            </div>
        </div>

    )
};

export default TeamBuilderContainer;