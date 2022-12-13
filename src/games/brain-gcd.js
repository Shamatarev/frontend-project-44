import random from '../utils.js';
import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGCD = (num1, num2) => {
  if (num1 === num2 || num2 === 0) {
    return num1;
  }
  return getGCD(num2, num1 % num2);
};

const getGameData = () => {
  const num1 = random(1, 50);
  const num2 = random(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));
  return [question, correctAnswer];
};

const startGame = () => {
  game(description, getGameData);
};
export default startGame;
