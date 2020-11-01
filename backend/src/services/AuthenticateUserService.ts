import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '../config/auth'

import User from '../models/User'

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {

    // Validação do email de um usuario valido
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({ where: { email }})

    if (!user) {
      throw new Error('Incorrect email/password combination.')
    }

    // user.password - Senha criptografada
    // password - Senha não criptografada

    const passwordMarched = await compare(password, user.password)

    if (!passwordMarched) {
      throw new Error('Incorrect email/password combination.')
    }
 
    // Usuário autenticado
    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })
    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService