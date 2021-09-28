import { types } from "../types/types";


const initialState = {
    cards: {}, 
    loaded: false, 
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.load_cards:
            return { cards: payload.cards, loaded: true }
        default:
            return state
    }
}
