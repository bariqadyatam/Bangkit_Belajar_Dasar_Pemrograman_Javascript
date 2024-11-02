// Import unique as default and splitString as named from utils.mjs
import unique from './utils.mjs'; // Default import
import { splitString } from './utils.mjs'; // Named import

const string = 'saippuakivikauppias';
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);