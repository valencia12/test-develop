import React from 'react'
import { types } from "../types/types";


const initialState = {
    benevits: [],
    loaded: false, 
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.load_benevits:
            return { benevits: payload.benevits, loaded: true}
        default:
            return state
    }
}