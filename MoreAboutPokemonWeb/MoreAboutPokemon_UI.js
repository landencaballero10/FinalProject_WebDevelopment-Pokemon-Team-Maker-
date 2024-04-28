import { GetPokemonType, GetPokemonAbilities, GetPokemonMoves, GetPokemonSprite, GetPokemonName } from "./MoreAboutPokemon_Domain.js";

const pokemonSprites = GetPokemonSprite();

const pokemonType = GetPokemonType();
// console.log(pokemonType)

const pokemonAbilities = GetPokemonAbilities();
// console.log(pokemonAbilities);

const pokemonMoves = GetPokemonMoves();

const pokemonName = GetPokemonName()


const RenderInfoPage = () => {
    const section_PokemonInfo = document.getElementById("InfoContainer");

    section_PokemonInfo.replaceChildren()

    
    const figure_imageContainer = document.createElement("figure");
    
    const img_PokemonSprite = document.createElement("img");
    img_PokemonSprite.src = pokemonSprites[0];
    img_PokemonSprite.alt = `A picture of ${pokemonName}.`;
    figure_imageContainer.appendChild(img_PokemonSprite);
    
    
    const article_InfoGroup = document.createElement("article");
    const article_PictureGroup = document.createElement("article");

    const div_pokeName = document.createElement("div")
    const h2_pokeName = document.createElement("h2");
    h2_pokeName.textContent = `Name: ${pokemonName}`;
    div_pokeName.appendChild(h2_pokeName);

    const div_Type = document.createElement("div");
    const p_Type = document.createElement("p");
    p_Type.textContent = `Type: ${pokemonType}`;
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
    
    article_InfoGroup.appendChild(div_pokeName)
    article_InfoGroup.appendChild(div_Type);
    article_InfoGroup.appendChild(div_Moves);
    article_InfoGroup.appendChild(div_Abilities);
    article_InfoGroup.id = "Information"
    article_PictureGroup.appendChild(figure_imageContainer);
    article_PictureGroup.id = "picture"

    const button_GoBackbutton = document.getElementById("goback");
    button_GoBackbutton.textContent = "Go Back"
    button_GoBackbutton.addEventListener("click", () => {
        window.location.href = '../Teambuilder_MainWeb/teambuilder_Web.html';
    })


    section_PokemonInfo.appendChild(article_PictureGroup);
    section_PokemonInfo.appendChild(article_InfoGroup);
}

RenderInfoPage()