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

let activeEffect;
let effectValue;

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
const checkActiveEffect = (effect) => {
  if (effect.name === 'none') {
    effectSliderContainer.classList.add('hidden');

    imagePreview.style.filter = '';
  }

  if (effect.name !== 'none' && effectSliderContainer.classList.contains('hidden')) {
    effectSliderContainer.classList.remove('hidden');
  }
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
 * Функция, для получения настроек эффекта для слайдера.
 */
const createEffectSliderOptions = (effect) => ({
  range: {
    min: effect.min,
    max: effect.max
  },
  start: effect.max,
  step: effect.step,
  connect: 'lower'
});

/**
 * Функция для получения css-стиля эффекта.
 * @param {Object} effect - объект с описанием эффекта.
 * @param {string} value - значение насыщенности эффекта.
 * @returns {string} возващает строку с собранным css-эффектом.
 */
const createEffectStyle = (effect, value) => `${effect.style}(${value}${effect.unit})`;

/**
 * Функция, применяет выбранный эффект к изображению.
 * @param {Object} effect - объект с описанием эффекта.
 */
const applyEffect = (effect) => {
  checkActiveEffect(effect);
  addPreviewEffect(effect);
};

/**
 * Функция, выполняется при изменение значения слайдера, меняет насыщенность эффекта.
 */
const updateSlider = () => {
  effectValue = effectSlider.noUiSlider.get();

  effectValueInput.value = effectValue;

  imagePreview.style.filter = createEffectStyle(activeEffect, effectValue);
};

/**
 * Функция, обработчик изменения значения слайдера.
 */
const updateSliderHandler = () => updateSlider();

/**
 * Функция, создаёт слайдер и передает ему стартовые настройки стандартного эффекта.
 * @param {Object} effect - объект с описанием эффекта.
 */
const createSlider = (effect) => {
  const effectOptions = createEffectSliderOptions(effect);

  noUiSlider.create(effectSlider, effectOptions);

  effectSlider.noUiSlider.on('update', updateSliderHandler);
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
 * Функция, обработчик при применении эффекта к изображению.
 */
const changeEffectHandler = (evt) => {
  if (evt.target.matches('input[name="effect"]')) {
    activeEffect = getCheckedEffect();

    applyEffect(activeEffect);
    changeSliderOptions(activeEffect);
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
  activeEffect = getCheckedEffect();

  applyEffect(activeEffect);
  createSlider(activeEffect);
  addChangeEffectHandler();
};

/**
 * Деинициализация настроек эффектов.
 */
const deinitializeEffectsSettings = () => {
  removeChangeEffectHadnler();
  destroySlider();
};

export { initializeEffectsSettings, deinitializeEffectsSettings };
