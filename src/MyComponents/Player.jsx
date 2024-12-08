
import "./player.css";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Music_player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(50); 

  const togglePlayPause = () => {
    console.log("Button clicked");
    setIsPlaying((prev) => !prev);
    console.log(isPlaying);
  };

  useEffect(() => {
    // This effect is triggered when `isPlaying` changes.
    const diskImage = document.querySelector(".playerButton img");

    if (isPlaying) {
      diskImage.style.animationPlayState = "running";
    } else {
      diskImage.style.animationPlayState = "paused";
    }
  }, [isPlaying]); //dependecy

  return (
    <>
      <div className="playerContainer">
        <div className="playerButton">
          <img
            src="Muffle/src/assets/Disk.png"
          />
        </div>
        <div className="song_title">
          <h2>Song Title</h2>
        </div>
        <div className="progressBarContainer">
          <div className="progress-bar" 
          style={{ width: `${progress}%` }}>
          </div>
        </div>
        <div className="playerControl">
          <button className="back">
            <IoPlaySkipBackSharp />
          </button>
          <button className="play_pause" onClick={togglePlayPause}>
            {isPlaying ? <TbPlayerPauseFilled /> : <FaPlay />}
          </button>
          <button className="forward">
            <IoPlaySkipForwardSharp />
          </button>
        </div>
      </div>
    </>
  );
}
