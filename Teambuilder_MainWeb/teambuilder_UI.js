 import { GetGuestName, GetPokemonList, ReturnPokemonApi, StorePokemonInfo, updateList as UpdatePokemonList, UpdateYourPokemonTeam, GetYourPokemonTeam  } from "./teambuilder_Domain.js";

var name = GetGuestName()

// console.log(name);

 var pokemonList = await GetPokemonList();
//  console.log(pokemonList);


var yourTeamList = await GetYourPokemonTeam();

console.log(yourTeamList);

// console.log(pokemonList)




const RenderPage = ( yourTeam, kantoPokemon ) => {
    RenderYourteam( yourTeam )
    RenderKantoPokemon( kantoPokemon )
}

const RenderYourteam =  async ( team ) => { 
    
    const section_YourTeam = document.getElementById("yourTeam");
    
    section_YourTeam.replaceChildren();

    const article_YourTeambox = document.createElement("article");

    var pokemonCantBeinTeam = [];
    
    if (team != null) 
    {
        article_YourTeambox.replaceChildren();
         for (var index = 0; index < team.length; index++  )
        {
            const item = team[index];
            const pokemoninfo =  await ReturnPokemonApi( item );
            // console.log(pokemoninfo)
            
            const div_yourPokemonCard = BuildCard(pokemoninfo);
            
            if (index > 5)
            {
                pokemonCantBeinTeam.push(item);
                
                
                // AddPokemonList(team[i]);
                // updateList(pokemonList);
                
                // UpdateYourPokemonTeam(yourTeamList);
    
                // RenderPage(yourTeam, pokemonList);
            }
    
             article_YourTeambox.appendChild(div_yourPokemonCard);
        }
        // team.forEach( async (item, index) => {
        //     const pokemoninfo =  await ReturnPokemonApi( item );
        //     // console.log(pokemoninfo)
            
        //     const div_yourPokemonCard = BuildCard(pokemoninfo);
            
        //     if (index >= 6)
        //     {
        //         pokemonCantBeinTeam.push(item);
                
                
        //         // AddPokemonList(team[i]);
        //         // updateList(pokemonList);
                
        //         // UpdateYourPokemonTeam(yourTeamList);
    
        //         // RenderPage(yourTeam, pokemonList);
        //     }
    
        //     article_YourTeambox.appendChild(div_yourPokemonCard);
            
            
        // })

        console.log(`pokemon cant be in team`, [...pokemonCantBeinTeam]);
        pokemonCantBeinTeam.forEach((item) => {
            const index = yourTeamList.indexOf(item)
            console.log(`Removing item at `, index)
            yourTeamList.splice(index, 1);

            UpdateYourPokemonTeam( yourTeamList );
        })


    }
    
    const MakePokemonDiv = async ( item ) => {
        const pokemoninfo =  await ReturnPokemonApi( item );
                console.log(pokemoninfo)
    
                const div_yourPokemonCard = BuildCard(pokemoninfo);
                
        
                return div_yourPokemonCard;
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
        event.stopImmediatePropagation();
        const pokemonName = event.dataTransfer.getData('text/plain');
        
        AddItemTeam(FilterPokemonList(pokemonName));
        // console.log(pokemonName);
        // console.log(yourTeamList)
        // console.log("Younr team:")
        // yourTeamList.forEach((pokemon) =>{
        console.log(pokemon.name);
        // })
        UpdateYourPokemonTeam(yourTeamList);

        RemoveItemPokemonList(FilterPokemonList(pokemonName));
        UpdatePokemonList(pokemonList);
        console.log(pokemonList);

        RenderPage(yourTeamList, pokemonList);
    })

    section_YourTeam.appendChild(article_YourTeambox);
}

const RenderKantoPokemon = ( kantoPokemon ) => {
    const section_PokemonBox = document.getElementById("findPokemon")

    section_PokemonBox.replaceChildren();

    section_PokemonBox.addEventListener("dragover", (event) =>{
        event.preventDefault();
    })

    section_PokemonBox.addEventListener("drop", (event) => {
        event.preventDefault()
        event.stopImmediatePropagation();
        const pokemonName = event.dataTransfer.getData('text/plain')
        console.log(`transerferred pokemon ${pokemonName}`);

        RemoveItemPokemonList(FilterYourTeamList(pokemonName));
        AddPokemonList(FilterYourTeamList(pokemonName));

        UpdatePokemonList(pokemonList);
        
    })

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
            // console.log(pokemoninfo)
        const div_PokemonCard = BuildCard(pokemoninfo);

        article_Pokeboxes.appendChild(div_PokemonCard);

    })

    article_Pokeboxes.appendChild(form_SearchPokemon);
    section_PokemonBox.appendChild(article_Pokeboxes);

}

const BuildCard = ( pokemon ) => {
    const div_pokemonBox = document.createElement("div");

    // console.log(pokemon);
    
    const image_PokemonImage = document.createElement("img");
    
    div_pokemonBox.draggable = true;
    image_PokemonImage.src = pokemon.sprites.front_default;
    
    // const h1_imageCaption = document.createElement('h2');
    // h1_imageCaption.textContent = `${pokemon.name}`;
    // console.log(pokemon.name)
    // div_pokemonBox.appendChild(h1_imageCaption);
    div_pokemonBox.appendChild(image_PokemonImage);
    
    div_pokemonBox.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData('text/plain', pokemon.name )
        console.log("dragStart transfer started");
    } );

    // div_pokemonBox.addEventListener("dragover", (event) => {
    //     event.preventDefault();
    // })

    // div_pokemonBox.addEventListener("drop", (event) => {
    //     event.preventDefault();
    //     const pokemonName = event.dataTransfer.getData('text/plain');
    //     console.log(`This Pokemon has been transfered: ${pokemonName}`);
    // } )


    div_pokemonBox.addEventListener("dblclick", () => {
       console.log("double click has been activated")
       StorePokemonInfo(pokemon)
        window.location.href = "../MoreAboutPokemonWeb/MoreAboutPokemon.html";

    })




    return div_pokemonBox
}

const FilterYourTeamList = ( nameInput ) => {
    const pokemon = yourTeamList.filter((value) => {
        return value.name.includes(nameInput.toLowerCase());
    })

    console.log(pokemon[0]);

    return pokemon[0];
}
const FilterPokemonList = (nameInput) => {
    const pokemon = pokemonList.filter((value) => {
        return value.name.includes(nameInput.toLowerCase());
    
    })

    console.log(pokemon[0]);
    return pokemon[0];
}

const RemoveItemYourList = (item) => {
    var index = yourTeamList.indexOf(item);

    if (index !== -1)
    {
        yourTeamList.splice(index,1);
    }
    else {
        console.log("cant find item.")
    }
}

const IsPokemonInList = ( pokemon, list) => {
    const findItem = list.find((item) => {
        return item === pokemon;
    })
    if (findItem === pokemon) return true;
}   

const ItemRemovedYourTeam = ( item ) => {
    if (!IsPokemonInList(item, yourTeamList))
    {
        const index = yourTeamList.indexOf(item);

    }
    else console.log ("couldnt find item");
}

const AddItemTeam = ( pokemonInfo ) => {
    const newList = [...yourTeamList,pokemonInfo];
    yourTeamList = [...new Set(newList)];
    console.log(yourTeamList);

    //yourTeamList.push(mapInfo)
}

const AddPokemonList = ( item ) => {
    if (!IsPokemonInList(item, pokemonList))
    {
        pokemonList.push(item);
    }
    else console.log("already inList")
}

const RemoveItemPokemonList = ( item ) => {
    if (IsPokemonInList(item, pokemonList)){
        var index = -1;
        pokemonList.forEach((pokemon, count) => {
            if (pokemon.name == item.name)
            {
                index = count;
            }
    
        }) 
        if (index !== -1) {
            pokemonList.splice(index, 1);
        } 
    }
    else{
        console.log("cant find item. Not removed.")
    }
}


RenderPage( yourTeamList, pokemonList)


// const filterlit = listofproducts.filter((product) => {
//     return product.title.tolocalelowercase().includes(filteredTitle.toLowerCase);
// })