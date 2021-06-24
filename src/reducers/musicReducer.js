import {musicDB} from "../db/musicdb"
export const initialState = {
    playing: null,
    playlist: musicDB
}

export const musicReducer = (state = initialState, action) => {
    switch(action.types){
        case "SET_CURR_PLAYING":
            return {
                ...state,
                playing: action.payload
            }
        default:return state
    }
}