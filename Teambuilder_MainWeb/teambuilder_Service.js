
export const GetPokemonApi = async () => {
    const kantoRegionURL = "https://pokeapi.co/api/v2/pokemon?limit=151=0";
    
    let pokemonResponse = await fetch(kantoRegionURL);

    const pokemonApi = await pokemonResponse.json();

    return pokemonApi;
}

const apiKey = "pokemonApi";
export const StorePokemonApi = (listofPokemon) => {
    const listasJson = JSON.stringify(listofPokemon);
    localStorage.setItem(apiKey, listasJson );
}

export const RecievePokemonApi = () => {
    const JsonPokemon = localStorage.getItem(apiKey);
    return JSON.parse(JsonPokemon);
}

const yourTeamKey = "yourTeam";

export const StoreYourTeam = ( yourPokemonTeam ) => {
    const yourTeamasJson = JSON.stringify(yourPokemonTeam);
    localStorage.setItem(yourTeamKey, yourTeamasJson)
}

export const RecieveYourTeam = () => {
    const RecieveYourTeamJson = localStorage.getItem(yourTeamKey);
    if (RecieveYourTeamJson === null || RecieveYourTeamJson === "null")
    {
        return [];
    }
    return JSON.parse(RecieveYourTeamJson);
}

const guestNameKey = "GuestName";

export const RecieveGuestName = () => {
    return localStorage.getItem(guestNameKey);
}

export const GetSinglePokemonApi = async ( pokemon ) => {
    const pokemonURL = pokemon.url;

    var pokemonRecieve = await fetch(pokemonURL);

    var pokemonList = await pokemonRecieve.json();
    
    return pokemonList;
}

const moreAboutPokemonKey = "PokeMonInfo";

export const StoreInfoAboutPokemon = ( pokemon ) => {
    const infoasJson = JSON.stringify(pokemon);
    localStorage.setItem(moreAboutPokemonKey, infoasJson);
}

