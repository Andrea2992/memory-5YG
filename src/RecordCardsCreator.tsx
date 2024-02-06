import './RecordCardsCreator.css';
import './RecordCardsCreatorResponsive.css';

function RecordCardsCreator({ image, isVisible, id, onCardClicked }: RecordCardsCreatorProps) {

    const backCard = `${process.env.REACT_APP_IMAGE_BASE_URL}neon-pixelicious.png`;
    const frontOrBack = isVisible === true ? image : backCard;

    return (
        <>
            <div
                className="single-card-container"
                onClick={() => onCardClicked(id)}
            >
                <img className='memory-image' src={frontOrBack} alt="memory-card" />
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