import PokemonCard from "./PokemonCardComponent";

const PokemonTeam = ({ currentTeamList }) => {


    return (
        <>
            <h3>I am the pokemon team</h3>
            <ul>{currentTeamList.map((pokemonUrl, index) => {
                return (
                    <PokemonCard key={index} selectedPokemonUrl={pokemonUrl} />)
            })}</ul>
        </>
    )
};

export default PokemonTeam;