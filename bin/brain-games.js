#!/usr/bin/env node

import { foo } from '../csr/cli.js';
//import { game } from './brain-even.js'
//import { game2 } from './brain-calc.js'
import { game3 } from './brain-gcd.js'
import readlineSync from 'readline-sync';

foo();
  export const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
//game();
//game2();
game3();
