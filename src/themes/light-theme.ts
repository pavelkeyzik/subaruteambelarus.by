import { IEmotionTheme } from '../types/theme';

const ACCENT = '#006ad1';

export const lightTheme: IEmotionTheme = {
  colors: {
    primary: ACCENT,
    foreground: '#333',
    headersColor: '#111',
    headerBackground: '#fff',
    bodyBackground: '#f6f7fa',
    appLogoForeground: '#333',
    headerBorderColor: '#eee',
    linkColor: ACCENT,
    blockquoteBackground: '#eee',
    blockquoteForeground: '#555',
    blockquoteBorderColor: '#555',
    postPreviewBackground: '#fff',
    postPreviewShadow: '0 2px 4px rgba(0, 0, 0, .05)',
    footerBorderColor: '#ccc',
    footerCopyrightColor: '#888',
    socialsColor: '#333',
    toggleThemeIcon: '#333',
    tagForeground: '#777',
    imageBackground: '#e9e9ec',
    stayUpdatedBackground: '#fefefe',
    stayUpdatedSocialLinksFill: '#444',
    contentLayoutBackground: '#fff',
    figureCaptionForeground: '#555',
    articleBigTitleForeground: '#fff',
    mobileMenuIconColor: '#333',
    mobileMenuLinksColor: '#444',
    mobileMenuBackground: '#fff',
  },
};
