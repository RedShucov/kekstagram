const uploadForm = document.querySelector('.img-upload__form');

const DescriptionRules = {
  MIN_LENGTH: 0,
  MAX_LENGTH: 140
};

const HastagsRules = {
  MAX_HASHTAGS: 5,
  MIN_LENGTH: 1,
  MAX_LENGTH: 20
};

/**
 * Инициализация pristine.
 */
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper'
});

/**
 * Функция, валидирует введенные хэштеги.
 * @param {string} value - Данные из поля ввода хэштегов, в виде строки.
 * @returns {boolean} true или false в завимости от пройденной валидации.
 */
const validateHashtags = (value) => {
  // Так как это поле необязательное, в слуаче если поле пустое, пропускает валидацию.
  if (!value) {
    return true;
  }

  const hashtags = value.split(' ');
  const hashtagPattern = new RegExp(`^#[a-zа-яё0-9]{${HastagsRules.MIN_LENGTH},${HastagsRules.MAX_LENGTH}}$`, 'i');

  // Проверяет каждый введенный хэштег на соотвествие с регулярным выражением.
  const validHastags = hashtags.every((hashtag) => hashtagPattern.test(hashtag));

  // Проверяет массив хэштегов на дубликаты.
  const hasDuplicates = new Set(hashtags).size !== hashtags.length;

  // Если есть дубликаты, или хэштегов больше, чем разрешенное количество, возращаем false.
  if (hasDuplicates || hashtags.length > HastagsRules.MAX_HASHTAGS) {
    return false;
  }

  return validHastags;
};

/**
 * Функция, валидирует введенный комментарий.
 * @param {string} value - Данные из поля ввода описания, в виде строки.
 * @returns {boolean} true или false в завимости от пройденной валидации.
 */
const validateDescription = (value) => value.length >= DescriptionRules.MIN_LENGTH && value.length <= DescriptionRules.MAX_LENGTH;

/**
 * Добаление валидатора для поля описания.
 */
pristine.addValidator(
  uploadForm.querySelector('[name="description"]'),
  validateDescription
);

/**
 * Добаление валидатора для поля хэштегов.
 */
pristine.addValidator(
  uploadForm.querySelector('[name="hashtags"]'),
  validateHashtags
);

const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      pristine.reset();
      uploadForm.reset();
    }
  });
};

export { setUserFormSubmit };
