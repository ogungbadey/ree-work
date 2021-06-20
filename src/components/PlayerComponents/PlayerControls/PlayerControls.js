import React from 'react'

function PlayerControls({children}) {
    return (
        <div style={{flex:"1", textAlign:"center", gap:".8rem"}}>
            {children}
        </div>
    )
}

export default PlayerControls
