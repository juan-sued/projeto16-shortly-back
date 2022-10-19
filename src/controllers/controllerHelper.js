const STATUS_CODE = Object.freeze({
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500
});
const STATUS_TEXT = Object.freeze({
  CREATED: 'created',
  BAD_REQUEST: 'bad request',
  OK: 'Ok'
});

function badRequestResponse(response, text = STATUS_TEXT.BAD_REQUEST) {
  return response.status(STATUS_CODE.BAD_REQUEST).send(text);
}

function createdResponse(response, text = STATUS_TEXT.CREATED) {
  return response.status(STATUS_CODE.CREATED).send(text);
}

function okResponse(response, text = STATUS_TEXT.OK) {
  return response.status(STATUS_CODE.OK).send(text);
}

function serverErrorResponse(response, error) {
  return response.status(STATUS_CODE.SERVER_ERROR).send('Erro interno do servidor!');
}

export { badRequestResponse, createdResponse, okResponse, serverErrorResponse };
