const getData = (onSuccess, onError) => {
  fetch('https://2.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Failed to fetch');
    })
    .then(onSuccess)
    .catch(onError);
};

export { getData };
