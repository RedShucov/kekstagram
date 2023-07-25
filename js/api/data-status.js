import { isEscapeKey } from '../util.js';

const errorLoadModalTemplate = document.querySelector('#error-load').content.querySelector('.error');
const errorUploadModalTemplate = document.querySelector('#error-upload').content.querySelector('.error');
const successUploadModalTemplate = document.querySelector('#success-upload').content.querySelector('.success');

const body = document.querySelector('body');

const showMessage = (message) => {
  document.addEventListener('keydown', keydownMessageHandler);
  message.addEventListener('click', overlayClickHandler);
  body.style.overflow = 'hidden';
  body.append(message);
};

const hideMessage = () => {
  const message = body.querySelector('.success') || body.querySelector('.error');

  document.removeEventListener('keydown', keydownMessageHandler);
  message.removeEventListener('click', overlayClickHandler);
  body.style.overflow = 'auto';
  message.remove();
};

const showDataLoadErrorMessage = () => {
  const errorMessage = errorLoadModalTemplate.cloneNode(true);

  showMessage(errorMessage);
};

const showDataUploadErrorMessage = () => {
  const errorMessage = errorUploadModalTemplate.cloneNode(true);

  showMessage(errorMessage);
};

const showDataUploadSuccessMessage = () => {
  const successMessage = successUploadModalTemplate.cloneNode(true);

  showMessage(successMessage);
};

function keydownMessageHandler(evt) {
  if (isEscapeKey(evt)) {
    hideMessage();
  }
}

function overlayClickHandler(evt) {
  const target = evt.target.classList;

  if (target.contains('success') || target.contains('error')) {
    hideMessage();
  }
}

export { showDataLoadErrorMessage, showDataUploadSuccessMessage, showDataUploadErrorMessage };
