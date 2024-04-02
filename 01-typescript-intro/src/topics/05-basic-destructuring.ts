
interface AudioPlayer {
    audioVolume: number;
    soundDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string,
    year: number,
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    soundDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//Un tipo de dato no puede tener el mismo nombre que
//la variable que contiene la propiedad del objeto
//destructurada
const song = 'New Song';

//destructuracion de objetos 
const { song: anotherSong, soundDuration: duration, details } = audioPlayer;

const { author } = details;

// console.log('Song: ', anotherSong)
// console.log('Duration: ', duration)
// console.log('Author: ', author)

//DESTRUCTURACION DE ARREGLOS
//Para los valores que nos interesan del arreglo es necesario hacer referencia
//a los elementos posteriores poniendo una coma
const [ , , trunks = 'Not found' ]: string[] = ['Goku', 'Vegeta',]; 

console.log('Personaje 3:', trunks);

export {};