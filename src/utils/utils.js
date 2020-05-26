import { words } from "./words";

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export const isUserGuessValid = (userGuess, secretWord) =>
  isUserGuessSingleChar(userGuess) &&
  isUserGuessInSecretWord(userGuess, secretWord);

const isUserGuessSingleChar = (userGuess) => userGuess.length === 1;

const isUserGuessInSecretWord = (userGuess, secretWord) =>
  secretWord.includes(userGuess);

export const isUserGuessLetter = (userGuess) =>
  userGuess.toLowerCase() !== userGuess.toUpperCase();

export const isUserGuessRepeated = (userGuess, allGuesses) =>
  allGuesses.includes(userGuess);

export const isUserWinner = (secretWord, allGuesses) =>
  [...secretWord].every((letter) => allGuesses.includes(letter));

export const calculateHpPercent = (currentHp, totalHp) =>
  (currentHp / totalHp) * 100;

export const gameDifficultyTypes = {
  easy: {
    gameDifficulty: "easy",
    totalHp: 12,
    currentHp: 12,
  },
  normal: {
    gameDifficulty: "normal",
    totalHp: 6,
    currentHp: 6,
  },
  hard: {
    gameDifficulty: "hard",
    totalHp: 4,
    currentHp: 4,
  },
};

export const updateStateValidResponse = (state) => {
  const { allGuesses, userGuess } = state;
  return {
    allGuesses: [...allGuesses, userGuess],
    userGuess: "",
  };
};

export const updateStateInvalidResponse = (state) => {
  const { currentHp, allGuesses, userGuess, incorrectGuesses } = state;
  return {
    currentHp: currentHp - 1,
    allGuesses: [...allGuesses, userGuess],
    incorrectGuesses: [...incorrectGuesses, userGuess],
    userGuess: "",
  };
};
