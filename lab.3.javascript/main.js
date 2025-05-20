import { getDecimal, normalizeUrl, checkSpam} from './lab2.js';

console.log(getDecimal(-1.23)); // 0.77
console.log(normalizeUrl('yandex.ru')); // 'https://yandex.ru'
console.log(checkSpam('_XxX_')); // true
