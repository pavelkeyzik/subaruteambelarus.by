import { lightTheme } from './light-theme';
import { darkTheme } from './dark-theme';
import { IEmotionTheme } from '../types/theme';

export function getTheme(themeName = 'light'): IEmotionTheme {
  switch (themeName) {
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
}
