
import React from 'react'

let CardsWidget = ({cards, handleClick}) => (
    <div>
        <p>cards: {cards}</p>
        <button onClick={handleClick}>Reverse cards</button>
    </div>
)

export default CardsWidget

