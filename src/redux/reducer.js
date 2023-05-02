import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./action-type";

export const initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, payload],
                allCharactersFav: [...state.allCharactersFav, payload]
            }
        
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== Number(payload))
            }
        
        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter((character) => { return character.gender === payload })
            return {
                ...state,
                myFavorites: allCharactersFiltered
            }         
        
        case ORDER:
            const allCharactersFavCopy = state.allCharactersFav.sort((a, b) => {
                if (payload === 'A') {
                    if (a.id < b.id) return -1;
                    if (b.id < a.id) return 1;
                    return 0;
                }
                else {
                    if (a.id < b.id) return 1;
                    if (b.id < a.id) return -1;
                    return 0;
                }
            })
            return allCharactersFavCopy;
            // return {
            //     ...state,
            //     myFavorites: 
            //             payload === 'A'
            //             ? allCharactersFavCopy.sort((a, b) => { a.id - b.id }) 
            //             : allCharactersFavCopy.sort((a, b) => { b.id - a.id })
            // }
        default:
            return { ...state };
    }
}

export default reducer;