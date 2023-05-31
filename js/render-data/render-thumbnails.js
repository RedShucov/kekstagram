const usersPhotoList = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

/**
 * Функция, создаёт одну миниатюру на основе данных о ней.
 * @param {Object} photoData - данные о фотокарточке.
 * @param {string} photoData.url - URL фотокарточки.
 * @param {string} photoData.description - Описание фотокарточки.
 * @param {Array} photoData.comments - Список комментариев под к фотокарточке.
 * @param {number} photoData.likes - Количесвто лайков фотокарточки.
 * @returns {HTMLElement} элемент миниатюры.
 */
const createThumbnail = (photoData) => {
  const thumbnail = templatePicture.cloneNode(true);
  const { id, url, description, comments, likes } = photoData;

  thumbnail.dataset.photoId = id;
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

/**
 * Функция, создаёт массив HTML-элементов на основе массива данных о них.
 * @param {Array} photosData - массив данных о фотокарточках.
 * @returns {Array} массив элементов миниатюр.
 */
const createThumbnails = (photosData) => photosData.map((thumbnail) => createThumbnail(thumbnail));

/**
 * Функция, отрисовывает миниатюры фотографий на странице.
 */
const renderThumbnails = (photosData) => {
  const thumbnails = createThumbnails(photosData);

  thumbnails.forEach((thumbnail) => usersPhotoList.append(thumbnail));
};

export { renderThumbnails };
