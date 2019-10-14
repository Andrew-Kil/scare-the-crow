import axios from "axios";

export const getRandomWord = async () => {
  return await axios
    .get(`/words?start=${Math.floor(Math.random() * 162414)}&count=1`)
    .then(res => res.data)
    .catch(err => console.error(err));
};

export const isUserInputValid = (userInput, secretWord) => {
  return (
    isUserInputSingleChar(userInput) &&
    isUserInputInSecretWord(userInput, secretWord)
  );
};

const isUserInputSingleChar = userInput => {
  return userInput.length === 1 ? true : false;
};

const isUserInputInSecretWord = (userInput, secretWord) => {
  return secretWord.includes(userInput) ? true : false;
};
