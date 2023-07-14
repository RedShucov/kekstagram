const getData = (onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Failed to fetch');
    })
    .then(onSuccess)
    .catch(onError);
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram',
    {
      'method': 'POST',
      'Content-Type': 'multipart/form-data',
      body
    }
  )
    .then((responseOtFormi) => responseOtFormi.json());
};

export { getData, sendData };
