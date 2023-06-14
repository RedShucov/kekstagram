const EFFECTS = {
  chrome: {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.05,
    unit: ''
  },
  sepia: {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.05,
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
    step: 0.05,
    unit: 'px'
  },
  heat: {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.05,
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
const effectSliderContainer = document.querySelector('.effect-level');
const effectSlider = document.querySelector('.effect-level__slider');
const effectValueInput = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview img');

let currentDragSliderHandler;

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
 * Функция, проверяет активный эффект, если это 'оригинал', то слайдер скрывается.
 * @returns {Object} объект с описанием эффекта.
 */
const checkActiveEffect = ({ name }) => {
  if (name === 'none') {
    effectSliderContainer.classList.add('hidden');

    imagePreview.style.filter = '';
  }

  if (name !== 'none' && effectSliderContainer.classList.contains('hidden')) {
    effectSliderContainer.classList.remove('hidden');
  }
};

/**
 * Функция, для добавления на изображения активного класса эффекта.
 * @param {Object} effect - объект с описанием эффекта.
 */
const addPreviewEffect = ({ name }) => {
  const activeClass = `effects__preview--${name}`;
  imagePreview.className = '';
  imagePreview.classList.add(activeClass);
};

/**
 * Функция, для получения настроек эффекта для слайдера.
 */
const createEffectSliderOptions = ({ min, max, step }) => ({
  range: {
    min: min,
    max: max
  },
  start: max,
  step: step,
  connect: 'lower'
});

/**
 * Функция для получения css-стиля эффекта.
 * @param {Object} effect - объект с описанием эффекта.
 * @param {string} value - значение насыщенности эффекта.
 * @returns {string} возващает строку с собранным css-эффектом.
 */
const createEffectStyle = ({ style, unit }, value) => `${style}(${value}${unit})`;

/**
 * Функция, применяет выбранный эффект к изображению.
 * @param {Object} effect - объект с описанием эффекта.
 */
const applyEffect = (effect) => {
  checkActiveEffect(effect);
  addPreviewEffect(effect);
};

/**
 * Функция, выполняется при перетягивание слайдера и изменение его значения, меняет насыщенность эффекта.
 * @param {Object} effect - объект с описанием эффекта.
 */
const dragSlider = (effect) => {
  const effectValue = effectSlider.noUiSlider.get();

  effectValueInput.value = effectValue;

  imagePreview.style.filter = createEffectStyle(effect, effectValue);
};

/**
 * Функция, обработчик изменения значения слайдера использует замыкание, чтобы задать контекст для dragSlider.
 * @param {Object} effect - объект с описанием эффекта.
 */
const dragSliderHandler = (effect) => () => dragSlider(effect);

/**
 * Функция, добавляет новый хэндлер на слайдер.
 * @param {Object} effect - объект с описанием эффекта.
 */
const addSliderHandler = (effect) => {
  currentDragSliderHandler = dragSliderHandler(effect);
  effectSlider.noUiSlider.on('update', currentDragSliderHandler);
};

/**
 * Функция, удаляет текущий хэндлер со слайдера.
 */
const removeSliderHandler = () => {
  effectSlider.noUiSlider.off('update', currentDragSliderHandler);
};

/**
 * Функция, создаёт слайдер и передает ему стартовые настройки стандартного эффекта.
 * @param {Object} effect - объект с описанием эффекта.
 */
const createSlider = (effect) => {
  const effectOptions = createEffectSliderOptions(effect);

  noUiSlider.create(effectSlider, effectOptions);
};

/**
 * Функция, удаляет слайдер после закрытия модального окна.
 */
const destroySlider = () => effectSlider.noUiSlider.destroy();

/**
 * Функция, меняет найстроки слайдера.
 * @param {Object} effect - объект с описанием эффекта.
 */
const changeSliderOptions = (effect) => {
  const effectOptions = createEffectSliderOptions(effect);

  effectSlider.noUiSlider.updateOptions(effectOptions);
};

/**
 * Функция, применяет выбранный эффект к изображению вноси
 * @param {Object} effect - объект с описанием эффекта.
 */
const changeEffect = (effect) => {
  applyEffect(effect);
  changeSliderOptions(effect);
  removeSliderHandler();
  addSliderHandler(effect);
};

/**
 * Функция, обработчик при применении эффекта к изображению.
 */
const changeEffectHandler = (evt) => {
  if (evt.target.matches('input[name="effect"]')) {
    const effect = EFFECTS[evt.target.value];

    changeEffect(effect);
  }
};

/**
 * Инициализация обработчиков для приминения эффекта к изображению.
 */
const addChangeEffectHandler = () => effectsList.addEventListener('change', changeEffectHandler);

/**
 * Удаление обработчиков для применения эффекта к изображени/.
 */
const removeChangeEffectHadnler = () => effectsList.removeEventListener('change', changeEffectHandler);

/**
 * Инициализация настроек эффектов.
 */
const initializeEffectsSettings = () => {
  const effect = getCheckedEffect();

  applyEffect(effect);
  createSlider(effect);
  addSliderHandler(effect);
  addChangeEffectHandler();
};

/**
 * Деинициализация настроек эффектов.
 */
const deinitializeEffectsSettings = () => {
  destroySlider();
  removeChangeEffectHadnler();
};

export { initializeEffectsSettings, deinitializeEffectsSettings };
