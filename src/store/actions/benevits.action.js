import { types } from "../types/types";
export const loadBenevits = (benevits) =>{
    return {
        type: types.load_benevits,
        payload: {
            benevits: benevits
        }
    }
}