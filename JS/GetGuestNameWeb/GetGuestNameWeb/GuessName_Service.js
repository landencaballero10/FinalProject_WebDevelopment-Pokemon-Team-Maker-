const guestNameKey = "GuestName";
export const StoreGuessName = (name) => {
    localStorage.setItem(guestNameKey, name);
}

export const RecieveGuestName = () => {
    return localStorage.getItem(guestNameKey);
}