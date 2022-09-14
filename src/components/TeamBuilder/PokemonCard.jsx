import React, { useState, useEffect } from "react";
import { capitalize } from "../../utils/strings";
import "./PokemonCard.css"

//This component's job is to fetch a Pokemon's details using its URL
//and render them on a Card.

const PokemonCard = ({ id, pokemonUrl, nickname, remove }) => {

    const [pokemonDetails, setPokemonDetails] = useState(null)


    useEffect(() => {
        console.log('In pokemon card file, in the useEffect hook', pokemonUrl)

        const abortController = new AbortController();

        if (pokemonUrl) {
            console.log('I am about to fetch data', pokemonUrl)
            fetch(pokemonUrl, { signal: abortController.signal })
                .then(results => results.json())
                .then((pokemonData) => {
                    console.log('pokemon data finally arrived from url!!', pokemonData)
                    setPokemonDetails(pokemonData)
                })
                .catch(() => { })
        }

        return () => {
            abortController.abort()
            console.log("effect cleanup", pokemonUrl)
        }
    }, [pokemonUrl]);


    console.log('In pokemon card body, but not in a hook', pokemonUrl)

    if (pokemonDetails === null)
        return null



    return (

        <div className="pokemon-card">
            <h3> {capitalize(pokemonDetails.name)} </h3>
            <img src={pokemonDetails.sprites.other.dream_world.front_default} alt={pokemonDetails.name}></img>
            {!pokemonDetails.types[1] && <h4> Type: </h4>}
            {pokemonDetails.types[1] && <h4>Types: </h4>}
            <p>{capitalize(pokemonDetails.types[0].type.name)}</p>
            {pokemonDetails.types[1] && <p>{capitalize(pokemonDetails.types[1].type.name)}</p>}
            {nickname && <p>Nickname: {nickname}</p>}
            {id && <button onClick={() => remove(id)}>Remove</button>}
        </div>
    )


};

export default PokemonCard;