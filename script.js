function isVowel(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}

function translate(text) {

    const word = text.toLowerCase();
    const firstLetter = word[0];
    let pigLatin = '';

    if (word === '') {
        return pigLatin;
    } else if (isVowel(firstLetter)) {
        pigLatin = word + 'way';
    } else {
        pigLatin = word.substring(1) + firstLetter;
        let currentLetter = '';
        let wordLength = word.length - 1;
        for (let i = 0; i < wordLength; i++) {
            currentLetter = pigLatin[0];
            if (isVowel(currentLetter)) {
                pigLatin += 'ay';
                break;
            } else {
                pigLatin = pigLatin.substring(1) + currentLetter;
            }
        }
    }

    return pigLatin;
}


// comment out this block to test
// **************************************************
const entry = document.getElementById('entry');
const output = document.getElementById('output');

function translateEntry() {
    output.innerText = translate(entry.value);
}

entry.addEventListener('input', translateEntry);
// **************************************************


// //  uncomment this block to test
// // ********************************
// module.exports = {
//     translate
// }
// // ********************************