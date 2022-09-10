import React, { useState, useEffect } from "react";
import { capitalize } from "../utils/strings";

const PokemonCard = ({ pokemonUrl, nickname }) => {

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

        <div>
            <h3> Name: {capitalize(pokemonDetails.name)} </h3>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}></img>
            {!pokemonDetails.types[1] && <h4> Type: </h4>}
            {pokemonDetails.types[1] && <h4>Types: </h4>}
            <p>{capitalize(pokemonDetails.types[0].type.name)}</p>
            {pokemonDetails.types[1] && <p>{capitalize(pokemonDetails.types[1].type.name)}</p>}
            {nickname && <p>Nickname: {nickname}</p>}

        </div>
    )


};

export default PokemonCard;