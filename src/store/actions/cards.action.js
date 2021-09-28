import { types } from "../types/types";

export const loadCards = (cards) => {
    return {
        type: types.load_cards,
        payload: {
            cards: cards
        }
    }
}