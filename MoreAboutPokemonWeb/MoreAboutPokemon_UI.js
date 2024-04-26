import { GetPokemonType, GetPokemonAbilities, GetPokemonMoves, GetPokemonSprite, GetPokemonName } from "./MoreAboutPokemon_Domain.js";

const pokemonSprites = GetPokemonSprite();

const pokemonType = GetPokemonType();
// console.log(pokemonType)

const pokemonAbilities = GetPokemonAbilities();
// console.log(pokemonAbilities);

const pokemonMoves = GetPokemonMoves();
console.log(pokemonMoves)

const pokemonName = GetPokemonName()

const RenderInfoPage = () => {
    const section_PokemonInfo = document.getElementById("InfoContainer");

    section_PokemonInfo.replaceChildren()

    
    const figure_imageContainer = document.createElement("figure");
    
    const img_PokemonSprite = document.createElement("img");
    img_PokemonSprite.src = pokemonSprites[0];
    img_PokemonSprite.alt = `A picture of ${pokemonName}.`;
    figure_imageContainer.appendChild(img_PokemonSprite);
    
    
    const article_firstGroup = document.createElement("article");
    const article_secondGroup = document.createElement("article");

    const div_Type = document.createElement("div");
    const h2_pokeName = document.createElement("h2");
    h2_pokeName.textContent = `Name: ${pokemonName}`;
    const p_Type = document.createElement("p");
    p_Type.textContent = `Type: ${pokemonType}`;
    div_Type.appendChild(h2_pokeName);
    div_Type.appendChild(p_Type);


    const div_Moves = document.createElement("div");
    const p_moves = document.createElement("p");
    p_moves.textContent = "Moves: "
    const ul_MovesList = document.createElement("ul");
    pokemonMoves.forEach((move) => {
        const li_move = document.createElement("li");
        li_move.textContent = `${move}`;
        ul_MovesList.appendChild(li_move);
    })
    div_Moves.appendChild(p_moves);
    div_Moves.appendChild(ul_MovesList);

    const div_Abilities = document.createElement("div");
    const p_abilities = document.createElement("p");
    p_abilities.textContent = `Abilities: ${pokemonAbilities}`;
    div_Abilities.appendChild(p_abilities);
    
    article_firstGroup.appendChild(div_Type);
    article_firstGroup.appendChild(div_Moves);
    article_firstGroup.appendChild(div_Abilities);

    section_PokemonInfo.appendChild(figure_imageContainer);
    section_PokemonInfo.appendChild(article_firstGroup);
}

RenderInfoPage()