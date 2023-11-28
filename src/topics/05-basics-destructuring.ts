

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    songName: string;
    details: Details
}

interface Details {
    author: string
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 10,
    songDuration: 300,
    songName: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

// const { details } = audioPlayer

// const { author, year } = details

// console.log({ author, year })

const [goku, vegeta, trunks = 'Not Found']: string[] = ['Goku', 'Vegeta', 'Trunks'];


console.log('Personaje 3: ', trunks);


export {}