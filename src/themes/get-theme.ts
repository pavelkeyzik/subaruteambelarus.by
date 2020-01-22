import { lightTheme } from './light-theme';
import { darkTheme } from './dark-theme';
import { IEmotionTheme } from '../types/theme';
import { availableThemes } from '../constants';

function getCSSStringOfColors(theme: IEmotionTheme): string {
  return Object.keys(theme.colors)
    .map(key => `--${key}: ${theme.colors[key]};`)
    .join('\n');
}

export function getTheme(themeName = availableThemes.light): string {
  switch (themeName) {
    case availableThemes.light:
      return getCSSStringOfColors(lightTheme);
    case availableThemes.dark:
      return getCSSStringOfColors(darkTheme);
    default:
      console.error('Theme not found and we set it to default light theme');
      return getCSSStringOfColors(lightTheme);
  }
}
