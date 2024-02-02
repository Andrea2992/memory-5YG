import { configureStore } from '@reduxjs/toolkit';
import memoryCardList from './memoryCardsSlice';
import GameStatusText from './gameStateTextSLice';
import gameScore from './scoreSlice';


const store = configureStore({
    reducer: {
      memoryCardList: memoryCardList,
      gameStatus: GameStatusText,
      gameScore: gameScore
    },
  })


export default store;
export type IRootState = ReturnType<typeof store.getState>