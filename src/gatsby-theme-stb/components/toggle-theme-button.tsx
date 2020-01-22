import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import Moon from '../../../static/assets/moon.svg';
import Sun from '../../../static/assets/sun.svg';
import styled from '@emotion/styled';
import { availableThemes } from '../../constants';

interface IToggleThemeButton {
  withText?: boolean;
}

const Button = styled.button<IToggleThemeButton>`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  min-width: 40px;
  height: 40px;
  ${props => props.withText && `width: 40px;`}
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
  color: var(--toggleThemeIcon);

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
  const currentTheme = theme.currentTheme;
  const isLightTheme = currentTheme === availableThemes.light;

  return (
    <Button onClick={theme.toggleTheme}>
      {currentTheme && (
        <React.Fragment>
          {isLightTheme ? <Moon /> : <Sun />}
          {withText && (
            <span>
              {isLightTheme ? 'Включить тёмную тему' : 'Включить светлую тему'}
            </span>
          )}
        </React.Fragment>
      )}
    </Button>
  );
}
