import { isEscapeKey, isItFocus, showModal, hideModal } from '../util.js';
import { addPreviewScaleHandlers, removePreviewScaleHandlers } from './image-scale.js';
import { initializeEffectsSettings, deinitializeEffectsSettings } from './image-effects.js';
import { resetForm } from './validate-form.js';

const imageUploadForm = document.querySelector('#upload-select-image');
const imageUploadInput = imageUploadForm.querySelector('#upload-file');
const imageUploadInterface = imageUploadForm.querySelector('.img-upload__overlay');
const imageUploadClosure = imageUploadForm.querySelector('#upload-cancel');

/**
 * Функция, для открытия интерфейса загрузки и редактирования изображения.
 */
const openUploadInterface = () => {
  showModal(imageUploadInterface);
  addCloseModalHandlers();
  addPreviewScaleHandlers();
  initializeEffectsSettings();
};

/**
 * Функция, для закрытия интерфейса загрузки и редактирования изображения.
 */
const closeUploadInterface = () => {
  hideModal(imageUploadInterface);
  removeCloseModalHandlers();
  removePreviewScaleHandlers();
  deinitializeEffectsSettings();
  resetForm();
};

/**
 * Функция, обработчик закрытия модального окна.
 */
const closeModalHandler = () => {
  closeUploadInterface();
};

/**
 * Функция, обработчик для закрытия интрефейса добавления новой фотографии при нажатие на клавишу-ESC.
 * @param {KeyboardEvent} evt - Объект события нажатия клавиши клавиатуры.
 */
const keydownUploadFormHandler = (evt) => {
  if (isEscapeKey(evt) && !isItFocus(evt, 'hashtags', 'description')) {
    closeUploadInterface();
  }
};

/**
 * Инициализация обработчиков для закрытия интерфейса добавления новой фотографии.
 */
function addCloseModalHandlers() {
  imageUploadClosure.addEventListener('click', closeModalHandler);
  document.addEventListener('keydown', keydownUploadFormHandler);
}

/**
 * Удаление обработчиков для закрытия интерфейса добавления новой фотографии.
 */
function removeCloseModalHandlers() {
  imageUploadClosure.removeEventListener('click', closeModalHandler);
  document.removeEventListener('keydown', keydownUploadFormHandler);
}

/**
 * Функция, обработчик открытия модального окна.
 */
const openModalHandler = () => {
  openUploadInterface();
};

/**
 * Инициализация обработчиков для модального окна.
 */
const addOpenModalHandlers = () => {
  imageUploadInput.addEventListener('change', openModalHandler);
};

export { addOpenModalHandlers };
