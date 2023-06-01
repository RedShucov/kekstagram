const photo = document.querySelector('.big-picture');
const photoImage = photo.querySelector('.big-picture__img img');
const photoLikes = photo.querySelector('.likes-count');
const photoComments = photo.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const photoCommentCount = photo.querySelector('.social__comment-count');
const photoCommentsLoader = photo.querySelector('.social__comments-loader');
const photoClosure = photo.querySelector('.big-picture__cancel');
const SHOW_COMMENTS_STEP = 5;

/**
 * Функция, для открытия полноценного изображения.
 */
const openFullPhoto = () => {
  document.body.classList.add('modal-open');
  photo.classList.remove('hidden');
};

/**
 * Функция, для закрытия полноценного изображения.
 */
const closeFullPhoto = () => {
  document.body.classList.remove('modal-open');
  photo.classList.add('hidden');
};

/**
 * Функция, создает HTML-код комментария для отображения в списке комментариев.
 * @param {Object} comment - параметры комментария.
 * @param {string} comment.avatar - URL-адрес аватарки пользователя.
 * @param {string} comment.name - имя пользователя.
 * @param {string} comment.message - текст комментария.
 * @returns {string} - строка с HTML-кодом комментария.
 */
const createComment = ({ avatar, message, name }) => {
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

/**
 * Функция, отрисовывает комментарии к фотографии.
 * @param {Array} photoData.comments - массив комментариев к фотографии.
 */
const renderComments = (comments) => () => {
  const shownСommentsCount = document.querySelectorAll('.social__comment').length;
  const toShowCount = Math.min(shownСommentsCount + SHOW_COMMENTS_STEP, comments.length);

  for (let i = shownСommentsCount; i < toShowCount; i++) {
    const comment = comments[i];

    photoComments.append(createComment(comment));
  }
};

/**
 * Функция, заполняет контейнер с большим фото данными выбранной фотографии.
 * @param {Object} photoData - параметры фотографии.
 * @param {string} photoData.url - URL-адрес фотографии.
 * @param {string} photoData.description - описание фотографии.
 * @param {Array} photoData.comments - массив комментариев к фотографии.
 * @param {number} photoData.likes - количество лайков фотографии.
 */
const renderPhoto = ({ url, description, comments, likes }) => {
  photoCommentCount.classList.add('hidden');
  photoCommentsLoader.classList.add('hidden');

  photoImage.src = url;
  photoImage.alt = description;
  photoLikes.textContent = likes;
  photoComments.innerHTML = '';

  const renderFirstComments = renderComments(comments);
  renderFirstComments();
};

/**
 * Функция, при клике на миниатюру отрисовывает полную версию фотографии на странице.
 * @param {HTMLElement} thumbnail - элемент фотографии в виде разметки.
 */
const onRenderPhotoHandler = (photoData) => () => {
  renderPhoto(photoData);
  openFullPhoto();
};

/**
 * Функция, обработчик при закрытие полной фотографии.
 */
const onClickCloseFullPhoto = () => {
  closeFullPhoto();
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    document.body.classList.remove('modal-open');
    photo.classList.add('hidden');
  }
});

const addEventListenerPhoto = () => {
  photoClosure.addEventListener('click', onClickCloseFullPhoto);
};

addEventListenerPhoto();

export { onRenderPhotoHandler };
