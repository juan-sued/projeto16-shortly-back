import { createToken } from '../services/jwtToken.js';

const signInController = async (request, response) => {
  const { email, password } = request.body;
  const { user } = response.locals;
  try {
    const token = createToken({
      id: user[0].id,
      email,
      password
    });
    const userDataResponse = {
      name: user[0].name,
      token: `Bearer ${token}`
    };

    response.status(200).send(userDataResponse);
  } catch {
    return response.status(500).send('erro ao logar user');
  }
};

export default signInController;
