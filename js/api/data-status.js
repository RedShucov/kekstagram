const errorModalTemplate = document.querySelector('#error-load').content.querySelector('.error');

const dataLoadError = (message) => {
  const errorModal = errorModalTemplate.cloneNode(true);

  errorModal.querySelector('.error__title').textContent = message;

  document.querySelector('body').append(errorModal);
};

const dataLoadErrorHandler = (error) => {
  error.message = 'Не удалось установить соединение с сервером.';

  dataLoadError(error.message);
};

export { dataLoadErrorHandler };
