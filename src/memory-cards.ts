const memoryCards: MemoryCard[] = [
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-1.jpg`,
        isVisible: false,
        tag: '5yg-1',
        isPlayable: true,
        key: 0
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-1.jpg`,
        isVisible: false,
        tag: '5yg-1',
        isPlayable: true,
        key: 1
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-2.jpg`,
        isVisible: false,
        tag: '5yg-2',
        isPlayable: true,
        key: 2
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-2.jpg`,
        isVisible: false,
        tag: '5yg-2',
        isPlayable: true,
        key: 3
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-3.jpg`,
        isVisible: false,
        tag: '5yg-3',
        isPlayable: true,
        key: 4
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-3.jpg`,
        isVisible: false,
        tag: '5yg-3',
        isPlayable: true,
        key: 5
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-4.jpg`,
        isVisible: false,
        tag: '5yg-4',
        isPlayable: true,
        key: 6
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-4.jpg`,
        isVisible: false,
        tag: '5yg-4',
        isPlayable: true,
        key: 7
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-5.jpg`,
        isVisible: false,
        tag: '5yg-5',
        isPlayable: true,
        key: 8
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-5.jpg`,
        isVisible: false,
        tag: '5yg-5',
        isPlayable: true,
        key: 9
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-6.jpg`,
        isVisible: false,
        tag: '5yg-6',
        isPlayable: true,
        key: 10
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-6.jpg`,
        isVisible: false,
        tag: '5yg-6',
        isPlayable: true,
        key: 11
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-7.jpg`,
        isVisible: false,
        tag: '5yg-7',
        isPlayable: true,
        key: 12
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-7.jpg`,
        isVisible: false,
        tag: '5yg-7',
        isPlayable: true,
        key: 13
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-8.jpg`,
        isVisible: false,
        tag: '5yg-8',
        isPlayable: true,
        key: 14
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-8.jpg`,
        isVisible: false,
        tag: '5yg-8',
        isPlayable: true,
        key: 15
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-9.jpg`,
        isVisible: false,
        tag: '5yg-9',
        isPlayable: true,
        key: 16
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-9.jpg`,
        isVisible: false,
        tag: '5yg-9',
        isPlayable: true,
        key: 17
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-10.jpg`,
        isVisible: false,
        tag: '5yg-10',
        isPlayable: true,
        key: 18
    },
    {
        image: `${process.env.REACT_APP_IMAGE_BASE_URL}5yg-10.jpg`,
        isVisible: false,
        tag: '5yg-10',
        isPlayable: true,
        key: 19
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