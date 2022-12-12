#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { foo } from '../csr/cli.js';
// import { game } from './games/brain-even.js'
// import { game2 } from './games/brain-calc.js'
// import { game3 } from './games/brain-gcd.js'
// import { game4 } from './games/brain-progression.js'
// import { game5 } from './games/brain-prime.js'

foo();
export const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
// game();
// game2();
// game3();
// game4();
// game5();
