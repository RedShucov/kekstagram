const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => data);
};

export { getData };
