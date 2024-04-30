import { StoreGuessName, RecieveGuestName } from '../GetGuestNameWeb/GuessName_Service.js';

export const SetGuestName = (name) => {
    StoreGuessName(name);



}

export const GetGuestName = () => {
    return RecieveGuestName();
}