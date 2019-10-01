const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const words = expr.split('**********');

    const decodedWords = words.map(function(word) {
        const count = word.length / 10;

        const decodedLetters = [];

        for (let index = 0; index < count; index++) {
            const encodedLetter = word.slice(index * 10 , index * 10 + 10);

            const sounds = [];

            for (let index = 10; index > 0; index = index - 2) {
                const sound = encodedLetter.slice(index - 2, index);

                if (sound === '10') {
                    sounds.unshift('.');
                }
                if (sound === '11') {
                    sounds.unshift('-');
                }
            }

            const letter = sounds.join('');

            decodedLetters.push(MORSE_TABLE[letter]);
        }

        return decodedLetters.join('');

    });

    return decodedWords.join(' ');
}

module.exports = {
    decode
}