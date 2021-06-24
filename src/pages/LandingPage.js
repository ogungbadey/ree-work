import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./css/LandingPage.module.css";
import {FiInstagram} from "react-icons/fi"
import {FaTwitter, FaSpotify,} from "react-icons/fa"
import {SiApplemusic} from "react-icons/si"
import Home from './Home';
function LandingPage() {
    const desktopImg = `${process.env.PUBLIC_URL}/assets/images/ree1.jpg`;
    const phoneImg = `${process.env.PUBLIC_URL}/assets/images/ree1_small.jpg`;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const imgUrl = windowWidth <= 650 ? phoneImg : desktopImg 
    const landingStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${imgUrl})`,
        backgroundSize:  "cover",
        backgroundRepeat: "no-repeat"
    }
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleWindowResize)
        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [])
    return (
        <section style={landingStyle} className={styles.LandingPage}> 
            <div className={styles.LandingNav}>
                <h2>Ree Fagbemi</h2>
            </div>
            <div className={styles.LandingRow}>
               <div>
               <div className={styles.IntroText}>
                    <h1>Nothing <em>like</em> a trackout</h1>
                    <Link to="/home" className={styles.LandingBtn}>Enter site</Link>
                </div>
                <div className={styles.Socials}>
                    <Link><FiInstagram/><em>Instagram</em></Link>
                    <Link><SiApplemusic/><em>Apple Music</em></Link>
                    <Link><FaSpotify/><em>Spotify</em></Link>
                    <Link><FaTwitter/><em>Twitter</em></Link>
                </div>
               </div>
            </div>
        </section>
    )
}

export default LandingPage
