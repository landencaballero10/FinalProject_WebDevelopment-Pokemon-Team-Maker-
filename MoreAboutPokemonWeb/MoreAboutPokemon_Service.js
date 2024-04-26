const moreAboutPokemonKey = "PokeMonInfo";

export const RecievePokemonInfo = () => {
    const pokemonInfo = JSON.parse(localStorage.getItem(moreAboutPokemonKey));
    return pokemonInfo;
}