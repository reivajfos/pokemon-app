


const localFavorites = (id: number) => {
    console.log("toggleFavorite Llamado");

    let favorite: number[] = JSON.parse(localStorage.getItem("favorites") || '[]');


    if (favorite.includes(id)) {

        favorite = favorite.filter(pokeID => pokeID !== id);
    } else {
        favorite.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorite));



}

const existInFavorite = (id: number): boolean => {
    if (typeof window === 'undefined') return false;
    const favorite: number[] = JSON.parse(localStorage.getItem("favorites") || '[]');
    return favorite.includes(id);



}

const pokemons = (): number[] => {

    return JSON.parse(localStorage.getItem("favorites") || '[]');

}

export default {
    localFavorites, existInFavorite,pokemons
} 