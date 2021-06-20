import React from 'react';
import styles from "./Intro.module.css";
const imgUrl = `${process.env.PUBLIC_URL}/assets/images/ree1.jpg`;
function Intro() {
    const backImage = {
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imgUrl})`,
        backgroundSize:"cover"
    }
    return (
        <div className={styles.Intro} style={backImage}>
            <div>
                <div>
                    <h1>Nothing <em>like</em> a trackout</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro
