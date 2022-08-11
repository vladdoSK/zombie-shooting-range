import React, { useState } from "react";
import "./Finish_game.css"
import congratulation from '../../images/congratulation.gif'

const Finish_game = (props) => {

    const fin_audio = document.querySelector('.finish_audio');

            
    const stop_music = () => {
        fin_audio.pause();
        fin_audio.currentTime = 0;
    }

    return (

        <div className={props.isFinishGame ? "open_window" : "open_window inactive"}>
            <div className="content" onClick={stop_music}>
                <img className="salute" src={congratulation} alt="photo"/>
                <h1 className="cong">Congratulation</h1>
                <p className="cong">{props.isRecord}</p>

                <button className="btn_modal" onClick={props.startGame}>Play again</button>
            </div>
        </div>
    );
}

export default Finish_game;