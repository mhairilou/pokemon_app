import PokemonCard from "./PokemonCardComponent";

const PokemonTeam = ({ currentTeamList }) => {

  
    
    return (
        <>
            {currentTeamList.length !== 0 && <h3>Your team:</h3> }
            <ul>{currentTeamList.map(({id, url, nickname}) => {
                console.log(id)
                return (
                    <PokemonCard key={id} pokemonUrl={url} nickname={nickname}/>)
            })}</ul>
        </>
    )
};

export default PokemonTeam;