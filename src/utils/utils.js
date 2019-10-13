import axios from "axios";

export const getAllWords = () => {
  try {
    return axios.get("/words");
  } catch (error) {
    console.error(error);
  }
};

export const getRandomWord = allWords => {
  const random = Math.floor(Math.random() * allWords.length);
  return allWords[random];
};
