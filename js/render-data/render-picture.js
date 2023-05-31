const siteBody = document.body;
const photo = document.querySelector('.big-picture');
const photoComments = photo.querySelector('.social__comments');
const photoCommentCount = photo.querySelector('.social__comment-count');
const photoСurrentComment = photo.querySelector('.comments-current');
const photoTotalComment = photo.querySelector('.comments-total');
const photoCommentsLoader = photo.querySelector('.social__comments-loader');
const photoImage = photo.querySelector('.big-picture__img img');
const photoLikes = photo.querySelector('.likes-count');

const photoClosure = photo.querySelector('.big-picture__cancel');

/**
 * Функция, для открытия полноценного изображения.
 */
const openFullPhoto = () => {
  siteBody.classList.add('modal-open');
  photo.classList.remove('hidden');
};

/**
 * Функция, для закрытия полноценного изображения.
 */
const closeFullPhoto = () => {
  siteBody.classList.remove('modal-open');
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
const createComment = ({ avatar, name, message }) => (
  `<li class="social__comment">
    <img
        class="social__picture"
        src="${avatar}"
        alt="${name}"
        width="35" height="35">
    <p class="social__text">${message}</p>
  </li>`
);

/**
 * Функция, отрисовывает комментарии к фотографии.
 * @param {Array} photoData.comments - массив комментариев к фотографии.
 */
const renderComments = (comments) => () => {
  let shownСommentsCount = photoСurrentComment.textContent;

  const toShowCount = Math.min(shownСommentsCount + 5, comments.length);

  for (let i = shownСommentsCount; i < toShowCount; i++) {
    const comment = comments[i];
    photoComments.insertAdjacentHTML('beforeend', createComment(comment));
    photoСurrentComment.textContent = i + 1;
  }

  shownСommentsCount = toShowCount;
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
  photoTotalComment.textContent = comments.length;
  photoComments.innerHTML = '';
  photoСurrentComment.textContent = 0;

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
    siteBody.classList.remove('modal-open');
    photo.classList.add('hidden');
  }
});

const addEventListenerPhoto = () => {
  photoClosure.addEventListener('click', onClickCloseFullPhoto);
};

addEventListenerPhoto();

export { onRenderPhotoHandler };
