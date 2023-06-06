import { isEscapeKey } from '../util.js';

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

const SHOW_COMMENTS_STEP = 5;

/**
 * Функция, для открытия полноценного изображения.
 */
const openFullPhoto = () => {
  document.body.classList.add('modal-open');
  photo.classList.remove('hidden');

  document.addEventListener('keydown', keydownFullPhotoHandler);
};

/**
 * Функция, для закрытия полноценного изображения.
 */
const closeFullPhoto = () => {
  document.body.classList.remove('modal-open');
  photo.classList.add('hidden');

  document.removeEventListener('keydown', keydownFullPhotoHandler);
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
 * @param {Array} comments - массив комментариев к фотографии.
 */
const renderComments = (comments) => () => {
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
 * Функция, заполняет контейнер с большим фото данными выбранной фотографии.
 * @param {Object} photoData - параметры фотографии.
 * @param {string} photoData.url - URL-адрес фотографии.
 * @param {string} photoData.description - описание фотографии.
 * @param {Array} photoData.comments - массив комментариев к фотографии.
 * @param {number} photoData.likes - количество лайков фотографии.
 */
const renderPhoto = ({ url, description, comments, likes }) => {
  photoImage.src = url;
  photoImage.alt = description;
  photoLikes.textContent = likes;
  photoComments.innerHTML = '';

  const renderFirstComments = renderComments(comments);
  renderFirstComments();

  photoCommentsLoader.addEventListener('click', renderComments(comments));
};

/**
 * Функция, обработчик при клике на миниатюру отрисовывает полную версию фотографии на странице.
 * @param {Object} photoData - данные о фотографии.
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
 * Инициализация обработчика события для кнопки закрытия полноразмерной фотографии.
 */
const addEventListenerPhoto = () => {
  photoClosure.addEventListener('click', clickCloseFullPhotoHandler);
};

addEventListenerPhoto();

/**
 * Функция, обработчик для закрытия полноразмерной фотографии при нажатие на клавишу-ESC.
 * @param {KeyboardEvent} event - Объект события нажатия клавиши клавиатуры.
 */
function keydownFullPhotoHandler(event) {
  if (isEscapeKey(event)) {
    closeFullPhoto();
  }
}

export { renderFullPhotoHandler };
