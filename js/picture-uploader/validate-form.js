const DescriptionRules = {
  MIN_LENGTH: 20,
  MAX_LENGTH: 140
};

const HastagsRules = {
  MAX_HASHTAGS: 5,
  MIN_LENGTH: 1,
  MAX_LENGTH: 20
};

const HastagsPatterns = {
  FITST_SIGN: /^#/i,
  BODY: new RegExp(`^#[a-zа-яё0-9]{${HastagsRules.MIN_LENGTH},${HastagsRules.MAX_LENGTH}}$`, 'i')
};

const uploadForm = document.querySelector('.img-upload__form');

/**
 * Инициализация pristine.
 */
const pristine = new Pristine(
  uploadForm,
  {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--invalid',
    successClass: 'img-upload__field-wrapper--valid',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'div',
    errorTextClass: 'input-error'
  }
);

/**
 * Функция, валидирует введенные хэштеги на соотвествие первого символа.
 * @param {string} hashtags - Данные из поля ввода хэштегов, в виде строки.
 * @returns {boolean} true или false в завимости от пройденной валидации.
 */
const validateHashtagFirstSign = (hashtags) => hashtags.split(' ').every((hashtag) => HastagsPatterns.FITST_SIGN.test(hashtag));

/**
 * Функция, валидирует введенные хэштеги на соотвествие общего паттерна.
 * @param {string} hashtags - Данные из поля ввода хэштегов, в виде строки.
 * @returns {boolean} true или false в завимости от пройденной валидации.
 */
const validateHashtagPattern = (hashtags) => hashtags.split(' ').every((hashtag) => HastagsPatterns.BODY.test(hashtag));

/**
 * Функция, валидирует введенные хэштеги на наличие дубликатов, включая разные регистры.
 * @param {string} hashtags - Данные из поля ввода хэштегов, в виде строки.
 * @returns {boolean} true если дубликатов нет, false если дубликаты есть.
 */
const validateHashtagDuplicates = (hashtags) => {
  const lowerCaseHashtags = hashtags.split(' ').map((hashtag) => hashtag.toLowerCase());
  return new Set(lowerCaseHashtags).size === lowerCaseHashtags.length;
};

/**
 * Функция, валидирует
 * @param {string} hashtags - Данные из поля ввода хэштегов, в виде строки.
 * @returns
 */
const validateHashtagsLength = (hashtags) => hashtags.split(' ').length <= HastagsRules.MAX_HASHTAGS;

/**
 * Функция, валидирует введенный комментарий.
 * @param {string} value - Данные из поля ввода описания, в виде строки.
 * @returns {boolean} true или false в завимости от пройденной валидации.
 */
const validateDescription = (value) => value.length >= DescriptionRules.MIN_LENGTH && value.length <= DescriptionRules.MAX_LENGTH;

/**
 * Добавление валидаторов для поля хештегов.
 */
pristine.addValidator(
  uploadForm.querySelector('[name="hashtags"]'),
  validateHashtagFirstSign,
  'Хэштег должен начинаться с #'
);

pristine.addValidator(
  uploadForm.querySelector('[name="hashtags"]'),
  validateHashtagPattern,
  `Хэштег должен быть без спец-символов и не длиннее ${HastagsRules.MAX_LENGTH} символов`
);

pristine.addValidator(
  uploadForm.querySelector('[name="hashtags"]'),
  validateHashtagsLength,
  `Хештегов должно быть не больше ${HastagsRules.MAX_HASHTAGS}`
);

pristine.addValidator(
  uploadForm.querySelector('[name="hashtags"]'),
  validateHashtagDuplicates,
  'Хештеги не должны повторяться'
);

/**
 * Добаление валидатора для поля описания.
 */
pristine.addValidator(
  uploadForm.querySelector('[name="description"]'),
  validateDescription,
  `Комментарий должен содержать от ${DescriptionRules.MIN_LENGTH} до ${DescriptionRules.MAX_LENGTH}`
);

/**
 * Инициализация обработчика события для формы отправки нового изображения.
 */
const addUserFormSubmitHandler = () => {
  uploadForm.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();

    if (isValid) {
      pristine.reset();
      uploadForm.reset();
    } else {
      evt.preventDefault();
    }
  });
};

export { addUserFormSubmitHandler };
