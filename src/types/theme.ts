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
    linkColor: string;
    linkColorHover: string;
    blockquoteBackground: string;
    blockquoteForeground: string;
    blockquoteBorderColor: string;
    postPreviewBackground: string;
    postPreviewShadow: string;
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
    tableBorderColor: string;
    embeedBackground: string;
  };
}

/**
 * Interface for @emotion/styled object
 */
export interface IEmotionStyledTheme {
  theme?: IEmotionTheme;
}
