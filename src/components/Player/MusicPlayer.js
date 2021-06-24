import React, { useEffect, useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";
import {IoPauseOutline, IoPlayOutline, IoPlaySkipBackOutline, IoPlaySkipForwardOutline} from "react-icons/io5"
import {FiPlayCircle, FiPause, FiPlay} from "react-icons/fi"
import PlayerButton from "../PlayerComponents/PlayerButton/PlayerButton";
import PlayerTimeLine from "../PlayerComponents/PlayerTimeLine/PlayerTimeLine";
import PlayerControls from "../PlayerComponents/PlayerControls/PlayerControls";
import PlayerExtra from "../PlayerComponents/PlayerExtra/PlayerExtra";
import PlayerQueue from "../PlayerComponents/PlayerQueue";

function MusicPlayer({music}) {
    const songUrl = `${process.env.PUBLIC_URL}/assets/music/${music.title}`;

    const playerRef = useRef();
    const playerProgressRef = useRef();
    const animationRef = useRef();

    const [currentSong, setCurrentSong] = useState(0)

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState("0.00")
    const [showQueue, setShowQueue] = useState(false)
    
    const whilePlaying = () => {
        playerProgressRef.current.value = playerRef.current.currentTime;
        setCurrentTime(playerRef.current.currentTime);
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const togglePlayPause = () => {
        const prevState = isPlaying;
        setIsPlaying(!prevState);
        if(!prevState){
            playerRef.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        }else {
            playerRef.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
        
    }

   

    const toggleList = () => {
        console.log("clicked")
        const prevState = showQueue
        setShowQueue(!prevState)
    }

    const calcTime = secs => {
        const mins = Math.floor(secs/60) ;
        const serialisedMins = mins < 10 ? `0${mins}` : mins;
        const seconds = Math.floor(secs % 60);
        const serialisedSecs = seconds < 10 ? `0${seconds}` : seconds;
        return `${serialisedMins}:${serialisedSecs}`;
    }

    const onSeek = () => {
        playerRef.current.currentTime = playerProgressRef.current.value;
        setCurrentTime(playerProgressRef.current.value);
    }

    useEffect(() => {
        const seconds = Math.floor(playerRef.current.duration);
        setDuration(seconds);
        playerProgressRef.current.max = seconds;
        
    }, [playerRef?.current?.loadedmetadata, playerRef?.current?.readyState, currentSong])



    return (
        <div className={styles.Player}>
            <div className={styles.Wrapper}>
            <div className={styles.Content}>
            <audio ref={playerRef} src={`${process.env.PUBLIC_URL}/assets/music/${music.title}`} preload="metadata"></audio>
                <PlayerControls styling={styles.LeftControl}>
                <PlayerButton styling={styles.ForwardBackward}>
                    <IoPlaySkipBackOutline/>
                </PlayerButton>
                <PlayerButton styling={styles.PlayPause} clickHandler={togglePlayPause}>
                    {isPlaying ? <FiPause/> : <FiPlay/>}
                </PlayerButton>
                <PlayerButton styling={styles.ForwardBackward}>
                    <IoPlaySkipForwardOutline/>
                </PlayerButton>
                </PlayerControls>
                {/* current time */}
                <PlayerTimeLine 
                changeHandler={onSeek}
                progRef={playerProgressRef} 
                styling={styles.MiddleControl} 
                currentTime={currentTime ? calcTime(currentTime) : "0:00"} 
                duration={duration ? calcTime(duration): "0:00"}/>
                <PlayerExtra clickList={toggleList} styling={[styles.RightControl,styles.ExtraBtn, styles.PlayerQueue]}/>
                {/* <div>
                    <input type="range"/>
                </div> */}
                <PlayerQueue  styling={styles.PlayerQueue} show={showQueue}/>
            </div>
            </div>
        </div>
    );
}

export default MusicPlayer
