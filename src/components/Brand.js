import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

function Brand() {
    return (
        <div style={{flex:"1"}}>
            <Link to="/home">
                <h1 style={{color:"yellow", fontSize:"2.25rem"}}>Ree Fagbemi</h1>
            </Link>
        </div>
    )
}

export default Brand
