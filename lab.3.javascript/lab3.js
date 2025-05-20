/**
 * Возвращает дробную часть числа.
 * @param {number} num - Число, из которого нужно извлечь дробную часть.
 * @returns {number} Дробная часть числа (в диапазоне [0, 1)).
 */
export function getDecimal(num) {
    const decimal = Math.abs(num) - Math.floor(Math.abs(num));
    return parseFloat((num < 0 ? 1 - decimal : decimal).toFixed(10));
}

/**
 * Нормализует URL, добавляя 'https://' в начале, если его нет.
 * @param {string} url - URL для нормализации.
 * @returns {string} Нормализованный URL с 'https://'.
 */
export function normalizeUrl(url) {
    if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    }
    if (url.startsWith('https://')) {
        return url;
    }
    return 'https://' + url;
}

/**
 * Проверяет строку на наличие подстрок 'viagra' или 'XXX' (без учёта регистра).
 * @param {string} str - Строка для проверки.
 * @returns {boolean} true, если найдены запрещённые подстроки, иначе false.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до указанной длины, добавляя многоточие при необходимости.
 * @param {string} str - Строка для усечения.
 * @param {number} maxlength - Максимальная длина строки.
 * @returns {string} Усечённая строка.
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * Преобразует строку с дефисами в camelCase.
 * @param {string} str - Строка для преобразования.
 * @returns {string} Строка в camelCase.
 */
export function camelize(str) {
    return str.split('-')
        .map((word, index) => index === 0 ? word : ucFirst(word))
        .join('');
}

/**
 * Преобразует первую букву строки в верхний регистр.
 * @param {string} str - Строка для преобразования.
 * @returns {string} Строка с первой заглавной буквой.
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая его).
 * @param {number} n - Количество чисел Фибоначчи.
 * @returns {bigint[]} Массив чисел Фибоначчи.
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n - Порядковый номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи.
 */
function fib(n) {
    if (n === 0) return 0n;
    let a = 0n, b = 1n;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

/**
 * Возвращает новый массив, отсортированный по убыванию.
 * @param {number[]} arr - Массив чисел для сортировки.
 * @returns {number[]} Новый массив, отсортированный по убыванию.
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * Возвращает массив уникальных значений.
 * @param {Array} arr - Массив с повторяющимися значениями.
 * @returns {Array} Массив уникальных значений.
 */
export function unique(arr) {
    return [...new Set(arr)];
}