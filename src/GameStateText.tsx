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
                <div className='full-width-small-devices'>
                    <div id='game-status'>
                        <div className='div-8bit'>
                            {text.message}<br />{text.hint}
                        </div>
                    </div>
                </div>
                <div className='full-width-small-devices'>
                    <div id='score'>
                        <div className='div-8bit'>
                            {isGameEnded}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameStateText;