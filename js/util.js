/**
 * Функция, проверяет является ли нажатая клавиша Escape.
 * @param {KeyboardEvent} evt - Объект события нажатия клавиши клавиатуры.
 * @returns {boolean} - Возвращает true, если нажата клавиша Escape, иначе возвращает false.
 */
const isEscapeKey = (evt) => evt.key === 'Escape';

/**
 * Функция, проверяет,соответствует ли атрибут 'name' цели данного события любому из указанных атрибутов 'name' тегов.
 * @param {Event} evt - Объект события.
 * @param {Array} names - Атрибуты 'name' для сопоставления с атрибутом именем цели события.
 * @returns {boolean} Возвращает true, если имя цели события соответствует любому из тегов, в противном случае false.
 */
const isItFocus = (evt, ...names) => names.some((name) => evt.target.name === name);

/**
 * Функция, отоброжает модальный элемент интерфейса.
 * @param {HTMLElement} element
 */
const showModal = (element) => {
  document.body.classList.add('modal-open');
  element.classList.remove('hidden');
};

/**
 * Функция, скрывает модальный элемент интерфейса.
 * @param {HTMLElement} element
 */
const hideModal = (element) => {
  document.body.classList.remove('modal-open');
  element.classList.add('hidden');
};

export { isEscapeKey, isItFocus, showModal, hideModal };
