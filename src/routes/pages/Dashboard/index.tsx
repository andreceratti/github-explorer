import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/17303569?s=460&u=da84c73866c5badf09300a099c1714687fdd6c57&v=4"
            alt="Imagem de Perfil"
          />
          <div>
            <strong>repositorio/blabla/</strong>
            <p>Descrição do repo asqui!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
