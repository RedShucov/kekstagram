import { renderFullPhotoHandler } from './render-picture.js';

const usersPhotoList = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

/**
 * Функция, создаёт одну миниатюру на основе данных о ней.
 * @param {Object} photoData - данные о фотокарточке.
 * @param {string} photoData.url - URL фотокарточки.
 * @param {string} photoData.description - Описание фотокарточки.
 * @param {Array} photoData.comments - Список комментариев под к фотокарточке.
 * @param {number} photoData.likes - Количесвто лайков фотокарточки.
 */
const createThumbnail = (photoData) => {
  /**
   * @param {HTMLElement} thumbnail - элемент миниатюры.
   */
  const thumbnail = templatePicture.cloneNode(true);
  const { url, description, comments, likes } = photoData;

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  thumbnail.addEventListener('click', renderFullPhotoHandler(photoData));

  usersPhotoList.append(thumbnail);
};

/**
 * Функция, отрисовывает миниатюры фотографий на странице.
 * @param {Array} photosData
 */
const renderThumbnails = (photosData) => {
  photosData.forEach((photoData) => createThumbnail(photoData));
};

export { renderThumbnails };
