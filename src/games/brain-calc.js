import getRandomNumber from '../utils.js';
import game from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, character) => {
  switch (character) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
       throw Error("Operator error");
  }
};

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const character = operators[getRandomNumber(0, operators.length - 1)];
  const correctAnswer = String(calculate(num1, num2, character));
  const question = `${num1} ${character} ${num2}`;
  return [question, correctAnswer];
};

const startGame = () => {
  game(description, getGameData);
};

export default startGame;
