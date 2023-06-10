const EFFECTS = {
  chrome: {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.01,
    unit: ''
  },
  sepia: {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.01,
    unit: ''
  },
  marvin: {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.01,
    unit: 'px'
  },
  heat: {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.01,
    unit: ''
  },
  none: {
    name: 'none',
    min: 0,
    max: 0,
    step: 0
  }
};

const effectsList = document.querySelector('.effects__list');
const imagePreview = document.querySelector('.img-upload__preview img');

/**
 * Функция, для получения выбранного эффекта в виде объекта.
 * @returns {Object} объект с описанием эффекта.
 */
const getCheckedEffect = () => {
  const checkedEffect = effectsList.querySelector('.effects__radio:checked').value;

  const effect = EFFECTS[checkedEffect];

  return effect;
};

/**
 * Функция, для добавления на изображения активного класса эффекта.
 * @param {Object} effect - объект с описанием эффекта.
 */
const addPreviewEffect = (effect) => {
  const activeClass = `effects__preview--${effect.name}`;
  imagePreview.className = '';
  imagePreview.classList.add(activeClass);
};

/**
 * Функция, обработчик при изменение активного эффекта.
 */
const changeEffectHandler = () => {
  const effect = getCheckedEffect();

  addPreviewEffect(effect);
};

/**
 * Инициализация обработчика событий для эффектов.
 */
const addEffectHandler = () => {
  effectsList.addEventListener('change', changeEffectHandler);
};

addEffectHandler();
