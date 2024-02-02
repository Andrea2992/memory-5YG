import './GameStateText.css';
import './GameStateTextResponsive.css';
import { IRootState } from './redux/store';
import { useSelector } from 'react-redux';

function GameStateText() {
    const text = useSelector((state: IRootState) => state.gameStatus);
    const score = useSelector((state: IRootState) => state.gameScore.value);
    const scoreEndGame = `YOUR FINAL SCORE IS: ${score}`;
    const scoreOnGoing = `SCORE: ${score}`;
    const isGameEnded = text.message === 'YOU WIN!' ? scoreEndGame : scoreOnGoing;

    return (
        <>
            <div id='game-status-container'>
                <div id='game-status'>{text.message}<br />{text.hint}</div>
                <div id='score'>{isGameEnded}</div>
            </div>
        </>
    )
}

export default GameStateText;