import { isEscapeKey } from '../util.js';

const imageUploadForm = document.querySelector('#upload-select-image');
const imageUploadInput = imageUploadForm.querySelector('#upload-file');
const imageUploadInterface = imageUploadForm.querySelector('.img-upload__overlay');

const openUploadInterface = () => {
  document.body.classList.add('modal-open');
  imageUploadInterface.classList.remove('hidden');

  document.addEventListener('keydown', onUploadKeydown);
};

const closeUploadInterface = () => {
  document.body.classList.remove('modal-open');
  imageUploadInterface.classList.add('hidden');

  document.removeEventListener('keydown', onUploadKeydown);
};

function onUploadKeydown(event) {
  if (isEscapeKey(event)) {
    closeUploadInterface();
  }
}

imageUploadInput.addEventListener('change', openUploadInterface);
