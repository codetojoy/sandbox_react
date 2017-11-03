
import { INCREMENT_COUNT, REVERSE_CARDS, DEAL } from '../constants/actionTypes'

function incrementCount() {
    return { type: INCREMENT_COUNT }
}

function reverseCards() {
    return { type: REVERSE_CARDS }
}

function deal() {
    return { type: DEAL }
}

export {incrementCount, reverseCards, deal}

