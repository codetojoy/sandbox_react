
import React from 'react'

let TableWidget = ({players, kitty, deck, handleDealClick}) => (
    <div>
        players:
        <br/>
            {players.map( (p, key) =>
                <p>{p.name}&nbsp; 
                    hand: {p.hand.map( 
                            (c, k2) => <span key={k2}>{c}&nbsp;</span> 
                          )}
                </p> 
            )}
        kitty: 
            {kitty.map( (c, key) => 
                <span key={key}>{c}&nbsp;</span> 
            )}
        <br/> 
        <button onClick={handleDealClick}>Deal</button>
    </div>
)

export default TableWidget

