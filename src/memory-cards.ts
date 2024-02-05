const memoryCards: MemoryCard[] = [
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-1.jpg`,
        isVisible: false,
        tag: 'dices',
        isPlayable: true,
        key: 0
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-1.jpg`,
        isVisible: false,
        tag: 'dices',
        isPlayable: true,
        key: 1
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-2.jpg`,
        isVisible: false,
        tag: 'soccer-ball',
        isPlayable: true,
        key: 2
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-2.jpg`,
        isVisible: false,
        tag: 'soccer-ball',
        isPlayable: true,
        key: 3
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-3.jpg`,
        isVisible: false,
        tag: 'compass',
        isPlayable: true,
        key: 4
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-3.jpg`,
        isVisible: false,
        tag: 'compass',
        isPlayable: true,
        key: 5
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-4.jpg`,
        isVisible: false,
        tag: 'lake-sun',
        isPlayable: true,
        key: 6
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-4.jpg`,
        isVisible: false,
        tag: 'lake-sun',
        isPlayable: true,
        key: 7
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-5.jpg`,
        isVisible: false,
        tag: 'man',
        isPlayable: true,
        key: 8
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-5.jpg`,
        isVisible: false,
        tag: 'man',
        isPlayable: true,
        key: 9
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-6.jpg`,
        isVisible: false,
        tag: 'mineral',
        isPlayable: true,
        key: 10
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-6.jpg`,
        isVisible: false,
        tag: 'mineral',
        isPlayable: true,
        key: 11
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-7.jpg`,
        isVisible: false,
        tag: 'moon',
        isPlayable: true,
        key: 12
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-7.jpg`,
        isVisible: false,
        tag: 'moon',
        isPlayable: true,
        key: 13
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-8.jpg`,
        isVisible: false,
        tag: 'village',
        isPlayable: true,
        key: 14
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-8.jpg`,
        isVisible: false,
        tag: 'village',
        isPlayable: true,
        key: 15
    }
]

export default memoryCards;
export type MemoryCard = {
    image: string,
    isVisible: boolean,
    tag: string,
    isPlayable: boolean,
    key: number
}