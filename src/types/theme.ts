/**
 * Interface for theme object
 */
export interface IEmotionTheme {
  colors: {
    primary: string;
    secondary: string;
    foreground: string;
    background: string;
    middle: string;

    appLogoForeground: string;
    headerBackground: string;
    bodyBackground: string;
  };
}

/**
 * Interface for @emotion/styled object
 */
export interface IEmotionStyledTheme {
  theme?: IEmotionTheme;
}
