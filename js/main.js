/**
 * Функция, проверяет соотвествует ли строка максимально заданной длине.
 * @param {string} string - строка для проверки.
 * @param {number} maxLength - максимальное число символов.
 * @returns {boolean} true если строка соотвествует, false если нет.
 */
const checkStringIsLength = (string, maxLength) => string.length <= maxLength;

const myString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.';

checkStringIsLength(myString, 140);
