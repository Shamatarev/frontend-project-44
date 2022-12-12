#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../brain-games.js';

function num() {
  const number = (Math.round(Math.random() * 100));
  return number;
}

function testPrime(n) {
  if (n < 2) {
    return 'no';
  }
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function game5() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = num();
    const quest = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    if ((testPrime(randomNum) === 'yes' && quest === 'yes') || (testPrime(randomNum) === 'no' && quest === 'no')) {
      console.log('Correct');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
game5();
