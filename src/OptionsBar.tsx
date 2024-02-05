import "./OptionsBar.css";
import "./OptionsBarResponsive.css";
import { MemoryCard } from "./memory-cards";

function OptionsBar({ newGame, cards }: OptionsBarProps) {

    return (
        <>
            <div id="options-container">
                <div id="div-8bit">
                    <div
                        id="new-game-button"
                        onClick={() => newGame(cards)}
                    >
                        +NEW GAME!
                    </div>
                </div>
            </div>
        </>
    )
}

export default OptionsBar;
export type OptionsBarProps = {
    newGame: (cardsArray: MemoryCard[]) => void;
    cards: MemoryCard[]
}