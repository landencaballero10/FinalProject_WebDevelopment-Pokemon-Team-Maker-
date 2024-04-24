import { RecieveGuestName, GetPokemonApi, StorePokemonApi, RecievePokemonApi } from "./teambuilder_Service.js";

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


var yourteam = pokemonList;

export const GetYourPokemonTeam = () => {
    
}

export const UpdateYourPokemonTeam = ( newTeam ) => {
    
}
