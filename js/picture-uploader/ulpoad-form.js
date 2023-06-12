import { isEscapeKey, isItFocus } from '../util.js';
import { addPreviewScaleHandlers, removePreviewScaleHandlers } from './image-scale.js';
import { initializeEffectsSettings, deinitializeEffectsSettings } from './image-effects.js';

const imageUploadForm = document.querySelector('#upload-select-image');
const imageUploadInput = imageUploadForm.querySelector('#upload-file');
const imageUploadInterface = imageUploadForm.querySelector('.img-upload__overlay');
const imageUploadClosure = imageUploadForm.querySelector('#upload-cancel');

/**
 * Функция для открытия интерфейса загрузки и редактирования изображения.
 */
const openUploadInterface = () => {
  document.body.classList.add('modal-open');
  imageUploadInterface.classList.remove('hidden');

  addPreviewScaleHandlers();
  initializeEffectsSettings();

  imageUploadClosure.addEventListener('click', closeModalHandler);
  document.removeEventListener('keydown', keydownUploadFormHandler);
};

/**
 * Функция для закрытия интерфейса загрузки и редактирования изображения.
 */
const closeUploadInterface = () => {
  document.body.classList.remove('modal-open');
  imageUploadInterface.classList.add('hidden');

  removePreviewScaleHandlers();
  deinitializeEffectsSettings();

  imageUploadClosure.removeEventListener('click', closeModalHandler);
  document.removeEventListener('keydown', keydownUploadFormHandler);
};

/**
 * Функция обработчик открытия модального окна.
 */
const openModalHandler = () => {
  openUploadInterface();
};

/**
 * Функция обработчик закрытия модального окна.
 */
function closeModalHandler() {
  closeUploadInterface();
}

/**
 * Функция, обработчик для закрытия интрефейса добавления новой фотографии при нажатие на клавишу-ESC.
 * @param {KeyboardEvent} evt - Объект события нажатия клавиши клавиатуры.
 */
function keydownUploadFormHandler(evt) {
  if (isEscapeKey(evt) && !isItFocus(evt, 'hashtags', 'description')) {
    closeUploadInterface();
  }
}

/**
 * Инициализация обработчиков для модального окна.
 */
const addModalHandlers = () => {
  imageUploadInput.addEventListener('change', openModalHandler);
};

export { addModalHandlers };
