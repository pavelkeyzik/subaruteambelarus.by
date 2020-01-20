import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import Moon from '../../../static/assets/moon.svg';
import Sun from '../../../static/assets/sun.svg';
import styled from '@emotion/styled';
import { IEmotionStyledTheme } from '../../types/theme';

const Button = styled.button<IEmotionStyledTheme>`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 40px;
  width: 40px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;

  :hover {
    opacity: 1;
  }

  color: ${props => props.theme.colors.toggleThemeIcon};
`;

export function ToggleThemeButton() {
  const theme = useContext(ThemeContext);

  return (
    <Button onClick={theme.toggleTheme}>
      {theme.currentTheme === 'light' ? <Moon /> : <Sun />}
    </Button>
  );
}
