import { MemoryCard } from '../memory-cards';


export class MemoryGame {

    public gameStatus(state: MemoryCard[]): MemoryGameStatus {
        const remainingPLayableCard = state.filter(card => {
            return card.isVisible === true && card.isPlayable === false
        });
        if (remainingPLayableCard.length === state.length) {
            return { type: 'end_of_game' }
        }
        const clickedCard = state.filter(card => {
            return card.isVisible === true && card.isPlayable === true
        });
        if (clickedCard.length === 0) {
            return { type: 'choose_one_card' }
        }
        if (this.twoCardSelected(clickedCard) === false) {
            return { type: 'choose_one_more' }
        }
        const tagsArray = [clickedCard[0].tag, clickedCard[1].tag];
        if (this.isRightCouple(tagsArray) === false) {
            const newArrayWrongCouple = state.map(card => {
                const newIsVisible = card.isVisible === true && card.isPlayable === true ? false : card.isVisible;
                return {
                    ...card,
                    isVisible: newIsVisible
                }
            });
            return { type: 'wrong_answer', updatedMemoryCards: newArrayWrongCouple }
        } else {
            const newArrayRightCouple = state.map(card => {
                const newIsPlayable = card.isVisible === true && card.isPlayable === true ? false : card.isPlayable;
                return {
                    ...card,
                    isPlayable: newIsPlayable
                }
            });
            return { type: 'right_answer', updatedMemoryCards: newArrayRightCouple }
        };
    }

    private twoCardSelected(clickedCard: MemoryCard[]) {
        if (clickedCard.length < 2) {
            return false
        }
    }

    private isRightCouple(tags: string[]) {
        return tags[0] === tags[1];
    }

}

export type MemoryGameStatus = {
    type: 'choose_one_card' | 'choose_one_more' | 'wrong_answer' | 'right_answer' | 'end_of_game',
    updatedMemoryCards?: MemoryCard[]
}