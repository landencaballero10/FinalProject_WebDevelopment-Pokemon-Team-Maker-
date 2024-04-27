 import { GetGuestName, GetPokemonList, ReturnPokemonApi, StorePokemonInfo  } from "./teambuilder_Domain.js";

var name = GetGuestName()

// console.log(name);

 var pokemonList = await GetPokemonList();


var yourTeamList;


// console.log(pokemonList)




const RenderPage = ( yourTeam, kantoPokemon ) => {
    RenderYourteam( yourTeam )
    RenderKantoPokemon( kantoPokemon )
}

const RenderYourteam = ( team ) => {
    
    const teamBox = document.getElementById("yourTeamBox");
    
    teamBox.replaceChildren();

    const div_pokebox = document.createElement("div");
    
    if (yourTeamList != null) 
    {
        team.forEach((pokemon) => {
            const pokemoninfo = ReturnPokemonApi( pokemon );
            // console.log(pokemoninfo)
    
        })
    }


    

}

const RenderKantoPokemon = ( kantoPokemon ) => {
    const section_PokemonBox = document.getElementById("findPokemon")

    section_PokemonBox.replaceChildren();

    const form_SearchPokemon = document.createElement("form");
    
    const input_Search = document.createElement("input");

    const button_Submit = document.createElement("button");

    button_Submit.addEventListener("submit", (event) => {
        event.preventDefault();
        // if (input_Search.value != null) {
        //     kantoPokemon = copiedPokemonList;
        // }
        console.log("Event has fired..")
        const searchedPokemon = pokemonList.filter((pokemon)=> {
            return pokemon.name == input_Search.value.toLowerCase();
            
        })
        console.log(searchedPokemon);


        RenderKantoPokemon(searchedPokemon);
    })

    form_SearchPokemon.appendChild(button_Submit);
    form_SearchPokemon.appendChild(input_Search);

    const article_Pokeboxes = document.createElement("article");

    kantoPokemon.forEach(async ( pokemon  ) => {
        const pokemoninfo = await ReturnPokemonApi( pokemon );
            // console.log(pokemoninfo.moves)
        const div_PokemonCard = BuildCard(pokemoninfo);

        article_Pokeboxes.appendChild(div_PokemonCard);

    })

    article_Pokeboxes.appendChild(form_SearchPokemon);
    section_PokemonBox.appendChild(article_Pokeboxes);

}

const BuildCard = ( pokemon ) => {
    const div_pokemonBox = document.createElement("div");

    div_pokemonBox.draggable = true;
    
    const image_PokemonImage = document.createElement("img");
    
    image_PokemonImage.src = pokemon.sprites.front_default;

    // const h1_imageCaption = document.createElement('h2');
    // h1_imageCaption.textContent = `${pokemon.name}`;

    // div_pokemonBox.appendChild(h1_imageCaption);
    div_pokemonBox.appendChild(image_PokemonImage);

    div_pokemonBox.addEventListener("dblclick", () => {
       console.log("double click has been activated")
       StorePokemonInfo(pokemon)
        window.location.href = "../MoreAboutPokemonWeb/MoreAboutPokemon.html";

    })
    return div_pokemonBox
}


RenderPage( yourTeamList, pokemonList)
