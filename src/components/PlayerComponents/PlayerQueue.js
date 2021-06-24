import React from 'react'

function PlayerQueue({styling,show}) {
    return (
        show && <div className={styling}>
           <span>Song</span>
           <span>Song</span>
           <span>Song</span>
           <span>Song</span>
        </div>
    )
}

export default PlayerQueue
