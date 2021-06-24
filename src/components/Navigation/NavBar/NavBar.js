import React, { useState } from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import styles from './NavBar.module.css'

function NavBar() {
    const [showDrawer, setShowDrawer] = useState(false)
    const toggleDrawer = () => {
        const prevState = showDrawer
        setShowDrawer(!prevState)
    }

    return (
        <nav className={styles.NavBar}>
            <SideDrawer clickHandler={toggleDrawer} show={showDrawer} styling={styles.SideDrawer}/>
            <div>
            <span onClick={toggleDrawer}>&#9776;</span>
            <h2>Ree Fagbemi</h2>
                <ul>
                    <li>personification</li>
                    <li>personification</li>
                    <li>personification</li>
                    <li>personification</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
