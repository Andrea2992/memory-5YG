import './CardsVisualizer.css';
import './CardsVisualizerResponsive.css';
import { IRootState } from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import memoryCards, { MemoryCard } from './memory-cards';
import RecordCardsCreator from './RecordCardsCreator';
import OptionsBar from './OptionsBar';
import { newGame, updateCards } from './redux/memoryCardsSlice';
import { updateText } from './redux/gameStateTextSLice';
import { newGameScore } from './redux/scoreSlice';

function CardsVisualizer() {
    const dispatch = useDispatch();
    const cards: MemoryCard[] = useSelector((state: IRootState) => state.memoryCardList.value);

    const shuffleArray = <T extends any[]>(array: T): T => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }

    const handleNewGame = (cardsArray: MemoryCard[]) => {
        const newArray = shuffleArray([...cardsArray]);
        dispatch(newGame(newArray));
        dispatch(updateText({ hint: 'choose one card', message: 'started new game!' }));
        dispatch(newGameScore())
    };

    const handleCardClicked = (id: number) => {
        const index = cards.findIndex((card) => {
            return card.key === id
        });
        const cardCopy = { ...cards[index] };
        if (cardCopy.isVisible === true || cardCopy.isPlayable === false) {
            return
        };
        const tempCards = [...cards];
        cardCopy.isVisible = !tempCards[index].isVisible;
        tempCards[index] = cardCopy;
        dispatch(updateCards(tempCards));
    }

    useEffect(() => {
        const newArray = shuffleArray([...memoryCards]);
        dispatch(updateCards(newArray));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const memoryRecordCards = cards.map((c) =>
        <RecordCardsCreator
            key={c.key}
            image={c.image}
            isVisible={c.isVisible}
            id={c.key}
            onCardClicked={handleCardClicked}
        />
    )

    return (
        <>
            <OptionsBar
                newGame={handleNewGame}
                cards={memoryCards}
            />
            <div id="cards-container">{memoryRecordCards}</div>
        </>
    )
}

export default CardsVisualizer;