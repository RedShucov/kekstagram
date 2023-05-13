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
  if (min < 0 || max < 0) {
    return NaN;
  }

  const minNumber = Math.ceil(Math.min(min, max));
  const maxNumber = Math.floor(Math.max(min, max));

  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

  return randomNumber;
};

getRandomInteger(1, 5);

/**
 * Массив имен комментаторов
 */
const MOCK_COMMENTATORS = [
  'Николай',
  'Алиса',
  'Максим',
  'Виктория',
  'Иван',
  'Анастасия',
  'Алексей',
  'Екатерина',
  'Дмитрий',
  'Ольга',
  'Артем',
  'Елена',
  'Сергей',
  'Мария',
  'Андрей',
  'Юлия',
  'Владимир',
  'Анна',
  'Антон',
  'Ксения',
  'Игорь',
  'Александра',
  'Павел',
  'Елизавета',
  'Глеб'
];

/**
 * Массив комментариев под фото
 */
const MOCK_COMMENTS = [
  'Прекрасный пейзаж!',
  'Замечательный портрет!',
  'Великолепная композиция.',
  'Фотография полна эмоций.',
  'Красивые цвета!',
  'Интересный ракурс.',
  'Фантастический свет.',
  'Момент запечатлен идеально.',
  'Такая милая улыбка!',
  'Потрясающая игра света и тени.',
  'Креативное использование глубины резкости.',
  'Эффектное использование цветового контраста.',
  'Фотография передает атмосферу момента.',
  'Отличный фокус на главном объекте.',
  'Хорошая работа с композицией.',
  'Прекрасное использование линий и форм.',
  'Удачный выбор ракурса.',
  'Завораживающая игра света и отражений.',
  'Эмоциональная история, рассказанная на фото.',
  'Интересный выбор фокусировки.',
  'Такое мягкое и нежное освещение.',
  'Отличный контраст между цветами.',
  'Воздушная и легкая композиция.',
  'Красивый пастельный тон.',
  'Фотография полна жизни и движения.'
];

/**
 * Массив описаний к фотографии
 */
const MOCK_DESCRIPTIONS = [
  'Наслаждаясь моментом...',
  'Потерян в красоте природы.',
  'Очарован архитектурой этого города.',
  'Путешествие - источник вдохновения.',
  'Магия закатного неба.',
  'Ничто не сравнится с моментами, проведенными на пляже.',
  'Волшебный лес, полный загадок.',
  'Испытываю адреналин на высоте!',
  'Просто счастлив здесь и сейчас.',
  'Цветочное настроение.',
  'Идеальное сочетание цветов.',
  'Красота в деталях.',
  'Вкусные моменты жизни.',
  'Провожу время с лучшими друзьями.',
  'Самые яркие воспоминания.',
  'Забавные моменты с семьей.',
  'Ощущение свободы.',
  'Встречая рассвет с улыбкой.',
  'Мечта сбывается!',
  'Радость в каждом кадре.',
  'Уловили момент счастья.',
  'Магия зимнего дня.',
  'Игра света и теней.',
  'Расслабление и покой.',
  'Танцуя под открытым небом.'
];

/**
 * Набор ииспользуемых уникальный значений
 */
const uniqueNumbers = new Set();

/**
 * Функция, генерирует случайное уникальное число
 * В ходе программы происходит генерация случайного числа
 * После в цикле проверяется, есть ли оно в uniqueNumbers
 * Если есть, генерируется новое число,
 * как только будет получено число которого нет в uniqueNumbers
 * Произойдет возврат этого значения.
 * @param {number} min - нижняя граница диапазона.
 * @param {number} max - верхняя граница диапазона.
 * @returns {number} случайное уникальное целое число.
 */
const getRandomUniqueInteger = function (min, max) {
  let randomNumber;
  do {
    randomNumber = getRandomInteger(min, max);
  } while (uniqueNumbers.has(randomNumber));

  uniqueNumbers.add(randomNumber);
  return randomNumber;
};

/**
 * Функция, принимает массив на вход и вырезает случайный его элемент,
 * После чего производит возврат этого значения.
 * @param {Array} array
 * @returns элемент массива
 */
const getRandomArrayElement = (array) => {
  const arrayIndex = getRandomInteger(array.length - 1);

  const randomArrayElement = array.splice(arrayIndex, 1)[0];

  return randomArrayElement;
};

/**
 * Функция, создаёт моковый комменатарий,
 * Который в дальнейшем можно вставить в объект с данными фотографии.
 * @returns {Object} комментарий в виде объекта.
 */
const createMockComment = () => ({
  id: getRandomUniqueInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MOCK_COMMENTS),
  name: getRandomArrayElement(MOCK_COMMENTATORS)
});

/**
 * Функция, создаёт моковые данные для фотографии
 * @param {number} index - индекс текущей фотографии.
 * @returns {Object} данные о фотографии в виде объекта.
 */
const createMockPhotoData = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(MOCK_DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(1, 5) }, createMockComment)
});

// eslint-disable-next-line no-unused-vars
const mockPhotoData = Array.from({ length: 5 }, (_, index) => createMockPhotoData(index));
