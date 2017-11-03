
import React from 'react'

let CountWidget = ({count, handleClick}) => (
    <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Go</button>
    </div>
)

export default CountWidget

