 import { GetGuestName, GetPokemonList, ReturnPokemonApi, StorePokemonInfo, updateList, UpdateYourPokemonTeam, GetYourPokemonTeam  } from "./teambuilder_Domain.js";

var name = GetGuestName()

// console.log(name);

 var pokemonList = await GetPokemonList();
 console.log(pokemonList);


var yourTeamList = GetYourPokemonTeam();


// console.log(pokemonList)




const RenderPage = ( yourTeam, kantoPokemon ) => {
    RenderYourteam( yourTeam )
    RenderKantoPokemon( kantoPokemon )
}

const RenderYourteam = ( team ) => {
    
    const section_YourTeam = document.getElementById("yourTeam");
    
    section_YourTeam.replaceChildren();

    const article_YourTeambox = document.createElement("article");
    
    if (team != null) 
    {
        article_YourTeambox.replaceChildren();

        team.forEach( async (pokemon, count) => {
            if (count > 6) return;
            const pokemoninfo = await ReturnPokemonApi( pokemon );
            console.log(pokemoninfo)

            const div_yourPokemonCard = BuildCard(pokemoninfo);
            
    
            article_YourTeambox.appendChild(div_yourPokemonCard);
        })
    } 
    // else {
    //     for (var i = 0; i < 6; i++ )
    //     {
    //         const div_EmptyPokemonBox = document.createElement(div)
    //         div_EmptyPokemonBox = BuildCard(team);
    //         teamBox.appendChild(div_EmptyPokemonBox);
    //     }
    // }

    article_YourTeambox.addEventListener("dragover", (event)=> {
        event.preventDefault();
    })

    article_YourTeambox.addEventListener("drop", (event) => {
        event.preventDefault();
        const pokemonName = event.dataTransfer.getData('text/plain');
        
        AddItemTeam(FilterPokemonList(pokemonName));
        console.log(pokemonName);
        console.log(yourTeamList)
        console.log("Younr team:")
        yourTeamList.forEach((pokemon) =>{
            console.log(pokemon.name);
        })
        UpdateYourPokemonTeam(yourTeamList);

        Removeitem(FilterPokemonList(pokemonName));
        updateList(pokemonList);
        console.log(pokemonList);

        RenderPage(yourTeamList, pokemonList);
    })

    section_YourTeam.appendChild(article_YourTeambox);

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
            console.log(pokemoninfo)
        const div_PokemonCard = BuildCard(pokemoninfo);

        article_Pokeboxes.appendChild(div_PokemonCard);

    })

    article_Pokeboxes.appendChild(form_SearchPokemon);
    section_PokemonBox.appendChild(article_Pokeboxes);

}

const BuildCard = ( pokemon ) => {
    const div_pokemonBox = document.createElement("div");

    console.log(pokemon);
    
    const image_PokemonImage = document.createElement("img");
    
    div_pokemonBox.draggable = true;
    image_PokemonImage.src = pokemon.sprites.front_default;
    
    // const h1_imageCaption = document.createElement('h2');
    // h1_imageCaption.textContent = `${pokemon.name}`;
    console.log(pokemon.name)
    // div_pokemonBox.appendChild(h1_imageCaption);
    div_pokemonBox.appendChild(image_PokemonImage);
    
    div_pokemonBox.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData('text/plain', pokemon.name )
        console.log("dragStart transfer started");
    } );

    div_pokemonBox.addEventListener("dragover", (event) => {
        event.preventDefault();
    })

    div_pokemonBox.addEventListener("drop", (event) => {
        event.preventDefault();
        const pokemonName = event.dataTransfer.getData('text/plain');
        console.log(`This Pokemon has been transfered: ${pokemonName}`);
    } )


    div_pokemonBox.addEventListener("dblclick", () => {
       console.log("double click has been activated")
       StorePokemonInfo(pokemon)
        window.location.href = "../MoreAboutPokemonWeb/MoreAboutPokemon.html";

    })




    return div_pokemonBox
}


const FilterPokemonList = (nameInput) => {
    const pokemon = pokemonList.filter((value) => {
        return value.name.includes(nameInput.toLowerCase());
    
    })

    console.log(pokemon[0]);
    return pokemon[0];
}

const Removeitem = (item) => {
    var index = -1;
    pokemonList.forEach((pokemon, count) => {
        if (pokemon.name == item.name)
        {
            index = count;
        }

    }) 
    
    if (index != -1) {
        pokemonList.splice(index, 1);
    } 
    else{
        console.log("cant find item. Not removed.")
    }
}

const AddItem = ( pokemonInfo ) => {

    const newList = [...yourTeamList,pokemonInfo];
    yourTeamList = [...new Set(newList)];
    console.log(yourTeamList);

    //yourTeamList.push(mapInfo)
}

const LoadData = () => {
    pokemonList = GetPokemonList();
    yourTeamList = GetYourPokemonTeam();
}


LoadData();
RenderPage( yourTeamList, pokemonList)


// const filterlit = listofproducts.filter((product) => {
//     return product.title.tolocalelowercase().includes(filteredTitle.toLowerCase);
// })