import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/create-done.css'

const pages: React.FC = () => {
  return (
    <div id="page-done">
      <div className="content-wrapper">
        <main>
          <h1>Ebaaa!</h1>
          <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</p>
        </main>

        <Link to="/app" className="back-map">
          Voltar para o mapa
        </Link>
      </div>
    </div>
  )
}

export default pages;