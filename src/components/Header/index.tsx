import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const history = useHistory();
  const handleImport = useCallback(() => {
    history.push('/import');
  }, [history]);

  const handleDashBoard = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <ul>
            <li>
              <button type="button" onClick={handleDashBoard}>
                Listagem
              </button>
            </li>
            <li>
              <button type="button" onClick={handleImport}>
                Importar
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};
export default Header;
