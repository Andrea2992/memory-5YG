import { useEffect, useState } from 'react';
import SiteLoader from './SiteLoader';
import { foundCoupleSound, notFoundCoupleSound, selectCardSound, soundtrack, winGameSound } from './audio-preload';



function IsSiteLoaded() {

    const [audioAssetsLoaded, setAudioAssetsLoaded] = useState(false);
    const [songsLoaded, setSongsLoaded] = useState([]);
    const [imagesAssetsLoaded, setImagesAssetsLoaded] = useState(false)
    const [imagesLoaded, setImagesLoaded] = useState([]);

    const handleSongsLoading = (song: string) => {
        songsLoaded.push(song);
        setSongsLoaded(songsLoaded);
        if (songsLoaded.length === 5) {
            setAudioAssetsLoaded(true);
        };
    }

    const handleImagesLoading = (image: string) => {
        const actualImg = imagesLoaded.find(i => {
            return i === image
        });
        if (actualImg === image) {
            return
        }
        imagesLoaded.push(image);
        setImagesLoaded(imagesLoaded);
        if (imagesLoaded.length === 4) {
            setImagesAssetsLoaded(true);
        }
    }

    useEffect(() => {
        notFoundCoupleSound.off('load');
        soundtrack.off('load');
        soundtrack.on('load', () => {
            handleSongsLoading('soundtrack')
        });
        selectCardSound.off('load');
        selectCardSound.on('load', () => {
            handleSongsLoading('selectCardSound')
        });
        foundCoupleSound.off('load');
        foundCoupleSound.on('load', () => {
            handleSongsLoading('foundCoupleSound')
        });
        notFoundCoupleSound.on('load', () => {
            handleSongsLoading('notFoundCoupleSound')
        });
        winGameSound.off('load');
        winGameSound.on('load', () => {
            handleSongsLoading('winGameSound')
        });
        const backgroundImg = new Image()
        backgroundImg.src = `${process.env.REACT_APP_IMAGE_BASE_URL}background-8bit.jpg`
        backgroundImg.removeEventListener('load', () => {
            handleImagesLoading('backgroundImg');
        });
        backgroundImg.addEventListener('load', () => {
            handleImagesLoading('backgroundImg');
        });
        const headerImg = new Image()
        headerImg.src = `${process.env.REACT_APP_IMAGE_BASE_URL}header-8bit.jpg`
        headerImg.removeEventListener('load', () => {
            handleImagesLoading('headerImg');
        });
        headerImg.addEventListener('load', () => {
            handleImagesLoading('headerImg');
        });
        const backCardImg = new Image()
        backCardImg.src = `${process.env.REACT_APP_IMAGE_BASE_URL}neon-pixelicious.png`
        backCardImg.removeEventListener('load', () => {
            handleImagesLoading('backCardImg');
        });
        backCardImg.addEventListener('load', () => {
            handleImagesLoading('backCardImg');
        });
        const winImg = new Image()
        winImg.src = `${process.env.REACT_APP_IMAGE_BASE_URL}winner.png`
        winImg.removeEventListener('load', () => {
            handleImagesLoading('winImg');
        });
        winImg.addEventListener('load', () => {
            handleImagesLoading('winImg');
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <SiteLoader showAudio={audioAssetsLoaded} showImages={imagesAssetsLoaded} />
    )
}

export default IsSiteLoaded;