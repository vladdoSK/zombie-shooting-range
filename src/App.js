import { useState, useEffect } from 'react';
import './App.css';
import Aliens from './components/Aliens/Aliens';
import Open_window from './components/Open_window/Open_window';
import Shot from './components/Shot/Shot';
import Zombies from './components/Zombies/Zombies';
import clocks from './music/clock_tak.mp3';
import shot_1 from './music/shot.mp3';
import start_music from './music/start_music.mp3';
import finish_audio from './music/finish.mp3';
import gimn from './music/gimn.mp3';
import Finish_game from './components/Finish_game/Finish_game';
import { useDispatch, useSelector } from 'react-redux';
import { default_shots, delete_point, new_record, remove_shot } from './redux/actionCreators';


function App() {

  const dispatch = useDispatch();
  const point_redux = useSelector(state => state.point_r);
  const record_redux = useSelector(state => state.record_r);
  const shot_redux = useSelector(state => state.shot_r);

  
  const [timeId, setTimeId] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10);
  const [stringTime, setstringTime] = useState(`00:${timeLeft}`);
  const [redTime, setRedTIme] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isCloseModal, setIsModalWindow] = useState(false);
  const [isFinishGame, setIsFinishGame] = useState(false);

  const [isRecord, setIsRecord] = useState("");

  const music = document.querySelector('.audio');
  const clock = document.querySelector('.clock');
  const fin_audio = document.querySelector('.finish_audio');

  var shot = new Audio(shot_1);

  //localStorage.clear();

  const isEndGame = async () => {
    if ((shot_redux.length == 0) || (timeLeft == 0)) {
      music.pause();
      music.currentTime = 0;
      setTimeLeft(0);
      setIsStart(false);
      clock.pause();
      clock.currentTime = 0;
      setTimeout(() => {
        fin_audio.play();
      }, 500);
      setIsFinishGame(true);


      console.log(point_redux, record_redux);

      if (point_redux > record_redux) {

        await setIsRecord("You beat your record :)");
        localStorage.setItem('record', point_redux);
        console.log(parseInt(localStorage.getItem('record')));
        dispatch(new_record(parseInt(localStorage.getItem('record'))));

      }
      else {
        setIsRecord("But you don't beat your record :(");
      }
    }
  }

  const missShot = async () => {
    dispatch(remove_shot(1));
    shot.play();
    isEndGame();
  }

  useEffect(() => {
    if (timeLeft < 10) {
      setstringTime(`00:0${timeLeft}`);
      setRedTIme(true);
      clock.play();
    }
    else {
      setstringTime(`00:${timeLeft}`);
    }

    isEndGame();
  }, [timeLeft])


  const startGame = async () => {
    let rec = localStorage.getItem('record');
    if(rec==null)
    {
      localStorage.setItem('record', 0);
    }

    dispatch(new_record(localStorage.getItem('record')))
    
    setRedTIme(false);
    setIsModalWindow(true);
    setTimeLeft(30);

    dispatch(default_shots(1));

    const music = document.querySelector('.audio');
    music.play();
    setIsStart(true);
    setIsFinishGame(false);

    const gimn_audio = document.querySelector('.gimn');
    gimn_audio.pause();
    gimn_audio.currentTime = 0;
    
    dispatch(delete_point(point_redux));

    if (timeId == true) {
      setInterval(async () => {
        await setTimeLeft((timeLeft) => (timeLeft >= 1 ? (timeLeft - 1) : 0));
      }, 1000);
    }
    await setTimeId(false);
  }

  return (
    <div className="App" >

      <Open_window startGame={startGame}
        isCloseModal={isCloseModal}
        setIsModalWindow={setIsModalWindow} />

      <audio className='audio' src={start_music}></audio>
      <audio className='clock' src={clocks}></audio>
      <audio className="finish_audio" src={finish_audio}></audio>
      <audio className="gimn" src={gimn}></audio>

      <div className='block_game' onClick={missShot}>

        <Aliens isStart={isStart}
          patron={shot_redux}/>

        <Zombies isStart={isStart}
          patron={shot_redux}/>
      </div>

      <div className='table_info'>

        <div className='block_score'>
          <h1>Time left</h1>
          <p className={redTime == true ? 'time active' : 'time'}>{stringTime}</p>
        </div>

        <div className='block_score'>
          <h1>Your score</h1>
          <p>{point_redux}</p>
        </div>
        <div className='block_score'>
          <h1 className='record'>Your record</h1>
          <p className='record'>{record_redux}</p>
        </div>

        <Shot patron={shot_redux} />
      </div>

      <Finish_game isFinishGame={isFinishGame}
        isRecord={isRecord}
        startGame={startGame} />

    </div>
  );
}

export default App;
