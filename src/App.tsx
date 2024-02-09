import './App.css';
import './AppResponsive.css';
import CardsVisualizer from './CardsVisualizer';
import GameStateText from './GameStateText';
import Header from './Header';
import { useSelector } from 'react-redux';
import { IRootState } from './redux/store';
import Volume from './Volume';
import IsSiteLoaded from './IsSiteLoaded';



function App() {

  const divBackground = useSelector((state: IRootState) => state.gameStatus.message);
  function classSelector(message: string) {
    if (message === 'YOU WIN!') {
      return 'content-container-win'
    } else {
      return ''
    }
  };


  function startLoadImages() {
    const imagesPreload = [
      `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-1.jpg`,
      `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-2.jpg`,
      `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-3.jpg`,
      `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-4.jpg`,
      `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-5.jpg`,
      `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-6.jpg`,
      `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-7.jpg`,
      `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-8.jpg`,
      `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-9.jpg`,
      `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-10.jpg`,
    ];
    imagesPreload.forEach((image) => {
      const newImage = new Image();
      newImage.src = image;
      window[image] = newImage;
    });
  };

  startLoadImages();

  
  return (
    <>
      <IsSiteLoaded/>
      <Header />
      <div className={classSelector(divBackground)} id='content-container'>
        <CardsVisualizer />
        <GameStateText />
      </div>
      <Volume />
    </>
  );
}

export default App;
