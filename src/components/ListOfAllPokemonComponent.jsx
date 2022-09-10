import { capitalize } from "../utils/strings";


const ListOfAllPokemonComponent = ({ pokemons, onSelectedPokemon}) => {


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
                            value={pokemon.url} > {capitalize(pokemon.name)} </option>
                        )
                    })
                }
            </select>
            
         
        </div>)



};

export default ListOfAllPokemonComponent;