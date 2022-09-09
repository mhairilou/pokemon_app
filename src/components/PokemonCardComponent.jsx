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

    //pokemonTypes is an array of type values found by looping through pokemonDetails.types
    //and for each element in .types going to the type.name



    if (pokemonDetails === null)
        return null

    return (

        <div>
            <h3> {pokemonDetails.name} </h3>
            <img src={pokemonDetails.sprites.front_default} alt={`Image of ${pokemonDetails.name}`}></img>
            <h4>Type(s):</h4>
            <p>{pokemonDetails.types[0].type.name}</p>
            <p>{pokemonDetails.types[1]?.type.name}</p>

        </div>
    )


};

export default PokemonCard;