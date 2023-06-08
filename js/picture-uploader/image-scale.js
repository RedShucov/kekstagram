const imageUpload = document.querySelector('.img-upload');
const inputScaleValue = imageUpload.querySelector('.scale__control--value');
const imagePreview = imageUpload.querySelector('.img-upload__preview img');
const buttonDecreaseScale = imageUpload.querySelector('.scale__control--smaller');
const buttonIncreaseScale = imageUpload.querySelector('.scale__control--bigger');

const ScaleSettings = {
  DEFAULT_VALUE: 100,
  MAX_VALUE: 100,
  MIN_VALUE: 25,
  SCALE_STEP: 25
};

const decreasePreviewScale = () => {
  let scaleValue = parseInt(inputScaleValue.value, 10);

  if (scaleValue > ScaleSettings.MIN_VALUE) {
    scaleValue -= ScaleSettings.SCALE_STEP;

    inputScaleValue.value = `${scaleValue}%`;

    imagePreview.style.transform = `scale(${scaleValue}%)`;
  }
};

const increasePreviewScale = () => {
  let scaleValue = parseInt(inputScaleValue.value, 10);

  if (scaleValue < ScaleSettings.MAX_VALUE) {
    scaleValue += ScaleSettings.SCALE_STEP;

    inputScaleValue.value = `${scaleValue}%`;

    imagePreview.style.transform = `scale(${scaleValue}%)`;
  }
};

const decreasePreviewScaleHandler = () => {
  decreasePreviewScale();
};

const increasePreviewScaleHandler = () => {
  increasePreviewScale();
};

const addPreviewScaleHandlers = () => {
  buttonDecreaseScale.addEventListener('click', decreasePreviewScaleHandler);

  buttonIncreaseScale.addEventListener('click', increasePreviewScaleHandler);
};

const removePreviewScaleHandlers = () => {
  buttonDecreaseScale.removeEventListener('click', decreasePreviewScaleHandler);

  buttonIncreaseScale.removeEventListener('click', increasePreviewScaleHandler);
};

export { addPreviewScaleHandlers, removePreviewScaleHandlers };
