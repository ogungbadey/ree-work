import React from 'react'
import { NavLink } from 'react-router-dom'
import Brand from './Brand'
import styles from "./css/Navigation.module.css"
import NavigationLinks from './NavigationLinks'
import SearchBar from './SearchBar'
function NavigationBar() {
    return (
        <nav className={styles.Navigation}>
            <Brand/>
            <SearchBar/>
            <NavigationLinks/>
        </nav>
    )
}

export default NavigationBar
