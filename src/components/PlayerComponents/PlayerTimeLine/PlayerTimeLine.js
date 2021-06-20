import React from 'react'

function PlayerTimeLine({changeHandler, progRef, styling,currentTime, duration}) {
    return (
        <div className={styling} style={{}}>
            <div>{currentTime}</div>
            <input ref={progRef} type="range" min="1" max="100" defaultValue="0" onChange={changeHandler}/>
            <div>{duration}</div>
        </div>
    )
}

export default PlayerTimeLine
