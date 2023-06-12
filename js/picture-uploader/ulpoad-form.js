import { isEscapeKey, isItFocus, showModal, hideModal } from '../util.js';
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
  showModal(imageUploadInterface);

  addPreviewScaleHandlers();
  initializeEffectsSettings();

  // Объединить в функцию
  imageUploadClosure.addEventListener('click', closeModalHandler);
  document.removeEventListener('keydown', keydownUploadFormHandler);
  // Объединить в функцию
};

/**
 * Функция для закрытия интерфейса загрузки и редактирования изображения.
 */
const closeUploadInterface = () => {
  hideModal(imageUploadInterface);

  removePreviewScaleHandlers();
  deinitializeEffectsSettings();

  // Объединить в функцию
  imageUploadClosure.removeEventListener('click', closeModalHandler);
  document.removeEventListener('keydown', keydownUploadFormHandler);
  // Объединить в функцию
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
