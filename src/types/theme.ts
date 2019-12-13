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
    headersColor: string;
    appLogoForeground: string;
    headerBackground: string;
    bodyBackground: string;
    bodyForeground: string;
    linkColor: string;
    blockquoteBackground: string;
    blockquoteForeground: string;
    blockquoteBorderColor: string;
    postPreviewBackground: string;
  };
}

/**
 * Interface for @emotion/styled object
 */
export interface IEmotionStyledTheme {
  theme?: IEmotionTheme;
}
