import React, { useState } from 'react'
import PlayerButton from '../PlayerButton/PlayerButton';
import {MdQueueMusic} from 'react-icons/md';
import {FiShare2, FiVolume2 } from 'react-icons/fi';

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/ree1.jpg`;

function PlayerExtra({styling, clickList}) {   
    return (
        <div className={styling[0]} >
            <div style={{width: "4vw", height:"2.5vw"}}>
                <span style={{display: "block", background: `url(${imgUrl}) no-repeat`, backgroundSize:"cover" , height:"100%", width:"100%"}}></span>
            </div>

            <div style={{width:"auto"}}>
                <p style={{whiteSpace:"nowrap", fontSize:"1.6vw"}}>song title if it's long nko .....</p>
                <p style={{color:"grey", fontSize:"1.45vw"}}>album title</p>
            </div>
            <div style={{display:"flex"}}>
                <PlayerButton styling={styling[1]}><FiShare2/></PlayerButton>
                <PlayerButton clickHandler={clickList} styling={styling[1]}><MdQueueMusic/></PlayerButton>
                <PlayerButton   styling={styling[1]}><FiVolume2/></PlayerButton>
            </div>
        </div>
    )
}

export default PlayerExtra
