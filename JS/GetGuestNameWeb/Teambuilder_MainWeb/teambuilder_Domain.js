import { RecieveGuestName, GetPokemonApi, StorePokemonApi, RecievePokemonApi, StoreYourTeam, GetSinglePokemonApi, StoreInfoAboutPokemon, RecieveYourTeam, isLocalStorageAvailable  } from "../Teambuilder_MainWeb/teambuilder_Service.js";

export const GetGuestName = () => {
    return RecieveGuestName();
}
var pokemonOBJ ;

if (isLocalStorageAvailable())
{
    pokemonOBJ = await GetPokemonApi();

}
// var pokemonOBJ ;
    console.log(pokemonOBJ);

var pokemonList = pokemonOBJ;

StorePokemonApi(pokemonList);

export const GetPokemonList = () => {
    pokemonList = RecievePokemonApi();
    return pokemonList;
}

export const updateList = ( newList ) => {
    pokemonList = newList;
    StorePokemonApi(pokemonList)
}

//Teams
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