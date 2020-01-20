import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import Moon from '../../../static/assets/moon.svg';
import Sun from '../../../static/assets/sun.svg';
import styled from '@emotion/styled';
import { IEmotionStyledTheme } from '../../types/theme';

interface IToggleThemeButton {
  withText?: boolean;
}

interface IButton extends IToggleThemeButton, IEmotionStyledTheme {}

const Button = styled.button<IButton>`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 40px;
  ${props => props.withText && `width: 40px;`}
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
  color: ${props => props.theme.colors.toggleThemeIcon};

  :hover {
    opacity: 1;
  }

  span {
    margin-left: 20px;
    font-size: 1rem;
  }
`;

export function ToggleThemeButton({ withText }: IToggleThemeButton) {
  const theme = useContext(ThemeContext);
  const isLightTheme = theme.currentTheme === 'light';

  return (
    <Button onClick={theme.toggleTheme}>
      {isLightTheme ? <Moon /> : <Sun />}
      {withText && (
        <span>
          {isLightTheme ? 'Включить тёмную тему' : 'Включить светлую тему'}
        </span>
      )}
    </Button>
  );
}
