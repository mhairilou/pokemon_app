import PokemonCard from "./PokemonCard";
import "./PokemonTeam.css"

//This component's job is to pass props to the Cards for each Pokemon on the Team.

const PokemonTeam = ({ currentTeamList, removePokemonFromTeam }) => {

    if (currentTeamList === undefined)
        return null

    return (
        <div className="team-container">
            {currentTeamList.length !== 0 && <h2>Your team:</h2>}
            <div className="team">
                {currentTeamList.map(({ id, url, nickname }) => {
                    console.log(id)
                    return (
                        <PokemonCard key={id} id={id} pokemonUrl={url} nickname={nickname} currentTeamList={currentTeamList} remove={removePokemonFromTeam} />
                    )

                })}

            </div>
        </div>
    )
};

export default PokemonTeam;