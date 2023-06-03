/**
 * Функция, проверяетявляется ли нажатая клавиша Escape.
 * @param {KeyboardEvent} event - Объект события нажатия клавиши клавиатуры.
 * @returns {boolean} - Возвращает true, если нажата клавиша Escape, иначе возвращает false.
 */
const isEscapeKey = (event) => event.key === 'Escape';

export { isEscapeKey };
