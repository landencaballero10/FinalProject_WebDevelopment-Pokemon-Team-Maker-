import { RecieveGuestName, GetPokemonApi, StorePokemonApi, RecievePokemonApi, StoreYourTeam, GetSinglePokemonApi, StoreInfoAboutPokemon, RecieveYourTeam  } from "./teambuilder_Service.js";

export const GetGuestName = () => {
    return RecieveGuestName();
}


var pokemonOBJ = await GetPokemonApi();

var pokemonList = pokemonOBJ.results;

StorePokemonApi(pokemonList);

export const GetPokemonList = () => {
    pokemonList = RecievePokemonApi();
    return pokemonList;
}

export const updateList = ( newList ) => {
    pokemonList = newList;
    StorePokemonApi(pokemonList)
}


var yourteam = []

export const GetYourPokemonTeam = () => {
    console.log(RecieveYourTeam());
    return RecieveYourTeam();
}

export const UpdateYourPokemonTeam = ( newTeam ) => {
    yourteam = newTeam;
    StoreYourTeam(newTeam);
}

export const ReturnPokemonApi = async ( singlePokemon ) => {
    var singlePokemonApi = await GetSinglePokemonApi(singlePokemon);

    return singlePokemonApi;
}

export const StorePokemonInfo = ( pokemon ) =>
{
    StoreInfoAboutPokemon(pokemon);
}