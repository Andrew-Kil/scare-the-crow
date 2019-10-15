import axios from "axios";

export const getRandomWord = async () => {
  return await axios
    .get(`/words?start=${Math.floor(Math.random() * 162414)}&count=1`)
    .then(res => res.data)
    .catch(err => console.error(err));
};

export const isUserGuessValid = (userInput, secretWord) => {
  return (
    isUserGuessSingleChar(userInput) &&
    isUserGuessInSecretWord(userInput, secretWord)
  );
};

const isUserGuessSingleChar = userGuess => {
  return userGuess.length === 1 ? true : false;
};

const isUserGuessInSecretWord = (userGuess, secretWord) => {
  return secretWord.includes(userGuess) ? true : false;
};

export const gameDifficultyTypes = {
  easy: {
    gameDifficulty: "easy",
    guessesRemaining: 7
  },
  normal: {
    gameDifficulty: "normal",
    guessesRemaining: 6
  },
  hard: {
    gameDifficulty: "hard",
    guessesRemaining: 5
  },
  helloween: {
    gameDifficulty: "helloween",
    guessesRemaining: 4
  }
};

export const isUserWinner = (secretWord, allGuesses) => {
  return [...secretWord].every(letter => allGuesses.includes(letter));
};
