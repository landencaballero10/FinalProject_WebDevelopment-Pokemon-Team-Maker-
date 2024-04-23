 import { GetGuestName } from "GuessName_Domain.js";

const guestName = GetGuestName();

const containerP = document.getElementById("containerP");

const h1_element = document.createElement("h1");
h1_element.textContent = `Hello ${guestName}, create your kanto pokemon list`;

containerP.appendChild(h1_element);
