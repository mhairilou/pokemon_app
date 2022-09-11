import PokemonCard from "./PokemonCardComponent";
import "./PokemonTeam.css"

//This component's job is to pass props to the Cards for each Pokemon on the Team.

const PokemonTeam = ({ currentTeamList, removePokemonFromTeam}) => {

    if(currentTeamList === undefined)
    return null

    return (
        <div className="team">
            {currentTeamList.length !== 0 && <h2>Your team:</h2>}
            {currentTeamList.map(({ id, url, nickname }) => {
                console.log(id)
                return (
                    <PokemonCard key={id} id={id} pokemonUrl={url} nickname={nickname} currentTeamList={currentTeamList} remove={removePokemonFromTeam}/>
                )

            })}
            

        </div>
    )
};

export default PokemonTeam;