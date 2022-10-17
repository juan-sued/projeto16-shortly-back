const getUrlByIdController = async (request, response) => {
  const { urlObject } = response.locals;
  try {
    const dataURL = {
      id: urlObject[0],
      shortURL: urlObject[0].short_url,
      url: urlObject[0].url
    };

    response.send(dataURL);
  } catch {
    response.status(500).send('Houve um erro interno ao pegar URL');
  }
};

export default getUrlByIdController;
