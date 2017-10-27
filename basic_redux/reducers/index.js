
import { INCREMENT_COUNT, REVERSE_CARDS } from '../constants/actionTypes'

let initialState = {
    count: 0,
    cards: [0,1,2,3,4,5,6,7,8,9]
} 

export default function reducer(state=initialState, action) {
    let newState = state

    if (action.type == INCREMENT_COUNT) {
        newState.count = state.count + 1
    } 

    if (action.type == REVERSE_CARDS) {
        newState.cards = state.cards.reverse()
    } 

    return newState
}
