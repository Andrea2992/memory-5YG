import "./OptionsBar.css";
import "./OptionsBarResponsive.css";
import { MemoryCard } from "./memory-cards";

function OptionsBar({ newGame, cards }: OptionsBarProps) {

    return (
        <>
            <div id="options-container">
                <button
                    id="new-game-button"
                    onClick={() => newGame(cards)}
                >
                    + NEW GAME
                </button>
            </div>
        </>
    )
}

export default OptionsBar;
export type OptionsBarProps = {
    newGame: (cardsArray: MemoryCard[]) => void;
    cards: MemoryCard[]
}