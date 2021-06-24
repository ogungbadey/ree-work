import React from 'react'
import { useSelector } from 'react-redux'
import FooterPlayer from '../components/FooterPlayer'
import HomeContainer from '../components/HomeContainer'
import NavigationBar from '../components/NavigationBar'
import styles from "./css/Home.module.css"

function Home() {
    const state = useSelector(state => state.state)
    console.log(state)
    return (
        <div className={styles.Home}>
            <NavigationBar/>
            <HomeContainer/>
            <FooterPlayer/>
        </div>
    )
}

export default Home
