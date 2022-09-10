import { capitalize } from "../utils/strings";

//This component's job is to list all the Pokemon in a dropdown menu
//and to update the state of the selectedPokemon state (in PokemonConatiner)
//to the URL of the selected Pokemon.


const ListOfAllPokemonComponent = ({ pokemons, onSelectedPokemon }) => {


    const handleChange = event => {
        return onSelectedPokemon(event.target.value)
    }

    return (
        <div>
            <h2>Build your Dream Team</h2>
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