import { useState } from 'react';
import './Volume.css';
import './VolumeResponsive.css'
import './audio-preload'
import {Howler} from 'howler';


function Volume() {

    const [volume, setVolume] = useState('volume-off');

    const soundtrackControl = () => {
        if (volume === 'volume-off') {
            setVolume('volume-on');
            Howler.mute(false)
        } else {
            setVolume('volume-off');
            Howler.mute(true);
        }
    }

    return (
        <>
            <div
                id="volume"
                className={volume}
                onClick={() => {
                    soundtrackControl()
                }}
            >
            </div>
        </>
    )
}

export default Volume;