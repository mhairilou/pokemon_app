import React, { useState, useEffect } from "react";

const PokemonCard = ({ selectedPokemonUrl, nickname }) => {

    const [pokemonDetails, setPokemonDetails] = useState(null)

    useEffect(() => {
        if (selectedPokemonUrl) {
            fetch(selectedPokemonUrl)
                .then(results => results.json())
                .then((pokemonData) => {
                    setPokemonDetails(pokemonData)
                })

        }
    }, [selectedPokemonUrl]);


    if (pokemonDetails === null)
        return null

    return (

        <div>
            <h3> Name: {pokemonDetails.name} </h3>
            <img src={pokemonDetails.sprites.front_default} alt={`Image of ${pokemonDetails.name}`}></img>
            <h4>Type(s): </h4>
            <p>{pokemonDetails.types[0].type.name}</p>
            <p>{pokemonDetails.types[1]?.type.name}</p>

        </div>
    )


};

export default PokemonCard;