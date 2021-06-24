import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationLinks() {
    const activeStyle = {
        color: "#FFF00E"
    }
    return (
        <div style={{flex:"2", display:"flex", gap:"2rem", fontSize:"1.25rem"}}>
                <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle} to="/personification">Profile</NavLink>
                <NavLink activeStyle={activeStyle} to="/releases">Releases</NavLink>
                <NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink>
                <NavLink activeStyle={activeStyle} to="/contact">Pricing</NavLink>
            </div>
    )
}

export default NavigationLinks
