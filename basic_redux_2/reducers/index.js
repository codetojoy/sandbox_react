
import { INCREMENT_COUNT, 
         REVERSE_CARDS, 
         DEAL } from '../constants/actionTypes'

const initialState = {
    count: 0,
    cards: [0,1,2,3,4,5,6,7,8,9],

    numCards: 24,
    numPlayers: 3,
    players: [
        {name: 'Beethoven', hand: [], numGamesWon: 0, numRoundsWon: 0},
        {name: 'Chopin', hand: [], numGamesWon: 0, numRoundsWon: 0},
        {name: 'Mozart', hand: [], numGamesWon: 0, numRoundsWon: 0}
    ],
    kitty: [],
    deck: []
} 

export default function reducer(state=initialState, action) {
    let newState = state

    if (action.type == INCREMENT_COUNT) {
        newState.count = state.count + 1
    } 

    if (action.type == REVERSE_CARDS) {
        newState.cards = state.cards.reverse()
    } 

    if (action.type == DEAL) {
        const players = state.players
        const numCards = state.numCards
        const hands = deal(players, numCards)
        newState.kitty = hands[0]

        for (let i = 0; i < players.length; i++) {
            const offsetIndex = i + 1
            newState.players[i].hand = hands[offsetIndex]
        }
    }

    return newState
}

function deal(players, numCards) {
    const deck = shuffle(createDeck(numCards)) 
    const numCardsInHand = getNumCardsInHand(numCards, players.length)
    const hands = dealHands(deck, numCardsInHand)
  
    return hands
}

function getNumCardsInHand(numCards, numPlayers) {
    return numCards / (numPlayers + 1)
}

function dealHands(array, numCardsInHand) {
    let hands = [];

    let i,j,temparray;

    for (i=0,j=array.length; i<j; i+= numCardsInHand) {
        temparray = array.slice(i,i+ numCardsInHand);
        hands.push(temparray);
    }

    return hands;
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function createDeck(numCards) {
    let deck = [];

    for (let i = 1; i <= numCards; i++) {
        deck.push(i);
    }

    return deck;
}

