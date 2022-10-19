import * as shortenRepository from '../repositories/shortenRepository.js';
import * as controllerHelper from './controllerHelper.js';

const shortenURLController = async (request, response) => {
  const { userId, url, shortUrl } = response.locals.shortenData;

  try {
    await shortenRepository.insertShortenUrl({ url, userId, shortUrl });

    return controllerHelper.createdResponse(response);
  } catch {
    return controllerHelper.serverErrorResponse(response);
  }
};
export default shortenURLController;
