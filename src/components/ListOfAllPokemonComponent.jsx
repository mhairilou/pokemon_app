const ListOfAllPokemonComponent = ({pokemons}) => {

//    console.log("pls be bulbasaur...", pokemons[0]?.name)
   
  


   
    return (
        <>
        <h3>This is the list of all pokemon</h3>
        {pokemons.map((pokemon) => <h5 key={pokemon.name}>{pokemon.name}</h5>)}
        
        </>
    )


};

export default ListOfAllPokemonComponent;