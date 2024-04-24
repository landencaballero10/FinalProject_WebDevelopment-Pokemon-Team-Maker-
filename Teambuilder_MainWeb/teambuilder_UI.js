 import { GetGuestName, GetPokemonList  } from "./teambuilder_Domain.js";

var pokemonList = await GetPokemonList();

console.log(pokemonList)
console.log(pokemonList.
    results
    )
const guestName = GetGuestName();

const containerP = document.getElementById("containerP");

const h1_element = document.createElement("h1");
h1_element.textContent = `Hello ${guestName}, create your kanto pokemon list`;

containerP.appendChild(h1_element)
