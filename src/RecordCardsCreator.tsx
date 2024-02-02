import './RecordCardsCreator.css';
import './RecordCardsCreatorResponsive.css';

function RecordCardsCreator({ image, isVisible, id, onCardClicked }: RecordCardsCreatorProps) {

    const backCard = `${process.env.REACT_APP_IMAGE_BASE_URL}card-back.jpg`;
    const frontOrBack = isVisible === true ? image : backCard;
    const goldBorder = 'memory-image gold-border';
    const redBorder = 'memory-image red-border';
    const borderClass = isVisible === false ? goldBorder : redBorder;

    return (
        <>
            <div
                className="single-card-container"
                onClick={() => onCardClicked(id)}
            >
                <img className={borderClass} src={frontOrBack} alt="memory-card" />
            </div>
        </>
    )
}

export default RecordCardsCreator;
export type RecordCardsCreatorProps = {
    image: string,
    isVisible: boolean,
    id: number,
    onCardClicked: (id: number) => void
}