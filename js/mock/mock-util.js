/**
 * Функция, проверяет соотвествует ли строка максимально заданной длине.
 * @param {string} string - строка для проверки.
 * @param {number} maxLength - максимальное число символов.
 * @returns {boolean} true если строка соотвествует, false если нет.
 */
const checkStringIsLength = (string, maxLength) => string.length <= maxLength;

/**
 * Функция, возвращает случайное целое число из переданного диапазона включительно.
 * @param {number} min - нижняя граница диапазона.
 * @param {number} max - верхняя граница диапазона.
 * @returns {number} случайное число.
 */
const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }

  const minNumber = Math.ceil(Math.min(min, max));
  const maxNumber = Math.floor(Math.max(min, max));

  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

  return randomNumber;
};

/**
 * Набор использованных уникальных значений.
 */
const uniqueNumbers = new Set();

/**
 * Функция, генерирует случайное уникальное число.
 * В ходе работы функции происходит генерация случайного числа.
 * После генерации числа, в цикле проверяется, есть ли оно в set-e uniqueNumbers.
 * Если set uniqueNumbers содержит число, происходит генерация нового числа.
 * Как только будет получено число которого нет в uniqueNumbers,
 * Произойдет возврат этого значения.
 * @param {number} min - нижняя граница диапазона.
 * @param {number} max - верхняя граница диапазона.
 * @returns {number} случайное уникальное целое число.
 */
const getRandomUniqueInteger = (min, max) => {
  let randomNumber;
  do {
    randomNumber = getRandomInteger(min, max);
  } while (uniqueNumbers.has(randomNumber));

  uniqueNumbers.add(randomNumber);
  return randomNumber;
};

/**
 * Функция, принимает массив на вход и вырезает случайный его элемент.
 * На выходе производит возврат этого значения.
 * @param {Array} array - массив из которого будет взят элемент.
 * @returns элемент массива.
 */
const getRandomArrayElement = (array) => {
  const arrayIndex = getRandomInteger(0, array.length - 1);

  const randomArrayElement = array.splice(arrayIndex, 1)[0];

  return randomArrayElement;
};

export { checkStringIsLength, getRandomInteger, getRandomUniqueInteger, getRandomArrayElement };
