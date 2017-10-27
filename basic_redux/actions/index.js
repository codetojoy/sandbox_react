
import { INCREMENT_COUNT, REVERSE_CARDS } from '../constants/actionTypes'

function incrementCount() {
    return {
        type: INCREMENT_COUNT
    }
}

function reverseCards() {
    return {
        type: REVERSE_CARDS
    }
}

export {incrementCount, reverseCards}

