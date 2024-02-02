import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
import { MemoryGame } from './memory-game/MemoryGame';
import { updateCards } from './redux/memoryCardsSlice';
import { updateText } from './redux/gameStateTextSLice';
import { decreaseScore, increaseScore } from './redux/scoreSlice';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const memoryGame = new MemoryGame();

store.subscribe(() => {
  const state = store.getState();
  const memoryCardList = state.memoryCardList.value;
  const gameStatus = memoryGame.gameStatus(memoryCardList);
  function updateCardsTimer() {
    store.dispatch(updateCards(gameStatus.updatedMemoryCards));
    store.dispatch(updateText({hint: 'choose one card', message: gameStateToText}));
    store.dispatch(decreaseScore());
    const memoryCardDiv: NodeListOf<HTMLElement> = document.querySelectorAll('.single-card-container')!;
    memoryCardDiv.forEach(e => e.style.pointerEvents = 'auto');
  };
  const gameStateToText = gameStatus.type.replaceAll('_', ' ');
  const actualMessage = store.getState().gameStatus.message;
  const isNotRightOrWrong = actualMessage !== 'RIGHT ANSWER' && actualMessage !== 'WRONG ANSWER';
  const isNotChooseOneOrNewGame = actualMessage !== 'CHOOSE ONE CARD' && actualMessage !== 'STARTED NEW GAME!';
  if (gameStatus.type === 'end_of_game' && actualMessage !== 'YOU WIN!') {
    store.dispatch(updateText({ hint: '', message: 'you win!' }))
  };
  if (gameStatus.type === 'choose_one_card' && isNotChooseOneOrNewGame && isNotRightOrWrong) {
    store.dispatch(updateText({ hint: '', message: gameStateToText }))
  };
  if (gameStatus.type === 'choose_one_more' && actualMessage !== 'CHOOSE ONE MORE') {
    store.dispatch(updateText({ hint: '', message: gameStateToText }))
  };
  if (gameStatus.type === 'right_answer') {
    store.dispatch(updateCards(gameStatus.updatedMemoryCards));
    store.dispatch(updateText({hint: 'choose one card', message: gameStateToText}));
    store.dispatch(increaseScore());
  };
  if (gameStatus.type === 'wrong_answer') {
    const memoryCardDiv: NodeListOf<HTMLElement> = document.querySelectorAll('.single-card-container')!;
    memoryCardDiv.forEach(e => e.style.pointerEvents = 'none')
    setTimeout(updateCardsTimer, 800);
  };
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);