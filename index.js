/*
 * Title: Random Word Generator
 * Description: Random Word Generator that generates a random word of a given length and number of words. Default length is 10 and default number of words is 5.
 * Author: Main Uddin
 * Date: 2022-08-16
 * Version: 1.0
 */

// alphabet
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// generate random number between min and max
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// generate random letter
const randomLetter = () => alphabet[randomNumber(0, alphabet.length)];

// generate random word
const randomWord = (length) => {
  let word = '';
  for (let i = 0; i < length; i++) {
    word += randomLetter();
  }
  return word;
}

// how many words to generate
const howManyWords = (worldLength, numberOfWords) => {
  // check if worldLength is a number
  const wordLengthNumber = typeof(worldLength) === 'number' ? parseInt(worldLength) : 10;

  // check if numberOfWords is a number
  const numberOfWordsNumber = typeof(numberOfWords) === 'number' ? parseInt(numberOfWords) : 5;

  const words = [];
  for(let i = 0; i < numberOfWordsNumber; i++) {
    words.push(randomWord(wordLengthNumber));
  }
  return words;
}

// print
console.log(howManyWords(6, 100));