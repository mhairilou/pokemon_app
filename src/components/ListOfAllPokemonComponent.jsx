

const ListOfAllPokemonComponent = ({ pokemons, onSelectedPokemon, selectedPokemon }) => {


    const handleChange = event => {
        return onSelectedPokemon(event.target.value)
    }




    return (
        <div>
            <h2>Pick your Pokemon</h2>
            <select defaultValue="" onChange={handleChange} >
                <option value="" disabled > Choose a Pokemon! </option> {
                    pokemons.map(pokemon => {
                        return (<
                            option key={pokemon.name}
                            value={pokemon.url} > {pokemon.name} </option>
                        )
                    })
                }
            </select>
            <button>I choose you!</button>
         
        </div>)



};

export default ListOfAllPokemonComponent;