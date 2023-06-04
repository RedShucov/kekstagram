import { isEscapeKey, isItFocus } from '../util.js';

const imageUploadForm = document.querySelector('#upload-select-image');
const imageUploadInput = imageUploadForm.querySelector('#upload-file');
const imageUploadInterface = imageUploadForm.querySelector('.img-upload__overlay');
const imageUploadClosure = imageUploadForm.querySelector('#upload-cancel');

const openUploadInterface = () => {
  document.body.classList.add('modal-open');
  imageUploadInterface.classList.remove('hidden');

  document.addEventListener('keydown', keydownOnnUploadFormHandler);
};

const closeUploadInterface = () => {
  document.body.classList.remove('modal-open');
  imageUploadInterface.classList.add('hidden');

  document.removeEventListener('keydown', keydownOnnUploadFormHandler);
};

function keydownOnnUploadFormHandler(event) {
  if (isEscapeKey(event) && !isItFocus(event, 'hashtags', 'description')) {
    closeUploadInterface();
  }
}

/**
 * Функция обработчик открытия модального окна.
 */
const onOpenModalHandler = () => {
  openUploadInterface();
};

/**
 * Функция обработчик закрытия модального окна.
 */
const onCloseModalHandler = () => {
  closeUploadInterface();
};

/**
 * Инициализация обработчиков для модального окна.
 */
const addModalHandlers = () => {
  imageUploadInput.addEventListener('change', onOpenModalHandler);
  imageUploadClosure.addEventListener('click', onCloseModalHandler);
};

export { addModalHandlers };
