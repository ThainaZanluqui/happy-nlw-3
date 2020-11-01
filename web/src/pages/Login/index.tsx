import React, { useRef, useCallback, useContext} from 'react';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useField } from '@unform/core';
import * as Yup from 'yup'

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo-2.svg'

import AuthContext from '../../contexts/AuthContext'

import { Container, Content, Background } from './styles'

const Login: React.FC = () => {

  // Handler Submit
  const formRef = useRef<FormHandles>(null)

  const { name } = useContext(AuthContext)


  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatorio')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatoria'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

    } catch (err) {

    }
  }, [])

  return (
    <Container>
      <Background>
        <img src={logoImg} alt="Happy"/>

        <strong>Sacomã</strong>
        <span>São Paulo</span>
      </Background>

      <Content>
        <Link to="/" className="back">
        <FiArrowLeft size={20} color="#15c3d6" />
        </Link>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Fazer login</h1>

          <input 
            id='email' 
            name='email' 
            autoComplete='email' 
            placeholder="E-mail"
          />

          <input  
            id='password' 
            name='password' 
            type="password" 
            placeholder="Senha"
          />

          <Link to="" className="changePass">
            Esqueci minha senha
          </Link>

          <button type="submit">
            Confirmar
          </button>
        </Form>
      </Content>
    </Container>

  );
};

export default Login;
