import './App.css';
import './AppResponsive.css';
import CardsVisualizer from './CardsVisualizer';
import GameStateText from './GameStateText';
import Header from './Header';
import { useSelector } from 'react-redux';
import { IRootState } from './redux/store';


function App() {

  const classPainter = useSelector((state: IRootState) => state.gameStatus.message);
  function classSelector(message: string) {
    if (message === 'YOU WIN!') {
      return 'content-container-win'
    } else {
      return ''
    }
  };

  return (
    <>
      <Header />
      <div className={classSelector(classPainter)} id='content-container'>
        <CardsVisualizer />
        <GameStateText />
      </div>
    </>
  );
}

export default App;
