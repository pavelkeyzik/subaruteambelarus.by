/**
 * Interface for theme object
 */
export interface IEmotionTheme {
  colors: {
    primary: string;
    foreground: string;
    headersColor: string;
    headerBackground: string;
    appLogoForeground: string;
    headerBorderColor: string;
    bodyBackground: string;
    bodyForeground: string;
    linkColor: string;
    blockquoteBackground: string;
    blockquoteForeground: string;
    blockquoteBorderColor: string;
    postPreviewBackground: string;
    footerBorderColor: string;
    footerCopyrightColor: string;
    socialsColor: string;
    toggleThemeIcon: string;
    tagForeground: string;
    imageBackground: string;
    stayUpdatedBackground: string;
    stayUpdatedSocialLinksFill: string;
    contentLayoutBackground: string;
    figureCaptionForeground: string;
    articleBigTitleForeground: string;
    mobileMenuIconColor: string;
    mobileMenuLinksColor: string;
    mobileMenuBackground: string;
  };
}

/**
 * Interface for @emotion/styled object
 */
export interface IEmotionStyledTheme {
  theme?: IEmotionTheme;
}
