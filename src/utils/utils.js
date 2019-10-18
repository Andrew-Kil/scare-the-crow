import axios from "axios";

export const getRandomWord = async () => {
  return await axios
    .get(`/words?start=${Math.floor(Math.random() * 162414)}&count=1`)
    .then(res => res.data)
    .catch(err => console.error(err));
};

export const isUserGuessValid = (userGuess, secretWord) => {
  return (
    isUserGuessSingleChar(userGuess) &&
    isUserGuessInSecretWord(userGuess, secretWord)
  );
};

const isUserGuessSingleChar = userGuess => {
  return userGuess.length === 1 ? true : false;
};

const isUserGuessInSecretWord = (userGuess, secretWord) => {
  return secretWord.includes(userGuess) ? true : false;
};

export const isUserGuessLetter = userGuess => {
  return userGuess.toLowerCase() !== userGuess.toUpperCase();
};

export const isUserGuessRepeated = (userGuess, allGuesses) => {
  return allGuesses.includes(userGuess);
};

export const isUserWinner = (secretWord, allGuesses) => {
  return [...secretWord].every(letter => allGuesses.includes(letter));
};

export const calculateHpPercent = (currentHp, totalHp) => {
  return (currentHp / totalHp) * 100;
};

export const gameDifficultyTypes = {
  easy: {
    gameDifficulty: "easy",
    totalHp: 7,
    currentHp: 7
  },
  normal: {
    gameDifficulty: "normal",
    totalHp: 6,
    currentHp: 6
  },
  hard: {
    gameDifficulty: "hard",
    totalHp: 5,
    currentHp: 5
  },
  helloween: {
    gameDifficulty: "helloween",
    totalHp: 4,
    currentHp: 4
  }
};

export const updateStateValidResponse = state => {
  const { allGuesses, userGuess } = state;
  return {
    allGuesses: [...allGuesses, userGuess],
    userGuess: ""
  };
};

export const updateStateInvalidResponse = state => {
  const { currentHp, allGuesses, userGuess, incorrectGuesses } = state;
  return {
    currentHp: currentHp - 1,
    allGuesses: [...allGuesses, userGuess],
    incorrectGuesses: [...incorrectGuesses, userGuess],
    userGuess: ""
  };
};
