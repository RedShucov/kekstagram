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
 * Массив имен для комментаторов
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
 * Массив комментариев к фото
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
 * Массив описаний для фото
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

const getMockDataPhotos = function (descriptions, comments, commentators) {
  const arr = [];

  for (let index = 1; index <= 25; index++) {
    const photoData = {
      'id': index,
      'url': `photos/${index}.jpg`,
      'description': descriptions.shift(index - 1),
      'likes': getRandomInteger(15, 200),
      'comments': [
        {
          id: getRandomInteger(0, 7),
          avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
          message: comments.shift(index - 1),
          name: commentators.shift(index - 1),
        }
      ]
    };

    arr.push(photoData);
  }

  return arr;
};

const test = getMockDataPhotos(MOCK_DESCRIPTIONS, MOCK_COMMENTS, MOCK_COMMENTATORS);

console.log(test);
