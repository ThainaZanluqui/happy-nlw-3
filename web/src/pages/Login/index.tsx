import React from 'react';

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo-2.svg'

import './styles.css';

const Login: React.FC = () => {
  return (
    <div id="login">
      <div className='content-wrapper'>
        <img src={logoImg} alt='Happy' />

        <div className='location'>
          <strong>Sacomã</strong>
          <span>São Paulo</span>
        </div>
      </div>

      <main>
        <Link to="/" className="back">
          <FiArrowLeft size={20} color="#15c3d6" />
        </Link>

        <form className="login-form">
          <fieldset>
            <legend>Fazer login</legend>

            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input
                id='email'
                name='email'
                autoComplete='email'
                maxLength={255}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Senha</label>
              <input id="password" type="password" autoComplete="current-password" maxLength={255} />
            </div>

            <div className="input-group">
              <div className="check-block">
                <input type="checkbox" name='remember' id='remember' />
                <label htmlFor='remember'>Lembrar-me</label>
              </div>

              <Link to="/forgot/password">
                Esqueci minha senha
              </Link>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
