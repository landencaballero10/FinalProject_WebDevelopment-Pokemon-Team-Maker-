import { SetGuestName, GetGuestName } from '../GetGuestNameWeb/GuessName_Domain.js';

const RenderPageGuestWeb = () => {
    const formSection = document.getElementById("GuestInputSection");

    formSection.replaceChildren();

    const article_BackgroundYellow = document.createElement("article");

    const h1_AskForGuest = document.createElement("h1");
    h1_AskForGuest.textContent = `Hello, Guest! Please enter your name.`;
    article_BackgroundYellow.appendChild(h1_AskForGuest);

    const form_GuestInput = document.createElement("form");
    
    const input_Element = document.createElement("input");
    
    const button_Element = document.createElement("button");
    button_Element.textContent = "Submit";

    input_Element.Type = "text";
    form_GuestInput.appendChild(input_Element);
    form_GuestInput.appendChild(button_Element);
    form_GuestInput.addEventListener("submit", (event) => {
        var guestName = input_Element.value;
            event.preventDefault();
            SetGuestName(guestName);
            console.log(GetGuestName());
            window.location.href = "./teambuilder_Web";
            
    })

    
    article_BackgroundYellow.appendChild(form_GuestInput);
    formSection.appendChild(article_BackgroundYellow);

}




RenderPageGuestWeb();