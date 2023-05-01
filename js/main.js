/**
 * Функция, проверяет соотвествует ли строка максимально заданной длине.
 * @param {string} string - строка для проверки.
 * @param {number} maxLength - максимальное число символов.
 * @returns {boolean} true если строка соотвествует, false если нет.
 */
const checkStringIsLength = (string, maxLength) => string.length <= maxLength;

const myString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.';

checkStringIsLength(myString, 140);

/**
 * Функция, возвращает случайное целое число из переданного диапазона включительно.
 * @param {number} min - нижняя граница диапазона.
 * @param {number} max - верхняя граница диапазона.
 * @returns {number} случайное число.
 */
const getRandomInteger = function (min, max) {
  if (!Number.isInteger(min && max) || (min || max) < 0) {
    return NaN;
  }

  const minNumber = Math.min(min, max);
  const maxNumber = Math.max(min, max);

  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

  return randomNumber;
};

getRandomInteger(1, 5);
