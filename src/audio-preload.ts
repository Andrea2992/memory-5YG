import { Howl } from 'howler';

export var soundtrack = new Howl({
    src: [`${process.env.REACT_APP_IMAGE_BASE_URL}Breezy's Mega Quest - 4 Stage 3.wav`],
    loop: true,
    volume: 0.7,
    autoplay: false,
    preload: true
});

export var selectCardSound = new Howl({
    src: [`${process.env.REACT_APP_IMAGE_BASE_URL}Retro Blop 18.wav`],
    loop: false,
    volume: 1,
    autoplay: false,
    preload: true
});

export var foundCoupleSound = new Howl({
    src: [`${process.env.REACT_APP_IMAGE_BASE_URL}Retro Blop StereoUP 04.wav`],
    loop: false,
    volume: 1,
    autoplay: false,
    preload: true
});

export var notFoundCoupleSound = new Howl({
    src: [`${process.env.REACT_APP_IMAGE_BASE_URL}Retro Alarmed 10.wav`],
    loop: false,
    volume: 1,
    autoplay: false,
    preload: true
});

export var winGameSound = new Howl({
    src: [`${process.env.REACT_APP_IMAGE_BASE_URL}My Heart My Soul V2.mp3`],
    loop: false,
    volume: 0.7,
    autoplay: false,
    preload: true
});