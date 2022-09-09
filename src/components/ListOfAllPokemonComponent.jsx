const ListOfAllPokemonComponent = ({ pokemons, onSelectedPokemon, selectedPokemon }) => {


    const handleChange = event => {
        return onSelectedPokemon(event.target.value)
    }




    return (
        <div>
            <h3>Here is the selector for the pokemon</h3>
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
            <h5>This is the selected pokemon's URL : {selectedPokemon}</h5>

        </div>)



};

export default ListOfAllPokemonComponent;