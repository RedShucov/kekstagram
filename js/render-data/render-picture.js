import { isEscapeKey, showModal, hideModal } from '../util.js';

const SHOW_COMMENTS_STEP = 5;

const photo = document.querySelector('.big-picture');
const photoImage = photo.querySelector('.big-picture__img img');
const photoLikes = photo.querySelector('.likes-count');
const photoComments = photo.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const photoCommentsItems = photo.querySelector('.social__comments').children;
const photoCommentCount = photo.querySelector('.social__comment-count');
const photoCommentTotal = photo.querySelector('.comments-count');
const photoCommentsLoader = photo.querySelector('.social__comments-loader');
const photoClosure = photo.querySelector('.big-picture__cancel');

let currentCommentsHandler;

/**
 * Функция, для открытия полноценного изображения.
 */
const openFullPhoto = () => {
  showModal(photo);
  addHandlersToFullPhoto();
};

/**
 * Функция, для закрытия полноценного изображения.
 */
const closeFullPhoto = () => {
  hideModal(photo);
  removeHandlersToFullPhoto();
};

/**
 * Функция, обновляет вывод информации о загруженных и доступных комментариях к фотографии.
 * @param {Array} comments - Список комментариев фотографии.
 */
const updateCommentsCount = (comments) => {
  const shownСommentsCount = document.querySelectorAll('.social__comment').length;

  photoCommentTotal.textContent = comments.length;
  photoCommentCount.innerHTML = `${shownСommentsCount} из <span class="comments-count">${photoCommentTotal.textContent}</span> комментариев`;
};

/**
 * Функция, проверяет список комментариев и если загружены все, скрывает кнопку добавления новых.
 * @param {Array} comments - Список комментариев фотографии.
 */
const checkFullComments = (comments) => {
  if (photoCommentsItems.length === comments.length) {
    photoCommentsLoader.classList.add('hidden');
  } else {
    photoCommentsLoader.classList.remove('hidden');
  }
};

/**
 * Функция, создает HTML-код комментария для отображения в списке комментариев.
 * @param {Object} comment - Параметры комментария.
 * @param {string} comment.avatar - URL-адрес аватарки пользователя.
 * @param {string} comment.name - Имя пользователя.
 * @param {string} comment.message - Текст комментария.
 * @returns {string} - Строка с HTML-кодом комментария.
 */
const createComment = ({ avatar, message, name }) => {
  const comment = commentTemplate.cloneNode(true);
  const image = comment.querySelector('.social__picture');

  image.src = avatar;
  image.alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

/**
 * Функция, отрисовывает комментарии к фотографии.
 * @param {Array} comments - Массив комментариев к фотографии.
 */
const renderComments = (comments) => {
  const shownСommentsCount = document.querySelectorAll('.social__comment').length;
  const toShowCount = Math.min(shownСommentsCount + SHOW_COMMENTS_STEP, comments.length);

  for (let i = shownСommentsCount; i < toShowCount; i++) {
    const comment = comments[i];

    photoComments.append(createComment(comment));
  }

  updateCommentsCount(comments);
  checkFullComments(comments);
};

/**
 * Функция, обработчик события отрисовки комментариев.
 * @param {Array} comments - Массив комментариев к фотографии.
 */
const renderCommentsHandler = (comments) => () => {
  renderComments(comments);
};

/**
 * Функция, заполняет контейнер с большим фото данными выбранной фотографии.
 * @param {Object} photoData - Параметры фотографии.
 * @param {string} photoData.url - URL-адрес фотографии.
 * @param {string} photoData.description - Описание фотографии.
 * @param {Array} photoData.comments - Массив комментариев к фотографии.
 * @param {number} photoData.likes - Количество лайков фотографии.
 */
const renderPhoto = ({ url, description, comments, likes }) => {
  photoImage.src = url;
  photoImage.alt = description;
  photoLikes.textContent = likes;
  photoComments.innerHTML = '';

  renderComments(comments);

  currentCommentsHandler = renderCommentsHandler(comments);
};

/**
 * Функция, обработчик при клике на миниатюру отрисовывает полную версию фотографии на странице.
 * @param {Object} photoData - Данные о фотографии.
 */
const renderFullPhotoHandler = (photoData) => () => {
  renderPhoto(photoData);
  openFullPhoto();
};

/**
 * Функция, обработчик при закрытие полной фотографии.
 */
const clickCloseFullPhotoHandler = () => {
  closeFullPhoto();
};

/**
 * Функция, обработчик для закрытия полноразмерной фотографии при нажатие на клавишу-ESC.
 * @param {KeyboardEvent} evt - Объект события нажатия клавиши клавиатуры.
 */
const keydownFullPhotoHandler = (evt) => {
  if (isEscapeKey(evt)) {
    closeFullPhoto();
  }
};

function addHandlersToFullPhoto() {
  photoCommentsLoader.addEventListener('click', currentCommentsHandler);
  photoClosure.addEventListener('click', clickCloseFullPhotoHandler);
  document.addEventListener('keydown', keydownFullPhotoHandler);
}

function removeHandlersToFullPhoto() {
  photoCommentsLoader.removeEventListener('click', currentCommentsHandler);
  photoClosure.removeEventListener('click', clickCloseFullPhotoHandler);
  document.removeEventListener('keydown', keydownFullPhotoHandler);
}

export { renderFullPhotoHandler };
