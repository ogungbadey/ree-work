import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import styles from "./css/HomeContainer.module.css";
import { setCurrentPlaying } from '../actions/actions';
function HomeContainer() {
    const dispatch = useDispatch();
    const {playlist} = useSelector(state => state.musicReducer)
    console.log(playlist)
    const handleClick = (music) => {
        console.log(music)
        // dispatch(setCurrentPlaying())
    }
    return (
        <div className={styles.Container}>
            <ul>
                {playlist.map(music => <li onClick={() => handleClick(music)} key={music.id}>{music.title}</li>)}
            </ul>
        </div>
    )
}

export default HomeContainer
