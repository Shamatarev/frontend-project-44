import random from '../utils.js';
import game from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, lengthOfProgression) => {
  const result = [];
  for (let i = 0; i <= lengthOfProgression; i += 1) {
    result.push(firstNumber + step * i);
  }
  return result;
};

const getGameData = () => {
  const lengthOfProgression = random(10, 20);
  const firstNumber = random(1, 50);
  const step = random(1, 10);
  const progression = getProgression(firstNumber, step, lengthOfProgression);
  const hiddenNumber = random(1, 3);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => {
  game(description, getGameData);
};
export default startGame;
