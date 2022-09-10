import PokemonCard from "./PokemonCardComponent";


//This component's job is to pass props to the Cards for each Pokemon on the Team.

const PokemonTeam = ({ currentTeamList }) => {

    return (
        <div>
            {currentTeamList.length !== 0 && <h3>Your team:</h3>}
            <div className="pokemons-container">{currentTeamList.map(({ id, url, nickname }) => {
                console.log(id)
                return (
                    <PokemonCard key={id} pokemonUrl={url} nickname={nickname} />
                )

            })}
            </div>

        </div>
    )
};

export default PokemonTeam;