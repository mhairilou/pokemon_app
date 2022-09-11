import React, { useState, useEffect } from "react";
import { capitalize } from "../utils/strings";


//This component's job is to fetch a Pokemon's details using its URL
//and render them on a Card.

const PokemonCard = ({ id, pokemonUrl, nickname, remove}) => {

    const [pokemonDetails, setPokemonDetails] = useState(null)


    useEffect(() => {
        if (pokemonUrl) {
            fetch(pokemonUrl)
                .then(results => results.json())
                .then((pokemonData) => {
                    setPokemonDetails(pokemonData)
                })

        }
    }, [pokemonUrl]);

   

    if (pokemonDetails === null)
        return null
    
 

    return (

        <div className="pokemon-card">
            <h3> {capitalize(pokemonDetails.name)} </h3>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}></img>
            {!pokemonDetails.types[1] && <h4> Type: </h4>}
            {pokemonDetails.types[1] && <h4>Types: </h4>}
            <p>{capitalize(pokemonDetails.types[0].type.name)}</p>
            {pokemonDetails.types[1] && <p>{capitalize(pokemonDetails.types[1].type.name)}</p>}
            {nickname && <p>Nickname: {nickname}</p>}
            {id && <p>Id: {id}</p>}
            {id && <button onClick={() => remove(id)}>Remove</button>}
        </div>
    )


};

export default PokemonCard;