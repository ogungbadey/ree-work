import React from 'react'

function PlayerControls({styling,children}) {
    return (
        <div className={styling}>
            {children}
        </div>
    )
}

export default PlayerControls
