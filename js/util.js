/**
 * Функция, проверяет является ли нажатая клавиша Escape.
 * @param {KeyboardEvent} event - Объект события нажатия клавиши клавиатуры.
 * @returns {boolean} - Возвращает true, если нажата клавиша Escape, иначе возвращает false.
 */
const isEscapeKey = (event) => event.key === 'Escape';

/**
 * Функция, проверяет,соответствует ли атрибут 'name' цели данного события любому из указанных атрибутов 'name' тегов.
 * @param {Event} event - Объект события.
 * @param {Array} names - Атрибуты 'name' для сопоставления с атрибутом именем цели события.
 * @returns {boolean} Возвращает true, если имя цели события соответствует любому из тегов, в противном случае false.
 */
const isItFocus = (event, ...names) => names.some((name) => event.target.name === name);

export { isEscapeKey, isItFocus };
