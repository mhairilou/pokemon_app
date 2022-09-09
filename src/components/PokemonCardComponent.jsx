import React, { useState, useEffect } from "react";

const PokemonCard = ({ selectedPokemonUrl }) => {

    const [pokemonDetails, setPokemonDetails] = useState(null)

    useEffect(() => {
        if (selectedPokemonUrl) {
            fetch(selectedPokemonUrl)
                .then(results => results.json())
                .then((pokemonData) => {
                    console.log("do we have data", pokemonData)
                    setPokemonDetails(pokemonData)
                })
        }
    }, [selectedPokemonUrl]);


    if (pokemonDetails === null)
        return null

    console.log(pokemonDetails.sprites.front_default)
    console.log("this is the alt text", pokemonDetails.name)

    return (

        <>
            <h5> I am a pokemon card! I will render a sprite and some stats from here: {selectedPokemonUrl}</h5>
            <img src={pokemonDetails.sprites.front_default} alt={`Image of ${pokemonDetails.name}`}></img>

        </>
    )


};

export default PokemonCard;