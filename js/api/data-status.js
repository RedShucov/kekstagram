const errorModalTemplate = document.querySelector('#error-load').content.querySelector('.error');
const errorUploadModalTemplate = document.querySelector('#error-upload').content.querySelector('.error');
const successModalTemplate = document.querySelector('#success-upload').content.querySelector('.success');

const showDataLoadErrorMessage = () => {
  const errorModal = errorModalTemplate.cloneNode(true);

  errorModal.querySelector('.error__title').textContent = 'Не удалось установить соединение с сервером.';

  document.querySelector('body').append(errorModal);
};

const showDataUploadErrorMessage = () => {
  const errorModal = errorUploadModalTemplate.cloneNode(true);

  document.querySelector('body').append(errorModal);
};

const showDataUploadSuccessMessage = () => {
  const successModal = successModalTemplate.cloneNode(true);

  document.querySelector('body').append(successModal);
};

export { showDataLoadErrorMessage, showDataUploadSuccessMessage, showDataUploadErrorMessage };
