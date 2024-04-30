import { RecievePokemonInfo } from "./MoreAboutPokemon_Service.js";

var Pokemoninfo = RecievePokemonInfo()

export const GetPokemonType = () => {
    const pokemonType = Pokemoninfo.types;

    var types = [];

    for (var i = 0; i < pokemonType.length; i++)
    {
        types.push( pokemonType[i].type.name );
    }
    return types;

}

export const GetPokemonAbilities = () => {
    const pokemonAbilities = Pokemoninfo.abilities;

    var abilities = []

    for (var i = 0; i < pokemonAbilities.length; i++)
    {
        abilities.push(pokemonAbilities[i].ability.name);
    }
    
    return abilities;
}

export const GetPokemonMoves = () => {
    const pokemonMoves = Pokemoninfo.moves;

    var moves = [];

    var movesList = 1;

    if (pokemonMoves.length > 10)
    {
        movesList = 10;
    }
    else
    {
        movesList = pokemonMoves.length;
    }

    for (var i = 0; i < movesList; i++)
    {
        moves.push( pokemonMoves[i].move.name);
    }

    return moves;
}

export const GetPokemonSprite = () => {
    const pokemonfront = Pokemoninfo.sprites.front_default;

    const pokemonBack = Pokemoninfo.sprites.back_default;

    const sprites = [pokemonfront, pokemonBack];

    return sprites;
}

export const GetPokemonName = () => {
    return Pokemoninfo.name;
}
