const getUrlByIdController = async (request, response) => {
  const { urlObject } = response.locals;
  try {
    const dataURL = {
      id: urlObject.id,
      shortURL: urlObject.short_url,
      url: urlObject.url
    };

    response.status(200).send(dataURL);
  } catch {
    response.status(500).send('Houve um erro interno ao pegar URL');
  }
};

export default getUrlByIdController;
