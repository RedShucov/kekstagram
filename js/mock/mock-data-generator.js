import { getRandomInteger, getRandomUniqueInteger, getRandomArrayElement, getRandomComment } from './mock-util.js';
import { PHOTO_DATA_COUNT, MOCK_COMMENTATORS, MOCK_COMMENTS, MOCK_DESCRIPTIONS } from './mock-data-list.js';

/**
 * Функция, создаёт моковый комменатарий.
 * В дальнейшем его можно вставить в объект с данными о фотографии.
 * @returns {Object} комментарий в виде объекта.
 */
const createComment = () => ({
  id: getRandomUniqueInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomComment(MOCK_COMMENTS),
  name: getRandomArrayElement(MOCK_COMMENTATORS)
});

/**
 * Функция, создаёт моковые данные для фотографии.
 * @param {number} index - индекс текущей фотографии.
 * @returns {Object} данные о фотографии в виде объекта.
 */
const createPhotoData = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(MOCK_DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(1, 5) }, createComment)
});

/**
 * Функция, создаёт массив объектов данных о фотографиях со случайными данными в них.
 * @returns {Array} массив объектов содержащих данные о фотографиях.
 */
const createPhotosData = () => Array.from({ length: PHOTO_DATA_COUNT }, (_, index) => createPhotoData(index));

export { createPhotosData };
