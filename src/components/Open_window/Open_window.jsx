import React, { useEffect, useState } from "react";
import "./Open_window.css"
import point from "../../images/cursor.png";
import store from "../../store_img/store";

const Open_window = (props) => {

    const [name_bth, setName_bth] = useState('Next')
    const [index_img, setIndex_img] = useState(0);
    const [img_train, setImg_train] = useState(store[index_img]);
    let var_text = [
        'This is what the shooting range looks like. You have to aim at a moving target and shoot.',
        `You have 20 rounds for this. If you shoot them all, it's game over.` ,
        'You also have a limited amount of time per game. As soon as the time runs out - the game is over',
        `2 points will be given for hitting the monster's head, and 1 for the body.`
    ];

    const [describe_train, setDescribe_train] = useState(var_text[0]);
    const [isText_appear, setIsText_appear] = useState(false);
    const [isOpenTraining, setIsOpenTraining] = useState(false);

    useEffect(()=>{
        setIndex_img(index_img+1);
    },[])

    const next_photo = async() => {
        await setIsText_appear(false);
        setIndex_img(index_img+1);
        if(index_img<=3){
            console.log(index_img);
            await setImg_train(store[index_img]);
            await setDescribe_train(var_text[index_img]);
            if(index_img===3){
                setName_bth('Start playing');
            }
            setTimeout(() => {
                setIsText_appear(true);
            }, 1);
        }
        else{
            props.startGame();
        }
    }

    const openTraining = () =>{
        setIsOpenTraining(true);
        setIsText_appear(true);
        const gimn_audio = document.querySelector('.gimn');
        gimn_audio.play();
    }

    return (
        <div className={props.isCloseModal ? "open_window inactive" : "open_window"}>
            <div className="content">
                <h1 className="congratulation">
                    <img className="logo_1" src={point} alt="logo_photo"></img>
                    Welcome to our shooting range
                    <img className="logo_2" src={point} alt="logo_photo"></img>
                </h1>
                <h3>Would you like to review the training?</h3>
                <div className="btn_block">
                    <button className="btn_modal" onClick={openTraining}>Watching training</button>
                    <button className="btn_modal" onClick={props.startGame}>Start game</button>
                </div>
            </div>
            <div className={isOpenTraining ? "content content--trainer active" : "content content--trainer"}>
                <div className="block_train">
                    <div>
                        <img className={isText_appear ? "img_train active" : "img_train"} src={img_train} />
                    </div>
                    <p className={isText_appear ? "text_train active" : "text_train"}>{describe_train}</p>
                </div>
                <button className="btn_modal" onClick={next_photo}>{name_bth}</button>
            </div>
        </div>
    );
}

export default Open_window;