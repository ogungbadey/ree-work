import React from 'react'

function PlayerButton({children,clickHandler,styling}) {
    return (
        <button className={styling} onClick={clickHandler}>{children}</button>
    )
}

export default PlayerButton
